import { Entity, model, property } from '@loopback/repository';

@model()
export class Prospect extends Entity {

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
  firstName1: string;

  @property({
    type: 'string',

  })
  firstName2?: string;

  @property({
    type: 'string',
    required: true,

  })
  lastName1: string;

  @property({
    type: 'string',

  })
  lastName2?: string;

  @property({
    type: 'string',

  })
  name?: string;

  @property({
    type: 'string',

  })
  gender?: string;

  @property({
    type: 'string',

  })
  fiscalID?: string;

  @property({
    type: 'string',

  })
  nationalID?: string;

  @property({
    type: 'string',

  })
  email?: string;

  @property({
    type: 'string',

  })
  mobilePhone?: string;

  /*
  @property({
    type: 'object',

  })
  birthInfo?: object;

  @property({
    type: 'object',

  })
  residenceInfo?: object;

  @property({
    type: 'object',

  })
  prequalification?: object;

  @property({
    type: 'object',

  })
  financialInfo?: object;
  */

  constructor(data?: Partial<Prospect>) {
    super(data);
  }
}
