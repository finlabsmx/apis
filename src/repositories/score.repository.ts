import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { Score } from '../models/score.model';

import { inject } from '@loopback/core';


export class ScoreRepository extends DefaultCrudRepository<Score, typeof Score.prototype.id> {


  constructor(@inject('datasources.genericDB') protected datasource: juggler.DataSource, ) {
    super(Score, datasource);
  }

}
