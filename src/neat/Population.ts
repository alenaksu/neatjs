import { Species } from './Species';
import { Organism } from './Organism';
import { speciateOrganism, descending } from '../utils';
import Network from '../network/Network';
import { ConnectionGene } from './ConnectionGene';
import { NodeGene } from './NodeGene';
import { FitnessFunction, NEATConfig } from '../types';

export class Population {
    size: number;
    species: Array<Species> = [];
    organisms: Array<Organism> = [];
    config: NEATConfig;
    generation: number = 1;

    constructor(config: NEATConfig) {
        this.size = config.populationSize;
        this.config = config;
    }

    save(): void {
        console.error('not implemented');
    }

    static from(
        config: NEATConfig,
        {
            nodes,
            connections
        }: { nodes: NodeGene[]; connections: ConnectionGene[] }
    ) {
        const population = new Population(config);
        const organism = new Organism();

        nodes.forEach(organism.addNode.bind(organism));
        connections.forEach(connection =>
            organism.addConnection(config, connection)
        );

        const size = config.populationSize;
        for (let i = 0; i < size; i++) {
            const organismCopy = organism.copy();
            organismCopy.mutateConnectionsWeights(config);

            population.addOrganism(organismCopy);
        }

        population.speciate();

        return population;
    }

    getSuperChamp() {
        return this.organisms.length
            ? this.organisms.reduce((champ, organism) =>
                  organism.originalFitness > champ.originalFitness
                      ? organism
                      : champ
              )
            : null;
    }

    addOrganism(organism: Organism) {
        this.organisms.push(organism);
    }

    removeOrganism(organism: Organism) {
        const index = this.organisms.indexOf(organism);
        if (~index) this.organisms.splice(index, 1);
    }

    speciate(): void {
        this.organisms.forEach(organism =>
            speciateOrganism(this.config, organism, this.species)
        );
    }

    epoch() {
        this.generation++;

        const { species, config, generation } = this;

        const organisms = [...this.organisms];

        // Adjust compatibility threshold
        if (
            config.adjustCompatibilityThreshold &&
            species.length !== config.compatibilityModifierTarget
        ) {
            config.compatibilityThreshold +=
                -config.compatibilityModifier *
                (species.length > config.compatibilityModifierTarget ? -1 : 1);

            config.compatibilityThreshold = Math.max(
                config.compatibilityThreshold,
                config.compatibilityModifier
            );
        }

        let overallAverage = 0;
        // Adjust fitness of species' organisms
        species.forEach(species => {
            species.adjustFitness(config);
            overallAverage += species.averageFitness;
        });

        organisms.forEach((organism, i) => {
            // Remove all organisms marked for death
            if (organism.kill) {
                this.removeOrganism(organism);
                organism.species!.removeOrganism(organism);
            } else {
                organism.expectedOffspring = Math.round(
                    organism.originalFitness / overallAverage
                );
            }
        });

        const sortedSpecies = [...species].sort(
            descending((i: Species) => i.maxFitness)
        );

        // Reproduce all species
        sortedSpecies.forEach(species => {
            species.expectedOffspring = Math.round(
                (species.averageFitness / overallAverage) * this.size
            );
            species.reproduce(config, generation, this, sortedSpecies);
        });

        // Remove all the organism from the old generation
        [...this.organisms].forEach(organism => {
            this.removeOrganism(organism);
            organism.species!.removeOrganism(organism);
        });

        // Add species' organisms to current generation
        this.species = species.filter(species => {
            // Remove empty species
            if (!species.organisms.length) return false;
            // Add organisms to population
            else this.organisms.push(...species.organisms);

            species.age++;

            return true;
        });

        // this.speciate();
    }

    run(
        fitnessFn: FitnessFunction,
        maxRuns: number = Infinity,
        delay: number = 0
    ): Promise<Organism> {
        return new Promise(async (resolve, reject) => {
            const { config } = this;
            while (!Number.isFinite(maxRuns) || maxRuns--) {
                for (const org of this.organisms) {
                    const net = org.getNetwork();
                    org.fitness = await fitnessFn(net, org, this!);

                    if (org.fitness >= config.fitnessThreshold)
                        return resolve(org);
                }
                this!.epoch();

                if (delay)
                    await new Promise(resolve => setTimeout(resolve, delay));
            }
            reject();
        });
    }
}
