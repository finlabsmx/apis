import { Entity } from '@loopback/repository';
export declare class Loan extends Entity {
    id: string;
    multiResponsible: boolean;
    requestedCreditAmount: number;
    aprovedCreditAmount: number;
    mortgageAssetAmount: number;
    mortgageAssetFinancePercent?: number;
    constructor(data?: Partial<Loan>);
}
