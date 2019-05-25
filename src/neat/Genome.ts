import { ConnectionGene } from './ConnectionGene';
import { NodeGene } from './NodeGene';
import {
    getRandomItems,
    rnd,
    uuid,
    isSensor,
    isOutput,
    isRecurrent
} from '../utils';
import { NodeType, NEATConfig } from '../types';

export class Genome {
    connections: Map<number, ConnectionGene> = new Map();
    nodes: Map<string, NodeGene> = new Map();
    id: string;

    constructor(id: string = uuid()) {
        this.id = id;
    }

    copy(): Genome {
        const genome: Genome = new (<any>this.constructor)();

        this.connections.forEach((gene, key) => {
            genome.connections.set(key, gene.copy());
        });

        this.nodes.forEach((node, key) => {
            genome.nodes.set(key, node.copy());
        });

        return genome;
    }

    /**
     * Returns a list of enabled connections
     */
    getConnections(): ConnectionGene[] {
        return Array.from(this.connections.values()).filter(
            gene => gene.enabled
        );
    }

    /**
     * Checks whether a connection between two nodes exists
     * @param node1
     * @param node2
     */
    connectionExists(node1: NodeGene, node2: NodeGene): boolean {
        return Array.from(this.connections.values()).some(
            connection =>
                connection.from.id === node1.id && connection.to.id === node2.id
        );
    }

    addConnection(config: NEATConfig, connection: ConnectionGene) {
        connection.innovation = config.innovation.next().value;
        this.connections.set(connection.innovation, connection);
    }

    addNode(node: NodeGene) {
        if (!this.nodes.has(node.id)) this.nodes.set(node.id, node);
    }

    /**
     * Adds a connection mutation
     */
    mutateAddConnection(config: NEATConfig): void {
        let maxTries = config.addConnectionTries;
        let nodes = Array.from(this.nodes.values());
        const connections = Array.from(this.connections.values());

        while (maxTries--) {
            const [form] = getRandomItems(
                nodes.filter(node => !isOutput(node)),
                1
            );

            const [to] = getRandomItems(
                nodes.filter(
                    node =>
                        // don't allow sensors to get input
                        !isSensor(node) &&
                        // exclude self loops
                        node !== form &&
                        // consider connections between output nodes recurrent
                        (form.type === NodeType.Output
                            ? node.type !== NodeType.Output
                            : true)
                ),
                1
            );

            const connection = new ConnectionGene(
                form,
                to,
                rnd(config.mutationPower, -config.mutationPower)
            );
            const isValid =
                // connection already exists
                !this.connectionExists(form, to) &&
                // is a RNN
                (!config.feedForwardOnly ||
                    !isRecurrent(connection, connections));

            if (isValid) {
                this.addConnection(config, connection);
                return;
            }
        }
    }

    mutateAddNode(config: NEATConfig): void {
        if (!this.connections.size) return;

        const [connection]: ConnectionGene[] = getRandomItems(
            this.getConnections(),
            1
        );
        const node = new NodeGene(NodeType.Hidden);

        connection.disable();

        this.addConnection(config, new ConnectionGene(connection.from, node));
        this.addConnection(
            config,
            new ConnectionGene(node, connection.to, connection.weight)
        );
        this.addNode(node);
    }

    /**
     * Enable first disabled gene
     */
    reEnableGene(): void {
        for (const connection of this.connections.values()) {
            if (!connection.enabled) {
                connection.enabled = true;
                return;
            }
        }
    }

    /**
     * Mutate a connection by enabling/disabling
     * @param times
     */
    mutateToggleEnable(times: number = 1) {
        const connections = Array.from(this.connections.values());

        while (times--) {
            const [connection] = getRandomItems(
                connections,
                1
            ) as ConnectionGene[];

            if (connection.enabled) {
                const isSafe = connections.some(
                    (c: ConnectionGene) =>
                        c.from !== connection.from ||
                        !c.enabled ||
                        c.innovation === connection.innovation
                );

                connection.enabled = !isSafe;
            } else connection.enabled = true;
        }
    }

    /**
     * Mutate all connections
     */
    mutateConnectionsWeights({
        mutationPower,
        genomeWeightPerturbated
    }: NEATConfig) {
        this.connections.forEach(connection => {
            const random = rnd(mutationPower, -mutationPower);
            if (connection.enabled) {
                if (rnd() < genomeWeightPerturbated)
                    connection.weight += random;
                else connection.weight = random;
            }
        });
    }
}
