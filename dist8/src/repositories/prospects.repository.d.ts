import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { Prospect } from '../models/prospect.model';
export declare class ProspectRepository extends DefaultCrudRepository<Prospect, typeof Prospect.prototype.id> {
    protected datasource: juggler.DataSource;
    constructor(datasource: juggler.DataSource);
}
