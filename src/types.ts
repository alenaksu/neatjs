import Network from './network/Network';
import { Organism } from './neat/Organism';
import { Population } from './neat/Population';

export enum NodeType {
    Bias,
    Input,
    Hidden,
    Output
}

export enum NeuronType {
    Neuron,
    Sensor
}

export type FitnessFunction = (
    network: Network,
    organism: Organism,
    population: Population
) => number | Promise<number>;

export type NEATConfig = {
    /**
     * where Species starts to be penalized
     */
    dropoffAge: number;
    /**
     * Excess coefficient used for compute compatibility
     */
    excessCoefficient: number;
    /**
     * Disjoint coefficient used for compute compatibility
     */
    disjointCoefficient: number;
    /**
     * Weight difference coefficient used for compute compatibility
     */
    weightDifferenceCoefficient: number;
    /**
     * Threshold to consider two species different
     */
    compatibilityThreshold: number;
    /**
     * Compatibility threshold modifer for each generation. Set to 0 to disable.
     */
    compatibilityModifier: number;
    /**
     * Number of species for increase/decrease the compatbility threshold
     */

    compatibilityModifierTarget: number;
    /**
     * Whether to adjust the threshold used for compute compatibility
     */
    adjustCompatibilityThreshold: boolean;
    /**
     * The power of a connection weight mutation
     */
    mutationPower: number;
    /**
     * Probabiulity for a disabled connection to be re-eanbled
     */
    reEnableGeneProbability: number;
    /**
     * Probability for genome to had its weights mutated
     */
    mutateConnectionWeightsProbability: number;
    /**
     * Chance for genome weight to be uniformly pertubated
     */
    genomeWeightPerturbated: number;
    /**
     * Fitness boost for young ages (less than 10)
     */
    ageSignificance: number;
    /**
     * Percent of average fitness for survival
     */
    survivalThreshold: number;
    /**
     * Size of population
     */
    populationSize: number;
    /**
     * Prob. of a non-mating reproduction
     */
    mutateOnlyProbability: number;
    /**
     * Probability of a "add node" mutation
     */
    mutateAddNodeProbability: number;
    /**
     * Probability of a "add connection" mutation
     */
    mutateAddConnectionProbability: number;
    /**
     * Probability of a genome to being toggled
     */
    mutateToggleEnableProbability: number;
    /**
     * Prob. of a mate being outside species
     */
    interspeciesMateRate: number;
    /**
     * Threshold to consider the network valid
     */
    fitnessThreshold: number;
    /**
     * Number of attempts to find an open link
     */
    addConnectionTries: number;
    /**
     * Generator of innovation numbers
     */
    innovation: IterableIterator<number>;
    /**
     * If true, only feed-forward networks are allowed
     */
    feedForwardOnly: boolean;
};
