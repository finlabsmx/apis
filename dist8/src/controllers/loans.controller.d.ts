import { Filter, Where } from '@loopback/repository';
import { Loan } from '../models';
import { LoanRepository } from '../repositories';
export declare class LoansController {
    loanRepository: LoanRepository;
    constructor(loanRepository: LoanRepository);
    create(obj: Loan): Promise<Loan>;
    count(where?: Where): Promise<number>;
    find(filter?: Filter): Promise<Loan[]>;
    updateAll(obj: Loan, where?: Where): Promise<number>;
    deleteAll(where?: Where): Promise<number>;
    findById(id: string): Promise<Loan>;
    updateById(id: string, obj: Loan): Promise<boolean>;
    deleteById(id: string): Promise<boolean>;
}
