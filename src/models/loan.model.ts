import { Entity, model, property } from '@loopback/repository';

@model()
export class Loan extends Entity {

  @property({
    type: 'string',
    id: true,
    required: true,

  })
  id: string;

  @property({
    type: 'boolean',
    required: true,
    default: false,

  })
  multiResponsible: boolean;
  /*
    @property({
      type: 'object',

    })
    experience?: object;


    @property({
      type: 'object',

    })
    scoring?: object;


    @property({
      type: 'object',

    })
    qualification?: object;*/

  @property({
    type: 'number',
    required: true,
    default: 0,

  })
  requestedCreditAmount: number;

  @property({
    type: 'number',
    required: true,
    default: 0,

  })
  aprovedCreditAmount: number;

  @property({
    type: 'number',
    required: true,
    default: 0,

  })
  mortgageAssetAmount: number;

  @property({
    type: 'number',
    default: 0.2,

  })
  mortgageAssetFinancePercent?: number;

  /*
  @property({
    type: 'object',
    required: true,

  })
  state: object;

  @property({
    type: 'object',
    required: true,

  })
  type: object;

  @property({
    type: 'object',

  })
  proposal?: object;

  @property({
    type: 'object',

  })
  prospect?: object;

  @property({
    type: 'object',

  })
  entity?: object;
*/
  constructor(data?: Partial<Loan>) {
    super(data);
  }
}
