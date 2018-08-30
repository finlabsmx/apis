import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { Loan } from '../models/loan.model';
export declare class LoanRepository extends DefaultCrudRepository<Loan, typeof Loan.prototype.id> {
    protected datasource: juggler.DataSource;
    constructor(datasource: juggler.DataSource);
}
