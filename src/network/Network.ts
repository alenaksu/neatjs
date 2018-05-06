import { NodeType } from '../types';
import { sigmoid } from '../utils';
import Neuron from './Neuron';

export default class Network {
    inputs: Neuron[];
    outputs: Neuron[];
    neurons: Map<string, Neuron> = new Map();
    activation: Function = sigmoid;

    constructor(neurons: Neuron[]) {
        const inputs: Array<Neuron> = [],
            outputs: Array<Neuron> = [];

        neurons.forEach(neuron => {
            this.neurons.set(neuron.id, neuron);

            switch (neuron.type) {
                case NodeType.Bias:
                case NodeType.Input:
                    inputs.push(neuron);
                    break;
                case NodeType.Output:
                    outputs.push(neuron);
                    break;
            }
        });

        this.inputs = inputs;
        this.outputs = outputs;
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
                const dotProduct = neuron.in.reduce(
                    (sum, link) => sum + link.from.value * link.weight,
                    0
                );

                state[neuron.id] = (state[neuron.id] || 0) + dotProduct;
            }

            done.add(neuron);
            stack.push(...neuron.out.map(link => link.to));
        }

        this.neurons.forEach(neuron => {
            if (neuron.id in state)
                neuron.value = this.activation(state[neuron.id] + neuron.bias);
        });

        return this.outputs;
    }
}
