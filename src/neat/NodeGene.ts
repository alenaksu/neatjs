import { uuid } from '../utils';
import { NodeType } from '../types';

export class NodeGene {
    id: string;
    type: NodeType;

    constructor(type: NodeType, id = uuid()) {
        this.id = id;
        this.type = type;
    }

    copy(): NodeGene {
        return new NodeGene(this.type, this.id);
    }
}
