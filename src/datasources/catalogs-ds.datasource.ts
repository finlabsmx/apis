import {inject} from '@loopback/core';
import {juggler, DataSource, AnyObject} from '@loopback/repository';
const config = require('./catalogs-ds.datasource.json');

export class CatalogsDSDataSource extends juggler.DataSource {
  static dataSourceName = 'catalogsDS';

  constructor(
    @inject('datasources.config.catalogsDS', {optional: true})
    dsConfig: AnyObject = config
  ) {
    super(dsConfig);
  }
}
