import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { Proposal } from '../models/proposal.model';

import { inject } from '@loopback/core';


export class ProposalRepository extends DefaultCrudRepository<Proposal, typeof Proposal.prototype.id> {


  constructor(@inject('datasources.genericDB') protected datasource: juggler.DataSource, ) {
    super(Proposal, datasource);
  }

}
