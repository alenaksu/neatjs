import { Genome } from './Genome';
import { Species } from './Species';
import { Link, Neuron, Network } from '../network';
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
        const connections = this.getConnections();
        const neurons: Map<string, Neuron> = new Map();

        this.nodes.forEach(node => {
            neurons.set(node.id, new Neuron(node.type, node.id));
        });

        connections
            .sort(ascending((i: ConnectionGene) => i.innovation))
            .forEach(gene => {
                const from = neurons.get(gene.from.id)!;
                const to = neurons.get(gene.to.id)!;
                const link = new Link(from, to, gene.weight, gene.enabled);

                from.out.push(link);
                to.in.push(link);
            });

        return new Network(Array.from(neurons.values()));
    }
}
