import { DefaultCrudRepository, juggler } from '@loopback/repository';

import { Organization } from '../models/organization.model';

import { inject } from '@loopback/core';


export class OrganizationRepository extends DefaultCrudRepository<Organization, typeof Organization.prototype.id> {


  constructor(@inject('datasources.genericDB') protected datasource: juggler.DataSource, ) {
    super(Organization, datasource);
  }

}
