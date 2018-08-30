"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("@loopback/repository");
let Loan = class Loan extends repository_1.Entity {
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
    constructor(data) {
        super(data);
    }
};
__decorate([
    repository_1.property({
        type: 'string',
        id: true,
        required: true,
    }),
    __metadata("design:type", String)
], Loan.prototype, "id", void 0);
__decorate([
    repository_1.property({
        type: 'boolean',
        required: true,
        default: false,
    }),
    __metadata("design:type", Boolean)
], Loan.prototype, "multiResponsible", void 0);
__decorate([
    repository_1.property({
        type: 'number',
        required: true,
        default: 0,
    }),
    __metadata("design:type", Number)
], Loan.prototype, "requestedCreditAmount", void 0);
__decorate([
    repository_1.property({
        type: 'number',
        required: true,
        default: 0,
    }),
    __metadata("design:type", Number)
], Loan.prototype, "aprovedCreditAmount", void 0);
__decorate([
    repository_1.property({
        type: 'number',
        required: true,
        default: 0,
    }),
    __metadata("design:type", Number)
], Loan.prototype, "mortgageAssetAmount", void 0);
__decorate([
    repository_1.property({
        type: 'number',
        default: 0.2,
    }),
    __metadata("design:type", Number)
], Loan.prototype, "mortgageAssetFinancePercent", void 0);
Loan = __decorate([
    repository_1.model(),
    __metadata("design:paramtypes", [Object])
], Loan);
exports.Loan = Loan;
//# sourceMappingURL=loan.model.js.map