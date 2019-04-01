import { NodeType } from '../types';
import { sigmoid } from '../utils';
import Neuron from './Neuron';
import Link from './Link';

export default class Network {
    inputs: Neuron[];
    outputs: Neuron[];
    neurons: Map<string, Neuron> = new Map();
    activation: Function = sigmoid;

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
        });

        links.forEach(({ from, to, weight, enabled }) => {
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
        this.inputs.map((input, i) => {
            input.value = inputs[i];
        });

        // TODO add hebbian learning
        // https://en.wikibooks.org/wiki/Artificial_Neural_Networks/Hebbian_Learning
        // https://apaszke.github.io/lstm-explained.html

        // neurons.forEach(neuron => {
        //     const dotProduct = neuron.in.reduce(
        //         (sum, link) => sum + link.from.value * link.weight,
        //         neuron.value
        //     );
        //     neuron.value = this.activation(neuron.bias + dotProduct);
        // });
        // return this.outputs;

        const done = new Set();
        const stack: Array<Neuron> = [...this.inputs];
        const state: any = {};
        while (stack.length) {
            const neuron: Neuron = stack.shift()!;

            if (done.has(neuron)) continue;

            if (neuron.in.length) {
                const dotProduct = neuron.in
                    .filter(l => l.enabled)
                    .reduce(
                        (sum, link) => sum + link.from.value * link.weight,
                        0
                    );

                state[neuron.id] = (state[neuron.id] || 0) + dotProduct;
            }

            done.add(neuron);
            stack.push(
                ...neuron.out.filter(l => l.enabled).map(link => link.to)
            );
        }

        this.neurons.forEach(neuron => {
            if (neuron.id in state)
                neuron.value = this.activation(state[neuron.id] + neuron.bias);
        });

        return this.outputs;
    }
}
