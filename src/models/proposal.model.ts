import { Entity, model, property } from '@loopback/repository';

@model()
export class Proposal extends Entity {

  @property({
    type: 'string',
    id: true,
    required: true,

  })
  id: string;

  @property({
    type: 'number',
    required: true,
    default: 0,

  })
  amount: number;

  @property({
    type: 'number',
    required: true,
    default: 0,

  })
  interestRate: number;

  @property({
    type: 'boolean',
    required: true,
    default: true,

  })
  preapproved: boolean;

  @property({
    type: 'number',
    default: 0,

  })
  sentimentLevel?: number;


  /*
  @property({
    type: 'object',
    required: true,

  })
  entity: object;
  */

  constructor(data?: Partial<Proposal>) {
    super(data);
  }
}
