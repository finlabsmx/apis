import { Filter, Where } from '@loopback/repository';
import { Proposal } from '../models';
import { ProposalRepository } from '../repositories';
export declare class ProposalsController {
    proposalRepository: ProposalRepository;
    constructor(proposalRepository: ProposalRepository);
    create(obj: Proposal): Promise<Proposal>;
    count(where?: Where): Promise<number>;
    find(filter?: Filter): Promise<Proposal[]>;
    updateAll(obj: Proposal, where?: Where): Promise<number>;
    deleteAll(where?: Where): Promise<number>;
    findById(id: string): Promise<Proposal>;
    updateById(id: string, obj: Proposal): Promise<boolean>;
    deleteById(id: string): Promise<boolean>;
}
