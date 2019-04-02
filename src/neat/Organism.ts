import { Genome } from './Genome';
import { Species } from './Species';
import Network from '../network/Network';
import { ascending } from '../utils';
import { ConnectionGene } from './ConnectionGene';

/**
 * Organisms are Genomes and Networks with fitness informations
 * i.e. The genotype and phenotype together
 */
export class Organism extends Genome {
    /**
     * A measure of fitness for the organism
     */
    fitness: number;
    /**
     * A measure of fitness before adjustment
     */
    originalFitness: number = 0;
    /**
     * The organism's species
     */
    species?: Species;
    /**
     * Mark for killing
     */
    kill: boolean = false;
    /**
     * Generation in which Organism is from
     */
    generation: number = 0;
    /**
     * Number of children this Organism may have
     */
    expectedOffspring: number = 0;

    private network?: Network;

    constructor(
        // innovation: Iterator<number>,
        fitness: number = 0,
        generation: number = 0
    ) {
        super();
        this.fitness = fitness;
        this.generation = generation;
    }

    copy(fitness: number = 0, generation: number = 0): Organism {
        let clone = super.copy() as Organism;
        clone.fitness = fitness;
        clone.originalFitness = this.originalFitness;
        clone.generation = generation;

        return clone;
    }

    getNetwork() {
        if (!this.network) {
            const nodes = Array.from(this.nodes.values()).map(
                ({ type, id }) => ({
                    type,
                    id
                })
            );

            const connections = Array.from(this.connections.values())
                .sort(ascending((i: ConnectionGene) => i.innovation))
                .map(({ from, to, weight, enabled }) => ({
                    from: from.id,
                    to: to.id,
                    weight: weight,
                    enabled: enabled
                }));

            this.network = new Network(nodes, connections);
        }

        return this.network!;
    }
}
