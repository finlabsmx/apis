import {Entity, model, property} from '@loopback/repository';

@model()
export class Kpi extends Entity {
  
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
    type: 'number',
    required: true,
    default: -1,
    
  })
  calification: number;
  
  constructor(data?: Partial<Kpi>) {
    super(data);
  }
}
