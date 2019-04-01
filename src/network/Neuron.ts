import { NodeType } from '../types';
import Link from './Link';

export default class Neuron {
    id: string;
    value: number = 0;
    bias: number = 0;
    in: Array<Link> = [];
    out: Array<Link> = [];
    type: NodeType;

    constructor(type: NodeType, id: string) {
        this.type = type;
        this.id = id;
    }
}
