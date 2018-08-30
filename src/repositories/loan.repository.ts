import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { Loan } from '../models/loan.model';

import { inject } from '@loopback/core';


export class LoanRepository extends DefaultCrudRepository<Loan, typeof Loan.prototype.id> {


  constructor(@inject('datasources.genericDB') protected datasource: juggler.DataSource, ) {
    super(Loan, datasource);
  }

}
