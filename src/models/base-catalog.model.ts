import { Entity, model, property, hasMany } from '@loopback/repository';

@model()
export class BaseCatalog extends Entity {

  @property({
    type: 'string',
    id: true,
    required: true,

  })
  id: string;

  @property({
    type: 'string',
    required: true
  })
  code: string;

  @property({
    type: 'string',
    required: true,

  })
  name: string;

  @property({
    type: 'string',

  })
  description?: string;

  @property({
    type: 'boolean',
    required: true,

  })
  enable: boolean;

  /*
  @property({
    type: 'date',
    required: true,

  })
  createdAt: string;
*/

  /*
  @property({
    type: 'date',

  })
  updatedAt?: string;*/


  /*
  @hasMany(BaseCatalog)
  elements?: BaseCatalog[];*/

  constructor(data?: Partial<BaseCatalog>) {
    super(data);
  }
}
