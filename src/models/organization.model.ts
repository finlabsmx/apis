import { Entity, model, property } from '@loopback/repository';

@model()
export class Organization extends Entity {

  @property({
    type: 'string',
    id: true,
    required: true,

  })
  id: string;

  @property({
    type: 'string',
    required: true,

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

  constructor(data?: Partial<Entity>) {
    super(data);
  }
}
