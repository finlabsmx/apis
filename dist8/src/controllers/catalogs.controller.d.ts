import { Filter, Where } from '@loopback/repository';
import { BaseCatalog } from '../models';
import { CatalogsRepository } from '../repositories';
export declare class CatalogsController {
    catalogsRepository: CatalogsRepository;
    constructor(catalogsRepository: CatalogsRepository);
    create(obj: BaseCatalog): Promise<BaseCatalog>;
    count(where?: Where): Promise<number>;
    find(filter?: Filter): Promise<BaseCatalog[]>;
    updateAll(obj: BaseCatalog, where?: Where): Promise<number>;
    deleteAll(where?: Where): Promise<number>;
    findById(id: string): Promise<BaseCatalog>;
    updateById(id: string, obj: BaseCatalog): Promise<boolean>;
    deleteById(id: string): Promise<boolean>;
}
