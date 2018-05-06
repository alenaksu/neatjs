import Neuron from './Neuron';

export default class Link {
    weight: number = 0;
    from: Neuron;
    to: Neuron;
    enabled: boolean = true;

    constructor(
        from: Neuron,
        to: Neuron,
        weight: number = 0,
        enabled: boolean = true
    ) {
        this.from = from;
        this.to = to;
        this.weight = weight;
        this.enabled = enabled;
    }
}
