import { juggler, AnyObject } from '@loopback/repository';
export declare class CatalogsDSDataSource extends juggler.DataSource {
    static dataSourceName: string;
    constructor(dsConfig?: AnyObject);
}
