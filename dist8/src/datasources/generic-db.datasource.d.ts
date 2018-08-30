import { juggler, AnyObject } from '@loopback/repository';
export declare class GenericDBDataSource extends juggler.DataSource {
    static dataSourceName: string;
    constructor(dsConfig?: AnyObject);
}
