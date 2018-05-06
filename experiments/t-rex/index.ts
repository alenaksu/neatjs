import {
    NEATConfig,
    NodeType,
    DefaultConfig,
    NodeGene,
    ConnectionGene,
    Population
} from '../../src';

import { CANVAS_WIDTH, CANVAS_HEIGHT } from './game/constants';
import { Runner } from './game';

function convertStateToVector(state) {
    if (state) {
        return [
            state.distance / CANVAS_WIDTH,
            state.obstacleX / CANVAS_WIDTH,
            state.obstacleY / CANVAS_HEIGHT,
            state.obstacleWidth / CANVAS_WIDTH,
            state.obstacleHeight / CANVAS_HEIGHT,
            state.speed / 100
        ];
    }
    return [0, 0, 0];
}

let config: NEATConfig = {
    ...DefaultConfig,
    populationSize: 500,
    // fitnessThreshold: 15,
    adjustCompatibilityThreshold: true,
    compatibilityModifierTarget: 50,
    // survivalThreshold: 0.2,
    // excessCoefficient: 1 / 20,
    // disjointCoefficient: 1 / 20,
    // weightDifferenceCoefficient: 2,
    compatibilityThreshold: 3,
    // genomeWeightPerturbated: 0.9
    // mutationPower: 10,
    // mutateAddNodeProbability: 0.1,
    feedForwardOnly: false
    // dropoffAge: 25
};

let nodes = [
    new NodeGene(NodeType.Input, 'distance'),
    new NodeGene(NodeType.Input, 'obstacleX'),
    new NodeGene(NodeType.Input, 'obstacleY'),
    new NodeGene(NodeType.Input, 'obstacleWidth'),
    new NodeGene(NodeType.Input, 'obstacleHeight'),
    new NodeGene(NodeType.Input, 'speed'),
    new NodeGene(NodeType.Output, 'jump'),
    new NodeGene(NodeType.Output, 'duck')
];

let connections = [];

nodes
    .filter(n => n.type !== NodeType.Output)
    .forEach(n => {
        connections.push(
            new ConnectionGene(config.innovation.next().value, n, nodes[6]),
            new ConnectionGene(config.innovation.next().value, n, nodes[7])
        );
    });

type State = {
    obstacleX: number;
    obstacleY: number;
    obstacleWidth: number;
    speed: number;
};

let first = true;
function handleReset({ tRexes }) {
    if (!first) pop.epoch();

    tRexes.spawn(pop.organisms.length);

    const champ = pop.getSuperChamp();
    stats.innerHTML = `
organisms: ${pop.organisms.length}
species: ${pop.species.length}
fitness: ${champ.originalFitness.toFixed(6)}
    `;
    console.log(Array.from(champ.connections.values()));
    champ.getNetwork().neurons.values();
    tRexes.tRexes.forEach((tRex, i) => {
        tRex.organism = pop.organisms[i];
        tRex.network = tRex.organism.getNetwork();
    });

    first = false;
}

function loss(box1, box2) {
    return Math.max(box1.x + box1.width - box2.x, 0);
}

function handleCrash({ tRex, state, collision }) {
    const [adjTrexBox, adjObstacleBox] = collision;
    const ran = runner.distanceMeter.getActualDistance(runner.distanceRan);
    const high = runner.distanceMeter.getActualDistance(runner.highestScore);
    tRex.organism.fitness = (ran / 1000) ** 2; //loss(adjTrexBox, adjObstacleBox);
}

function handleRunning({ tRex, state }: { tRex: any; state: State }) {
    let outputs = tRex.network.activate(convertStateToVector(state));

    return outputs.map(o => !!Math.round(o.value));
}

const stats = document.querySelector('.stats');
let pop = Population.from(config, { nodes, connections });
let runner = new Runner('#t-rex', {
    onReset: handleReset,
    onCrash: handleCrash,
    onRunning: handleRunning
});

(<any>window).runner = runner;
(<any>window).population = pop;
