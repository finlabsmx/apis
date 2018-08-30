import { Filter, Where } from '@loopback/repository';
import { Organization } from '../models';
import { OrganizationRepository } from '../repositories';
export declare class OrgsController {
    orgRepo: OrganizationRepository;
    constructor(orgRepo: OrganizationRepository);
    create(obj: Organization): Promise<Organization>;
    count(where?: Where): Promise<number>;
    find(filter?: Filter): Promise<Organization[]>;
    updateAll(obj: Organization, where?: Where): Promise<number>;
    deleteAll(where?: Where): Promise<number>;
    findById(id: string): Promise<Organization>;
    updateById(id: string, obj: Organization): Promise<boolean>;
    deleteById(id: string): Promise<boolean>;
}
