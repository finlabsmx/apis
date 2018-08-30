import {Filter, Where, repository} from '@loopback/repository';
import {
  post,
  param,
  get,
  patch,
  del,
  requestBody
} from '@loopback/rest';
import {Proposal} from '../models';
import {ProposalRepository} from '../repositories';

export class ProposalsController {
  constructor(
    @repository(ProposalRepository)
    public proposalRepository : ProposalRepository,
  ) {}

  @post('/proposals')
  async create(@requestBody() obj: Proposal)
    : Promise<Proposal> {
    return await this.proposalRepository.create(obj);
  }

  @get('/proposals/count')
  async count(@param.query.string('where') where?: Where): Promise<number> {
    return await this.proposalRepository.count(where);
  }

  @get('/proposals')
  async find(@param.query.string('filter') filter?: Filter)
    : Promise<Proposal[]> {
    return await this.proposalRepository.find(filter);
  }

  @patch('/proposals')
  async updateAll(
    @requestBody() obj: Proposal,
    @param.query.string('where') where?: Where
  ): Promise<number> {
    return await this.proposalRepository.updateAll(obj, where);
  }

  @del('/proposals')
  async deleteAll(@param.query.string('where') where?: Where): Promise<number> {
    return await this.proposalRepository.deleteAll(where);
  }

  @get('/proposals/{id}')
  async findById(@param.path.string('id') id: string): Promise<Proposal> {
    return await this.proposalRepository.findById(id);
  }

  @patch('/proposals/{id}')
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() obj: Proposal
  ): Promise<boolean> {
    return await this.proposalRepository.updateById(id, obj);
  }

  @del('/proposals/{id}')
  async deleteById(@param.path.string('id') id: string): Promise<boolean> {
    return await this.proposalRepository.deleteById(id);
  }
}
