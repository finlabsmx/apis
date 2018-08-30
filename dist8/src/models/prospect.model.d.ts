import { Entity } from '@loopback/repository';
export declare class Prospect extends Entity {
    id: string;
    firstName1: string;
    firstName2?: string;
    lastName1: string;
    lastName2?: string;
    name?: string;
    gender?: string;
    fiscalID?: string;
    nationalID?: string;
    email?: string;
    mobilePhone?: string;
    constructor(data?: Partial<Prospect>);
}
