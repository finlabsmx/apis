import { Entity } from '@loopback/repository';
export declare class Organization extends Entity {
    id: string;
    code: string;
    name: string;
    description?: string;
    enable: boolean;
    constructor(data?: Partial<Entity>);
}
