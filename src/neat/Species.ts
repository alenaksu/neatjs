import { Organism } from './Organism';
import {
    rnd,
    getRandomItems,
    mutateGenome,
    getRandomSpecies,
    compatibility,
    crossover,
    speciateOrganism,
    descending
} from '../utils';
import { Population } from './Population';
import { NEATConfig } from '../types';

export class Species {
    /**
     * The organisms of the species
     */
    organisms: Array<Organism> = [];
    /**
     * Representative of the species (random)
     */
    specimen?: Organism;
    /**
     * Mark the species for extinction
     */
    extinct: boolean = false;
    /**
     * Species' age
     */
    age: number = 0;
    /**
     * Age from last improvement
     */
    ageOfLastImprovement: number = 0;
    /**
     * Max fitness ever
     */
    maxFitness: number = 0;
    /**
     * Average fitness
     */
    averageFitness: number = 0;
    /**
     * Number of expected offspring in proportion to the sum of adjusted fitnesses
     */
    expectedOffspring: number = 0;

    addOrganism(organism: Organism) {
        if (!this.specimen) this.specimen = organism;

        this.organisms.push(organism);
        organism.species = this;
    }

    removeOrganism(organism: Organism) {
        const index = this.organisms.indexOf(organism);
        if (~index) this.organisms.splice(index, 1);
    }

    getSpecimen(): Organism {
        return this.specimen!;
    }

    getChampion(): Organism {
        return this.organisms[0];
    }

    adjustFitness(config: NEATConfig): void {
        let totalFitness = 0;
        this.extinct = !!(
            this.age - this.ageOfLastImprovement + 1 >
            config.dropoffAge
        );

        this.organisms.forEach((organism: Organism) => {
            organism.originalFitness = organism.fitness;

            if (this.extinct) {
                // Penalty for a long period of stagnation (divide fitness by 100)
                organism.fitness *= 0.01;
            }

            if (this.age <= 10) {
                // boost young organisms
                organism.fitness *= config.ageSignificance;
            }

            organism.fitness =
                Math.max(organism.fitness, 0.0001) / this.organisms.length;

            totalFitness += organism.originalFitness;
        });

        this.organisms.sort(descending((i: Organism) => i.fitness));
        [this.specimen] = getRandomItems(this.organisms, 1);

        this.averageFitness = totalFitness / this.organisms.length;

        // update age of last improvement
        if (this.organisms[0].originalFitness > this.maxFitness) {
            this.maxFitness = this.organisms[0].originalFitness;
            this.ageOfLastImprovement = this.age;
        }

        const removeFrom = Math.floor(
            this.organisms.length * config.survivalThreshold + 1
        );

        for (let i = removeFrom; i < this.organisms.length; i++)
            this.organisms[i].kill = true;
    }

    /**
     * Perform mating and mutation to form next generation.
     * The sorted_species is ordered to have best species in the beginning.
     * Returns list of baby organisms as a result of reproduction of all organisms in this species.
     * @param generation
     */
    reproduce(
        config: NEATConfig,
        generation: number,
        population: Population,
        sortedSpecies: Species[]
    ): void {
        const { organisms, expectedOffspring } = this;

        if (expectedOffspring && !organisms.length) return;

        const [...babies] = organisms;
        const champ = babies[0];
        let champAdded = false;

        // TODO stolen babies

        let superChamp = population.getSuperChamp();

        for (let i = 0; i < expectedOffspring; i++) {
            let baby;

            if (
                superChamp &&
                superChamp === champ &&
                superChamp!.expectedOffspring > 0
            ) {
                // If we have a population champion, finish off some special clones
                let organism = superChamp!.copy(0, generation);

                if (superChamp!.expectedOffspring === 1)
                    organism = mutateGenome(config, organism);

                superChamp!.expectedOffspring--;

                baby = organism;
            } else if (!champAdded && expectedOffspring > 5) {
                // Champion of species with more than 5 networks is copied unchanged
                baby = champ.copy(0, generation);
                champAdded = true;
            } else if (rnd() < config.mutateOnlyProbability) {
                // Mutate only
                const [mom] = getRandomItems(babies, 1);

                baby = mutateGenome(config, mom.copy(0, generation));
            } else {
                // mate
                const [mom] = getRandomItems(babies, 1);
                let dad;

                if (rnd() > config.interspeciesMateRate) {
                    [dad] = getRandomItems(babies, 1);
                } else {
                    // Interspecies mate
                    let tries = 0,
                        randomSpecies: Species = this;

                    while (randomSpecies === this && tries++ < 5) {
                        const species = getRandomSpecies(sortedSpecies);
                        if (species.organisms.length) randomSpecies = species;
                    }

                    dad = randomSpecies.getChampion();
                }

                baby = crossover(dad, mom, config);

                if (
                    rnd() < config.mutateOnlyProbability ||
                    compatibility(mom, dad, config) === 0
                )
                    mutateGenome(config, baby);
            }

            baby.generation = generation;
            speciateOrganism(config, baby, population.species);
        }
    }
}
