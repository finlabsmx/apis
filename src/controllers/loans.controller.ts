import {Filter, Where, repository} from '@loopback/repository';
import {
  post,
  param,
  get,
  patch,
  del,
  requestBody
} from '@loopback/rest';
import {Loan} from '../models';
import {LoanRepository} from '../repositories';

export class LoansController {
  constructor(
    @repository(LoanRepository)
    public loanRepository : LoanRepository,
  ) {}

  @post('/loans')
  async create(@requestBody() obj: Loan)
    : Promise<Loan> {
    return await this.loanRepository.create(obj);
  }

  @get('/loans/count')
  async count(@param.query.string('where') where?: Where): Promise<number> {
    return await this.loanRepository.count(where);
  }

  @get('/loans')
  async find(@param.query.string('filter') filter?: Filter)
    : Promise<Loan[]> {
    return await this.loanRepository.find(filter);
  }

  @patch('/loans')
  async updateAll(
    @requestBody() obj: Loan,
    @param.query.string('where') where?: Where
  ): Promise<number> {
    return await this.loanRepository.updateAll(obj, where);
  }

  @del('/loans')
  async deleteAll(@param.query.string('where') where?: Where): Promise<number> {
    return await this.loanRepository.deleteAll(where);
  }

  @get('/loans/{id}')
  async findById(@param.path.string('id') id: string): Promise<Loan> {
    return await this.loanRepository.findById(id);
  }

  @patch('/loans/{id}')
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() obj: Loan
  ): Promise<boolean> {
    return await this.loanRepository.updateById(id, obj);
  }

  @del('/loans/{id}')
  async deleteById(@param.path.string('id') id: string): Promise<boolean> {
    return await this.loanRepository.deleteById(id);
  }
}
