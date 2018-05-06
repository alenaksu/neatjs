import { NodeType } from '../types';
import Link from './Link';

export default class Neuron {
    id: string;
    value: number = 0;
    bias: number = 0;
    in: Array<Link> = [];
    out: Array<Link> = [];
    isActive: boolean = false;
    activationCount: number = 0;
    type: NodeType;
    sum: number = 0;

    constructor(type: NodeType, id: string) {
        this.type = type;
        this.id = id;
    }
}
