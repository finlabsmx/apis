import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { Prospect } from '../models/prospect.model';

import { inject } from '@loopback/core';


export class ProspectRepository extends DefaultCrudRepository<Prospect, typeof Prospect.prototype.id> {


  constructor(@inject('datasources.genericDB') protected datasource: juggler.DataSource, ) {
    super(Prospect, datasource);
  }

}
