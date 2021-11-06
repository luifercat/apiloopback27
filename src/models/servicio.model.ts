import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Cliente} from './cliente.model';

@model()
export class Servicio extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;
  @property({
    type: 'date',
    required: true,
  })
  fecha: string;

  @property({
    type: 'string',
    required: true,
  })
  hora: string;

  @property({
    type: 'string',
    required: true,
  })
  encomienda: string;

  @property({
    type: 'number',
    required: true,
  })
  valor: number;

  @belongsTo(() => Cliente, {name: 'clientefk'})
  cliente: string;

  @belongsTo(() => Cliente, {name: 'origenfk'})
  origen: string;

  @belongsTo(() => Cliente, {name: 'destinofk'})
  destino: string;

  constructor(data?: Partial<Servicio>) {
    super(data);
  }
}

export interface ServicioRelations {
  // describe navigational properties here
}

export type ServicioWithRelations = Servicio & ServicioRelations;
