import { NodeType } from '../types';
import { sigmoid } from '../utils';
import Neuron from './Neuron';
import Link from './Link';

export default class Network {
    inputs: Neuron[];
    outputs: Neuron[];
    neurons: Map<string, Neuron> = new Map();
    activation: Function = sigmoid;
    state: [any, any] = [{}, {}];
    links: any;

    constructor(neurons: any[], links: any[]) {
        const inputs: Array<Neuron> = [],
            outputs: Array<Neuron> = [];

        neurons.forEach(({ type, id }) => {
            const neuron = new Neuron(type, id);
            this.neurons.set(id, neuron);

            switch (type) {
                case NodeType.Bias:
                case NodeType.Input:
                    inputs.push(neuron);
                    break;
                case NodeType.Output:
                    outputs.push(neuron);
                    break;
            }

            this.state[0][neuron.id] = 0;
            this.state[1][neuron.id] = 0;
        });

        links
            .filter(({ enabled }) => enabled)
            .forEach(({ from, to, weight, enabled }) => {
                const fromNeuron = this.neurons.get(from)!;
                const toNeuron = this.neurons.get(to)!;
                const link = new Link(fromNeuron, toNeuron, weight, enabled);

                fromNeuron.out.push(link);
                toNeuron.in.push(link);
            });

        this.inputs = inputs;
        this.outputs = outputs;
    }

    toJSON() {
        const neruons = this.neurons;
        const neurons: any[] = [],
            links: any[] = [];

        neruons.forEach(({ id, bias, type, out }) => {
            neurons.push({
                id,
                bias,
                type
            });
            links.push(
                ...out.map(({ from, to, weight, enabled }) => ({
                    from: from.id,
                    to: to.id,
                    weight,
                    enabled
                }))
            );
        });

        return {
            // config,
            neurons,
            links
        };
    }

    /**
     * Activate the network (feed-forward only)
     * @param inputs
     */
    activate(inputs: number[]) {
        const [state0, state1] = this.state;
        this.inputs.map((input, i) => {
            state0[input.id] = inputs[i];
            state1[input.id] = inputs[i];
        });

        const done = new Set();
        const stack: Array<Neuron> = [...this.inputs];
        while (stack.length) {
            const neuron: Neuron = stack.shift()!;

            if (done.has(neuron)) continue;

            if (neuron.in.length) {
                const dotProduct = neuron.in.reduce(
                    (sum, link) => (sum + state0[link.from.id]) * link.weight,
                    0
                );

                state1[neuron.id] = this.activation(dotProduct + neuron.bias);
            }
            done.add(neuron);
            stack.push(
                ...neuron.out
                    .filter(l => stack.indexOf(l.to) === -1)
                    .map(link => link.to)
            );
        }

        this.state.reverse();
        return this.outputs.map(output => state1[output.id]);
    }
}
