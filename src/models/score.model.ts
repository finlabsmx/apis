import { Entity, model, property } from '@loopback/repository';
import { Kpi } from './kpi.model';

@model()
export class Score extends Entity {

  @property({
    type: 'string',
    id: true,
    required: true,

  })
  id: string;


  @property({
    type: ['array'],
    arrayType: Kpi,
    required: true,

  })
  kpis: Kpi[];


  constructor(data?: Partial<Score>) {
    super(data);
  }
}
