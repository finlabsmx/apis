import { Entity } from '@loopback/repository';
export declare class BaseCatalog extends Entity {
    id: string;
    code: string;
    name: string;
    description?: string;
    enable: boolean;
    constructor(data?: Partial<BaseCatalog>);
}
