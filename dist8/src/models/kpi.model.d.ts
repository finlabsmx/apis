import { Entity } from '@loopback/repository';
export declare class Kpi extends Entity {
    id: string;
    code: string;
    name: string;
    calification: number;
    constructor(data?: Partial<Kpi>);
}
