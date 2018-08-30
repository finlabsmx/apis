import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { BaseCatalog } from '../models/base-catalog.model';
export declare class CatalogsRepository extends DefaultCrudRepository<BaseCatalog, typeof BaseCatalog.prototype.id> {
    protected datasource: juggler.DataSource;
    constructor(datasource: juggler.DataSource);
}
