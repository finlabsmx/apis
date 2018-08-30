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
let Proposal = class Proposal extends repository_1.Entity {
    /*
    @property({
      type: 'object',
      required: true,
  
    })
    entity: object;
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
], Proposal.prototype, "id", void 0);
__decorate([
    repository_1.property({
        type: 'number',
        required: true,
        default: 0,
    }),
    __metadata("design:type", Number)
], Proposal.prototype, "amount", void 0);
__decorate([
    repository_1.property({
        type: 'number',
        required: true,
        default: 0,
    }),
    __metadata("design:type", Number)
], Proposal.prototype, "interestRate", void 0);
__decorate([
    repository_1.property({
        type: 'boolean',
        required: true,
        default: true,
    }),
    __metadata("design:type", Boolean)
], Proposal.prototype, "preapproved", void 0);
__decorate([
    repository_1.property({
        type: 'number',
        default: 0,
    }),
    __metadata("design:type", Number)
], Proposal.prototype, "sentimentLevel", void 0);
Proposal = __decorate([
    repository_1.model(),
    __metadata("design:paramtypes", [Object])
], Proposal);
exports.Proposal = Proposal;
//# sourceMappingURL=proposal.model.js.map