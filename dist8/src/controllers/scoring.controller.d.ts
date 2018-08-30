import { Filter, Where } from '@loopback/repository';
import { Score } from '../models';
import { ScoreRepository } from '../repositories';
export declare class ScoringController {
    scoreRepository: ScoreRepository;
    constructor(scoreRepository: ScoreRepository);
    create(obj: Score): Promise<Score>;
    count(where?: Where): Promise<number>;
    find(filter?: Filter): Promise<Score[]>;
    updateAll(obj: Score, where?: Where): Promise<number>;
    deleteAll(where?: Where): Promise<number>;
    findById(id: string): Promise<Score>;
    updateById(id: string, obj: Score): Promise<boolean>;
    deleteById(id: string): Promise<boolean>;
}
