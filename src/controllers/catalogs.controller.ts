import { Filter, Where, repository } from '@loopback/repository';

import {
  post,
  param,
  get,
  patch,
  del,
  requestBody
} from '@loopback/rest';
import { BaseCatalog } from '../models';
import { CatalogsRepository } from '../repositories';

export class CatalogsController {

  constructor(
    @repository(CatalogsRepository)
    public catalogsRepository: CatalogsRepository,
  ) {
    console.log("[CATALOGS] started");
  }

  @post('/catalogs')
  async create(@requestBody() obj: BaseCatalog)
    : Promise<BaseCatalog> {
    return await this.catalogsRepository.create(obj);
  }

  @get('/catalogs/count')
  async count(@param.query.string('where') where?: Where): Promise<number> {
    return await this.catalogsRepository.count(where);
  }

  @get('/catalogs')
  async find(@param.query.string('filter') filter?: Filter)
    : Promise<BaseCatalog[]> {
    return await this.catalogsRepository.find(filter);
  }

  @patch('/catalogs')
  async updateAll(
    @requestBody() obj: BaseCatalog,
    @param.query.string('where') where?: Where
  ): Promise<number> {
    return await this.catalogsRepository.updateAll(obj, where);
  }

  @del('/catalogs')
  async deleteAll(@param.query.string('where') where?: Where): Promise<number> {
    return await this.catalogsRepository.deleteAll(where);
  }

  @get('/catalogs/{id}')
  async findById(@param.path.string('id') id: string): Promise<BaseCatalog> {
    return await this.catalogsRepository.findById(id);
  }

  @patch('/catalogs/{id}')
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() obj: BaseCatalog
  ): Promise<boolean> {
    return await this.catalogsRepository.updateById(id, obj);
  }

  @del('/catalogs/{id}')
  async deleteById(@param.path.string('id') id: string): Promise<boolean> {
    return await this.catalogsRepository.deleteById(id);
  }
}
