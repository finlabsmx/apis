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
let BaseCatalog = class BaseCatalog extends repository_1.Entity {
    /*
    @property({
      type: 'date',
      required: true,
  
    })
    createdAt: string;
  */
    /*
    @property({
      type: 'date',
  
    })
    updatedAt?: string;*/
    /*
    @hasMany(BaseCatalog)
    elements?: BaseCatalog[];*/
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
], BaseCatalog.prototype, "id", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        required: true
    }),
    __metadata("design:type", String)
], BaseCatalog.prototype, "code", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    __metadata("design:type", String)
], BaseCatalog.prototype, "name", void 0);
__decorate([
    repository_1.property({
        type: 'string',
    }),
    __metadata("design:type", String)
], BaseCatalog.prototype, "description", void 0);
__decorate([
    repository_1.property({
        type: 'boolean',
        required: true,
    }),
    __metadata("design:type", Boolean)
], BaseCatalog.prototype, "enable", void 0);
BaseCatalog = __decorate([
    repository_1.model(),
    __metadata("design:paramtypes", [Object])
], BaseCatalog);
exports.BaseCatalog = BaseCatalog;
//# sourceMappingURL=base-catalog.model.js.map