import { Filter, Where, repository } from '@loopback/repository';
import {
  post,
  param,
  get,
  patch,
  del,
  requestBody
} from '@loopback/rest';
import { Score } from '../models';
import { ScoreRepository } from '../repositories';

export class ScoringController {
  constructor(
    @repository(ScoreRepository)
    public scoreRepository: ScoreRepository,
  ) { }

  @post('/scoring')
  async create(@requestBody() obj: Score)
    : Promise<Score> {
    return await this.scoreRepository.create(obj);
  }

  @get('/scoring/count')
  async count(@param.query.string('where') where?: Where): Promise<number> {
    return await this.scoreRepository.count(where);
  }

  @get('/scoring')
  async find(@param.query.string('filter') filter?: Filter)
    : Promise<Score[]> {
    return await this.scoreRepository.find(filter);
  }

  @patch('/scoring')
  async updateAll(
    @requestBody() obj: Score,
    @param.query.string('where') where?: Where
  ): Promise<number> {
    return await this.scoreRepository.updateAll(obj, where);
  }

  @del('/scoring')
  async deleteAll(@param.query.string('where') where?: Where): Promise<number> {
    return await this.scoreRepository.deleteAll(where);
  }

  @get('/scoring/{id}')
  async findById(@param.path.string('id') id: string): Promise<Score> {
    return await this.scoreRepository.findById(id);
  }

  @patch('/scoring/{id}')
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() obj: Score
  ): Promise<boolean> {
    return await this.scoreRepository.updateById(id, obj);
  }

  @del('/scoring/{id}')
  async deleteById(@param.path.string('id') id: string): Promise<boolean> {
    return await this.scoreRepository.deleteById(id);
  }
}
