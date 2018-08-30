import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { Score } from '../models/score.model';
export declare class ScoreRepository extends DefaultCrudRepository<Score, typeof Score.prototype.id> {
    protected datasource: juggler.DataSource;
    constructor(datasource: juggler.DataSource);
}
