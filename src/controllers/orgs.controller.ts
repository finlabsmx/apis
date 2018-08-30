import { Filter, Where, repository } from '@loopback/repository';
import {
  post,
  param,
  get,
  patch,
  del,
  requestBody
} from '@loopback/rest';
import { Organization } from '../models';
import { OrganizationRepository } from '../repositories';

export class OrgsController {
  constructor(

    @repository(OrganizationRepository)
    public orgRepo: OrganizationRepository,
  ) { }

  @post('/orgs')
  async create(@requestBody() obj: Organization)
    : Promise<Organization> {
    return await this.orgRepo.create(obj);
  }

  @get('/orgs/count')
  async count(@param.query.string('where') where?: Where): Promise<number> {
    return await this.orgRepo.count(where);
  }

  @get('/orgs')
  async find(@param.query.string('filter') filter?: Filter)
    : Promise<Organization[]> {
    return await this.orgRepo.find(filter);
  }

  @patch('/orgs')
  async updateAll(
    @requestBody() obj: Organization,
    @param.query.string('where') where?: Where
  ): Promise<number> {
    return await this.orgRepo.updateAll(obj, where);
  }

  @del('/orgs')
  async deleteAll(@param.query.string('where') where?: Where): Promise<number> {
    return await this.orgRepo.deleteAll(where);
  }

  @get('/orgs/{id}')
  async findById(@param.path.string('id') id: string): Promise<Organization> {
    return await this.orgRepo.findById(id);
  }

  @patch('/orgs/{id}')
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() obj: Organization
  ): Promise<boolean> {
    return await this.orgRepo.updateById(id, obj);
  }

  @del('/orgs/{id}')
  async deleteById(@param.path.string('id') id: string): Promise<boolean> {
    return await this.orgRepo.deleteById(id);
  }
}
