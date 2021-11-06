import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {Servicio, ServicioRelations, Cliente} from '../models';
import {ClienteRepository} from './cliente.repository';

export class ServicioRepository extends DefaultCrudRepository<
  Servicio,
  typeof Servicio.prototype.id,
  ServicioRelations
> {

  public readonly clientefk: BelongsToAccessor<Cliente, typeof Servicio.prototype.id>;

  public readonly origenfk: BelongsToAccessor<Cliente, typeof Servicio.prototype.id>;

  public readonly destinofk: BelongsToAccessor<Cliente, typeof Servicio.prototype.id>;

  constructor(
    @inject('datasources.Mongo') dataSource: MongoDataSource, @repository.getter('ClienteRepository') protected clienteRepositoryGetter: Getter<ClienteRepository>,
  ) {
    super(Servicio, dataSource);
    this.destinofk = this.createBelongsToAccessorFor('destinofk', clienteRepositoryGetter,);
    this.registerInclusionResolver('destinofk', this.destinofk.inclusionResolver);
    this.origenfk = this.createBelongsToAccessorFor('origenfk', clienteRepositoryGetter,);
    this.registerInclusionResolver('origenfk', this.origenfk.inclusionResolver);
    this.clientefk = this.createBelongsToAccessorFor('clientefk', clienteRepositoryGetter,);
    this.registerInclusionResolver('clientefk', this.clientefk.inclusionResolver);
  }
}
