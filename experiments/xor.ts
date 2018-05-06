import Network from '../src/network/Network';
import { DefaultConfig } from '../src/config';
import { Population } from '../src/neat/Population';
import { Organism } from '../src/neat/Organism';
import { NodeGene } from '../src/neat/NodeGene';
import { ConnectionGene } from '../src/neat/ConnectionGene';
import { NodeType, NEATConfig } from '../src/types';

const testData: Array<[[number, number, number], number]> = [
    [[0, 0, 1], 0],
    [[0, 1, 1], 1],
    [[1, 0, 1], 1],
    [[1, 1, 1], 0]
];

let config: NEATConfig = {
    ...DefaultConfig,
    populationSize: 500,
    fitnessThreshold: 15.8,
    adjustCompatibilityThreshold: true,
    compatibilityModifierTarget: 30,
    feedForwardOnly: false
    // excessCoefficient: 1 / 20,
    // disjointCoefficient: 1 / 20,
    // weightDifferenceCoefficient: 2,
    // compatibilityThreshold: 4,
    // genomeWeightPerturbated: 0.9
    // dropoffAge: 5
};

let nodes = [
    new NodeGene(NodeType.Input, '0'),
    new NodeGene(NodeType.Input, '1'),
    new NodeGene(NodeType.Bias, 'bias'),
    new NodeGene(NodeType.Output, 'output')
];

let connections = [
    new ConnectionGene(config.innovation.next().value, nodes[0], nodes[3]),
    new ConnectionGene(config.innovation.next().value, nodes[1], nodes[3]),
    new ConnectionGene(
        config.innovation.next().value,
        nodes[2],
        nodes[3]
        // 1
    )
];

let lastGeneration = 0;
const computeFitness = function(
    network: Network,
    organism: Organism,
    population: Population
) {
    // const pop = population!;

    // if (lastGeneration !== organism.generation) {
    //     console.log('generation', organism.generation);
    //     console.log('--------------');
    //     console.log('organisms', pop.organisms.length);
    //     console.log('species', pop.species.length);
    //     console.log('fitness', pop.getSuperChamp().fitness);
    //     console.log('');

    //     lastGeneration = organism.generation;
    // }

    let fitness = 4;
    testData.sort(() => Math.random() - 0.5);

    testData.forEach(([inputs, expected]) => {
        const [output] = network.activate(inputs);
        fitness -= Math.abs(output.value - expected);
    });

    return fitness ** 2;
};

let avgGen = 0,
    avgFitness = 0,
    avgNodes = 0,
    avgConnections = 0,
    avgSpecies = 0,
    failures = 0;
const testRun = 60;

const runTest = async () => {
    console.log('Running...');
    for (let i = 0; i < testRun; i++) {
        let pop = Population.from(config, {
            nodes,
            connections
        });
        await pop
            .run(computeFitness, 300)
            .then(org => {
                // console.log('winner');
                // console.log('--------------');
                // console.log('fitness', org.fitness);
                // console.log('generation', org.generation);
                // console.log('nodes', org.nodes.size);
                // console.log('connections', org.connections.size);
                // console.log('');

                // let f = 4;
                // const net = org.getNetwork();
                // testData.forEach(([inputs, expected]) => {
                //     const [output] = net.activate(inputs);
                //     console.log(
                //         `input: \t\t${inputs.join()}\nexpected: \t\t${expected}\nresult: \t\t${Math.round(
                //             output.value
                //         )}\n`
                //     );

                //     f -= Math.abs(output.value - expected);
                // });
                // console.log('fitness:', f ** 2);
                // console.log(
                //     JSON.stringify(
                //         Array.from(org.connections.values()),
                //         null,
                //         4
                //     )
                // );

                if (org.fitness > 16) throw JSON.stringify(org);

                avgGen += org.generation;
                avgFitness += org.fitness;
                avgNodes += org.nodes.size;
                avgConnections += org.connections.size;
                avgSpecies += pop.species.length;

                process.stdout.write('.');
            })
            .catch(() => {
                failures++;
                process.stdout.write('x');
                // console.warn('no solution found');
            });
        // console.log('-------------------------');
    }
    process.stdout.write('\n');
    let n = testRun - failures;
    console.log('avg generations', avgGen / n);
    console.log('avg species', avgSpecies / n);
    console.log('avg fitness', avgFitness / n);
    console.log('avg nodes', avgNodes / n);
    console.log('avg connections', avgConnections / n);
    console.log('failures', failures);
};
runTest();
