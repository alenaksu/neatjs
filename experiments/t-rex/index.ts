import {
    NEATConfig,
    NodeType,
    DefaultConfig,
    NodeGene,
    ConnectionGene,
    Population
} from '../../src';

import vis from 'vis';

import { CANVAS_WIDTH, CANVAS_HEIGHT } from './game/constants';
import { Runner } from './game';

function convertStateToVector(state) {
    if (state) {
        return [
            state.distance / CANVAS_WIDTH,
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
    populationSize: 300,
    // fitnessThreshold: 15,
    adjustCompatibilityThreshold: true,
    compatibilityModifierTarget: 30,
    // survivalThreshold: 0.2,
    // excessCoefficient: 1 / 20,
    // disjointCoefficient: 1 / 20,
    // weightDifferenceCoefficient: 2,
    // compatibilityThreshold: 3,
    // genomeWeightPerturbated: 0.9
    // mutationPower: 10,
    // mutateAddConnectionProbability: 1,
    // mutateAddNodeProbability: 1,
    feedForwardOnly: false
    // dropoffAge: 25
};

let nodes = [
    new NodeGene(NodeType.Input, 'obstacleDistance'),
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
            new ConnectionGene(n, nodes[5]),
            new ConnectionGene(n, nodes[6])
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

    champ.getNetwork().neurons.values();
    tRexes.tRexes.forEach((tRex, i) => {
        tRex.organism = pop.organisms[i];
        tRex.network = tRex.organism.getNetwork();
    });

    first = false;

    requestAnimationFrame(updateGraph);
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

    return outputs.map(o => !!Math.round(o));
}

const stats = document.querySelector('.stats');
let pop = Population.from(config, { nodes, connections });
let runner = new Runner('#t-rex', {
    onReset: handleReset,
    onCrash: handleCrash,
    onRunning: handleRunning
});

const btnSave = document.querySelector('#save') as HTMLButtonElement;
btnSave.addEventListener('click', e => {
    e.preventDefault();
    const a = document.createElement('a');
    a.download = 'network.json';
    a.href = URL.createObjectURL(
        new Blob(
            [
                JSON.stringify(
                    pop
                        .getSuperChamp()
                        .getNetwork()
                        .toJSON()
                )
            ],
            { type: 'application/json' }
        )
    );
    a.click();
});
(<any>window).runner = runner;
(<any>window).population = pop;

function updateGraph() {
    const network = pop.getSuperChamp().getNetwork();

    let maxDepth = 0;
    const stack = network.inputs.map(i => [0, i]);
    const nodes = [],
        edges = [];
    while (stack.length) {
        const [level, { id, type, out }] = stack.shift() as any;

        maxDepth = Math.max(maxDepth, level);

        if (nodes.find(n => n.id === id)) {
            nodes.find(n => n.id === id).level = level + 1;
            maxDepth = Math.max(maxDepth, level + 1);
            continue;
        }

        nodes.push({
            id,
            type,
            label: type !== NodeType.Hidden ? id : '',
            group: type,
            level: level
        });

        stack.push(
            ...out.map(link => {
                edges.push({
                    from: link.from.id,
                    to: link.to.id,
                    value: link.weight,
                    color: !link.enabled
                        ? {
                              color: '#333',
                              opacity: 0.3
                          }
                        : undefined
                });
                return [level + 1, link.to];
            })
        );
    }

    nodes.forEach(node => {
        if (node.type === NodeType.Output) {
            node.level = maxDepth + 1;
        }
    });

    let container = document.getElementById('cy');
    let options = {
        edges: {
            color: {
                opacity: 0.6
            },
            scaling: {
                min: 0.5,
                max: 10
            },
            arrows: {
                to: {
                    enabled: true,
                    scaleFactor: 0.1,
                    type: 'arrow'
                }
            },
            font: {
                color: '#333',
                align: 'top'
            }
        },
        nodes: {
            shape: 'dot'
        },
        autoResize: false,
        layout: {
            hierarchical: {
                direction: 'LR',
                sortMethod: 'directed'
            }
        },
        interaction: {
            dragNodes: false,
            dragView: false,
            multiselect: false,
            navigationButtons: false,
            selectable: false,
            zoomView: false
        }
    };
    let net = new vis.Network(
        container,
        {
            nodes,
            edges
        },
        options
    );
}

requestAnimationFrame(updateGraph);
