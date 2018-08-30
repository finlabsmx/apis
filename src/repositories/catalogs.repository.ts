import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { BaseCatalog } from '../models/base-catalog.model';
import { inject } from '@loopback/core';


export class CatalogsRepository extends DefaultCrudRepository<BaseCatalog, typeof BaseCatalog.prototype.id> {


  constructor(@inject('datasources.catalogsDS') protected datasource: juggler.DataSource, ) {
    super(BaseCatalog, datasource);
  }

}
