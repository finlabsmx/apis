import { Entity } from '@loopback/repository';
import { Kpi } from './kpi.model';
export declare class Score extends Entity {
    id: string;
    kpis: Kpi[];
    constructor(data?: Partial<Score>);
}
