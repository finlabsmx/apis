import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { Proposal } from '../models/proposal.model';
export declare class ProposalRepository extends DefaultCrudRepository<Proposal, typeof Proposal.prototype.id> {
    protected datasource: juggler.DataSource;
    constructor(datasource: juggler.DataSource);
}
