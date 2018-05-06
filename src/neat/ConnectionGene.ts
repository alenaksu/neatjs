import { NodeGene } from './NodeGene';

export class ConnectionGene {
    from: NodeGene;
    to: NodeGene;
    weight: number;
    enabled: boolean;
    innovation: number;

    constructor(
        innovation: number = 0,
        form: NodeGene,
        to: NodeGene,
        weight: number = 1,
        enabled: boolean = true
    ) {
        this.from = form;
        this.to = to;
        this.weight = weight;
        this.enabled = enabled;
        this.innovation = innovation;
    }

    disable() {
        this.enabled = false;
    }

    copy(): ConnectionGene {
        return new ConnectionGene(
            this.innovation,
            this.from,
            this.to,
            this.weight,
            this.enabled
        );
    }
}
