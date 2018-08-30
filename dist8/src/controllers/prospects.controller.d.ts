import { Filter, Where } from '@loopback/repository';
import { Prospect } from '../models';
import { ProspectRepository } from '../repositories';
export declare class ProspectsController {
    prospectRepo: ProspectRepository;
    constructor(prospectRepo: ProspectRepository);
    create(obj: Prospect): Promise<Prospect>;
    count(where?: Where): Promise<number>;
    find(filter?: Filter): Promise<Prospect[]>;
    updateAll(obj: Prospect, where?: Where): Promise<number>;
    deleteAll(where?: Where): Promise<number>;
    findById(id: string): Promise<Prospect>;
    updateById(id: string, obj: Prospect): Promise<boolean>;
    deleteById(id: string): Promise<boolean>;
}
