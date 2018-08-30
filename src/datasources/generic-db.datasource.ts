import {inject} from '@loopback/core';
import {juggler, DataSource, AnyObject} from '@loopback/repository';
const config = require('./generic-db.datasource.json');

export class GenericDBDataSource extends juggler.DataSource {
  static dataSourceName = 'genericDB';

  constructor(
    @inject('datasources.config.genericDB', {optional: true})
    dsConfig: AnyObject = config
  ) {
    super(dsConfig);
  }
}
