import { Genome } from './neat/Genome';
import { Organism } from './neat/Organism';
import { Species } from './neat/Species';
import { NodeGene } from './neat/NodeGene';
import { ConnectionGene } from './neat/ConnectionGene';
import { NodeType, NEATConfig } from './types';

/**
 * Picks n random items from the given list
 * @param list
 * @param n
 */
export function getRandomItems(list: any[], n: number): Array<any> {
    let result: any[] = [];
    let source: any[] = [...list];

    n = Math.min(n, list.length);

    while (result.length < n) {
        let i = Math.floor(rnd(source.length));
        result.push(...source.splice(i, 1));
    }

    return result;
}

/**
 * Returns a random boolean
 */
export function randomBool() {
    return Math.random() > 0.5;
}

/**
 * Compute the mean of the given values
 * @param values
 */
export function mean(...values: number[]): number {
    return values.length
        ? values.reduce((sum, n) => sum + n, 0) / values.length
        : 0;
}

/**
 * Returns a random number between from/to arguments
 * @param to
 * @param from
 */
export function rnd(to = 1, from = 0) {
    return Math.random() * (to - from) + from;
}

/**
 * Returns a normally distribuited random number (Box-Muller transform)
 */
export function* gaussian(mean: number = 0, standardDeviation: number = 1) {
    let u, v, s;

    while (true) {
        do {
            v = rnd(1, -1);
            u = rnd(1, -1);
            s = u ** 2 + v ** 2;
        } while (s === 0 || s >= 1);

        s = Math.sqrt((-2 * Math.log(s)) / s);

        yield s * u * standardDeviation + mean;
        yield s * v * standardDeviation + mean;
    }
}

/**
 * Generate a random UUIDv4 (rfc4122 compliant)
 */
export function uuid(): string {
    const uuid = [8, 4, 4, 4, 12].map((segmentLength: number) => {
        let segment = Array(segmentLength);

        for (let i = 0; i < segmentLength; i++)
            // ToUint32 http://www.ecma-international.org/ecma-262/5.1/#sec-11.7.3
            segment[i] = (Math.random() * 0xf) >>> 0;

        return segment;
    });

    uuid[2][0] &= 0x3;
    uuid[2][1] |= 0x8;
    uuid[3][0] = 0x4;

    return uuid
        .map((segment: number[]) => segment.map(n => n.toString(16)).join(''))
        .join('-');
}

/**
 * Compute the compatibility distance between two genomes
 * @param genome1
 * @param genome2
 * @param config
 */
export function compatibility(
    genome1: Genome,
    genome2: Genome,
    config: NEATConfig
): number {
    // TODO memoizing? consider add an id and use it for that purpose
    let innovationNumbers: Set<number> = new Set([
        ...genome1.connections.keys(),
        ...genome2.connections.keys()
    ]);

    let excess = Math.abs(genome1.connections.size - genome2.connections.size),
        disjoint = -excess,
        matching: Array<number> = [],
        N = Math.max(genome1.connections.size, genome2.connections.size, 1);

    innovationNumbers.forEach(innovation => {
        const gene1 = genome1.connections.get(innovation),
            gene2 = genome2.connections.get(innovation);

        if (gene1 && gene2) {
            matching.push(Math.abs(gene1.weight - gene2.weight));
        } else if (!gene1 || !gene2) {
            disjoint++;
        }
    });

    return (
        (excess * config.excessCoefficient +
            disjoint * config.disjointCoefficient) /
            N +
        mean(...matching) * config.weightDifferenceCoefficient
    );
}

export function sigmoid(x: number, slope: number = 4.924273) {
    return 1 / (1 + Math.exp(-slope * x));
}

/**
 * Check whether the connection creates a loop inside the network
 * @param connection
 * @param connections
 */
export function isRecurrent(
    connection: ConnectionGene,
    connections: ConnectionGene[]
): boolean {
    const startNode = connection.from;
    const stack = [connection];

    while (stack.length) {
        connection = stack.shift()!;

        if (connection.to.id === startNode.id) return true;

        stack.push(
            ...connections.filter(gene => gene.from.id === connection.to.id)
        );
    }

    return false;
}

/**
 * Mate 2 organisms
 * @param genome1
 * @param genome2
 */
export function crossover(
    genome1: Organism,
    genome2: Organism,
    config: NEATConfig
): Organism {
    const child: Organism = new Organism();

    // [moreFit, lessFit]
    const [hFitParent, lFitParent] = [genome1, genome2].sort(
        descending((i: Organism) => i.fitness)
    );

    let innovationNumbers: Set<number> = new Set([
        ...hFitParent.connections.keys(),
        ...lFitParent.connections.keys()
    ]);

    // Ensure that all sensors and ouputs are added to the organism
    hFitParent.nodes.forEach(node => {
        if (isSensor(node) || isOutput(node)) child.addNode(node.copy());
    });

    // lFitParent.nodes.forEach(node => {
    //     switch (node.type) {
    //         case NodeType.Input:
    //         case NodeType.Output:
    //         case NodeType.Hidden:
    //             child.addNode(node.copy());
    //     }
    // });

    Array.from(innovationNumbers.values())
        .sort(ascending())
        .forEach(innovationNumber => {
            const hConnection = hFitParent.connections.get(innovationNumber)!,
                lConnection = lFitParent.connections.get(innovationNumber)!;

            const connection =
                hConnection && lConnection
                    ? // Matching gene
                      randomBool() &&
                      config.feedForwardOnly &&
                          !isRecurrent(hConnection, child.getConnections())
                        ? hConnection.copy()
                        : lConnection.copy()
                    : // excess/disjoint
                      (hConnection || lConnection).copy();

            // Prevent the creation of RNNs if feed-forward only
            if (
                config.feedForwardOnly &&
                isRecurrent(connection, child.getConnections())
            )
                return;

            child.connections.set(innovationNumber, connection);

            connection.from = connection.from.copy();
            connection.to = connection.to.copy();

            child.addNode(connection.from);
            child.addNode(connection.to);
        });

    return child;
}

/**
 * Perform genome's mutations
 * @param config
 * @param organism
 */
export function mutateGenome(config: NEATConfig, organism: Organism) {
    if (rnd() < config.mutateAddNodeProbability) {
        organism.mutateAddNode(config);
    } else if (rnd() < config.mutateAddConnectionProbability) {
        organism.mutateAddConnection(config);
    } else {
        if (rnd() < config.mutateConnectionWeightsProbability)
            organism.mutateConnectionsWeights(config);

        if (rnd() < config.mutateToggleEnableProbability)
            organism.mutateToggleEnable();

        if (rnd() < config.reEnableGeneProbability) organism.reEnableGene();
    }

    return organism;
}

/**
 * Returns a random species form the given set, tending towards better species
 * @param sortedSpecies A sorted set of species
 */
export function getRandomSpecies(sortedSpecies: Species[]) {
    const random = Math.min(Math.round(<number>gaussian().next().value), 1);
    const index = wrapNumber(0, sortedSpecies.length - 1, random);
    // const multiplier = Math.min(gaussian().next().value / 4, 1);
    // const index = Math.floor(multiplier * (species.length - 1) + 0.5);

    return sortedSpecies[index];
}

/**
 * Puts the organism inside a compatibile species
 * @param config
 * @param organism
 * @param species
 */
export function speciateOrganism(
    config: NEATConfig,
    organism: Organism,
    allSpecies: Species[]
) {
    const { compatibilityThreshold } = config;

    const found =
        allSpecies.length > 0 &&
        allSpecies.some((species: Species) => {
            if (!species.organisms.length) return false;

            const isCompatible =
                compatibility(organism, species.getSpecimen(), config) <
                compatibilityThreshold;

            if (isCompatible) species.addOrganism(organism);

            return isCompatible;
        });

    if (!found) {
        const species = new Species();
        species.addOrganism(organism);
        allSpecies.push(species);
    }
}

/**
 * Sorts an array from largest to smallest
 * @param keyFn
 */
export function descending(keyFn: Function = (i: any) => i) {
    return (a: any, b: any) => keyFn(b) - keyFn(a);
}

/**
 * Sorts an array from smallest to largest
 * @param keyFn
 */
export function ascending(keyFn: Function = (i: any) => i) {
    return (a: any, b: any) => keyFn(a) - keyFn(b);
}

// TODO
export const byFitness = (i: any) => i.fitness;
export const byMaxFitness = (i: any) => i.maxFitness;
export const byInnovation = (i: any) => i.innovation;
export const byType = (i: any) => i.type;

/**
 * Keeps the given value between the specified range
 * @param min
 * @param max
 * @param value
 */
export function wrapNumber(min: number, max: number, value: number) {
    const l = max - min + 1;
    return ((((value - min) % l) + l) % l) + min;
}

export const isSensor = (gene: { type: NodeType }) =>
    gene.type === NodeType.Input || gene.type === NodeType.Bias;

export const isOutput = (gene: { type: NodeType }) =>
    gene.type === NodeType.Output;

/**
 * Create a new innovation number generator
 */
export function* Innovation(i: number = 0): IterableIterator<number> {
    while (true) yield i++;
}

/**
 * Creates a genome with the specified topology
 * @param config
 * @param topology
 */
export function createGenome(
    config: NEATConfig,
    {
        input,
        hidden,
        output
    }: {
        input: number;
        hidden: Array<number>;
        output: number;
    }
) {
    const inputNodes: NodeGene[] = [],
        outputNodes: NodeGene[] = [],
        hiddenNodes: NodeGene[] = [],
        connections: ConnectionGene[] = [];

    for (let i = 0; i < output; i++) {
        outputNodes.push(new NodeGene(NodeType.Output));
    }

    for (let i = 0; i < input; i++) {
        const node = new NodeGene(NodeType.Input);
        inputNodes.push(node);
    }

    let lastLayer = inputNodes;
    for (let k = 0; k < hidden.length; k++) {
        const layer: NodeGene[] = [];
        for (let i = 0; i < hidden[k]; i++) {
            const hiddenNode = new NodeGene(NodeType.Hidden);
            hiddenNodes.push(hiddenNode);
            layer.push(hiddenNode);

            connections.push(new ConnectionGene(hiddenNode, hiddenNode));

            lastLayer.forEach(from => {
                connections.push(new ConnectionGene(from, hiddenNode));
            });
        }
        lastLayer = layer;
    }

    outputNodes.forEach(output => {
        lastLayer.forEach(from => {
            connections.push(new ConnectionGene(from, output));
        });
    });

    const nodes = [...inputNodes, ...hiddenNodes, ...outputNodes];

    return { nodes, connections };
}
