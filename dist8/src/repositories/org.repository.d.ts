import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { Organization } from '../models/organization.model';
export declare class OrganizationRepository extends DefaultCrudRepository<Organization, typeof Organization.prototype.id> {
    protected datasource: juggler.DataSource;
    constructor(datasource: juggler.DataSource);
}
