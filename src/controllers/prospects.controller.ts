import { Filter, Where, repository } from '@loopback/repository';
import {
  post,
  param,
  get,
  patch,
  del,
  requestBody
} from '@loopback/rest';
import { Prospect } from '../models';
import { ProspectRepository } from '../repositories';

export class ProspectsController {
  constructor(
    @repository(ProspectRepository)
    public prospectRepo: ProspectRepository,
  ) { }

  @post('/prospects')
  async create(@requestBody() obj: Prospect)
    : Promise<Prospect> {
    return await this.prospectRepo.create(obj);
  }

  @get('/prospects/count')
  async count(@param.query.string('where') where?: Where): Promise<number> {
    return await this.prospectRepo.count(where);
  }

  @get('/prospects')
  async find(@param.query.string('filter') filter?: Filter)
    : Promise<Prospect[]> {
    return await this.prospectRepo.find(filter);
  }

  @patch('/prospects')
  async updateAll(
    @requestBody() obj: Prospect,
    @param.query.string('where') where?: Where
  ): Promise<number> {
    return await this.prospectRepo.updateAll(obj, where);
  }

  @del('/prospects')
  async deleteAll(@param.query.string('where') where?: Where): Promise<number> {
    return await this.prospectRepo.deleteAll(where);
  }

  @get('/prospects/{id}')
  async findById(@param.path.string('id') id: string): Promise<Prospect> {
    return await this.prospectRepo.findById(id);
  }

  @patch('/prospects/{id}')
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() obj: Prospect
  ): Promise<boolean> {
    return await this.prospectRepo.updateById(id, obj);
  }

  @del('/prospects/{id}')
  async deleteById(@param.path.string('id') id: string): Promise<boolean> {
    return await this.prospectRepo.deleteById(id);
  }
}
