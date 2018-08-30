import { Entity } from '@loopback/repository';
export declare class Proposal extends Entity {
    id: string;
    amount: number;
    interestRate: number;
    preapproved: boolean;
    sentimentLevel?: number;
    constructor(data?: Partial<Proposal>);
}
