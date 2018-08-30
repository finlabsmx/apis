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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let LoansController = class LoansController {
    constructor(loanRepository) {
        this.loanRepository = loanRepository;
    }
    async create(obj) {
        return await this.loanRepository.create(obj);
    }
    async count(where) {
        return await this.loanRepository.count(where);
    }
    async find(filter) {
        return await this.loanRepository.find(filter);
    }
    async updateAll(obj, where) {
        return await this.loanRepository.updateAll(obj, where);
    }
    async deleteAll(where) {
        return await this.loanRepository.deleteAll(where);
    }
    async findById(id) {
        return await this.loanRepository.findById(id);
    }
    async updateById(id, obj) {
        return await this.loanRepository.updateById(id, obj);
    }
    async deleteById(id) {
        return await this.loanRepository.deleteById(id);
    }
};
__decorate([
    rest_1.post('/loans'),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Loan]),
    __metadata("design:returntype", Promise)
], LoansController.prototype, "create", null);
__decorate([
    rest_1.get('/loans/count'),
    __param(0, rest_1.param.query.string('where')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LoansController.prototype, "count", null);
__decorate([
    rest_1.get('/loans'),
    __param(0, rest_1.param.query.string('filter')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LoansController.prototype, "find", null);
__decorate([
    rest_1.patch('/loans'),
    __param(0, rest_1.requestBody()),
    __param(1, rest_1.param.query.string('where')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Loan, Object]),
    __metadata("design:returntype", Promise)
], LoansController.prototype, "updateAll", null);
__decorate([
    rest_1.del('/loans'),
    __param(0, rest_1.param.query.string('where')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LoansController.prototype, "deleteAll", null);
__decorate([
    rest_1.get('/loans/{id}'),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LoansController.prototype, "findById", null);
__decorate([
    rest_1.patch('/loans/{id}'),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Loan]),
    __metadata("design:returntype", Promise)
], LoansController.prototype, "updateById", null);
__decorate([
    rest_1.del('/loans/{id}'),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LoansController.prototype, "deleteById", null);
LoansController = __decorate([
    __param(0, repository_1.repository(repositories_1.LoanRepository)),
    __metadata("design:paramtypes", [repositories_1.LoanRepository])
], LoansController);
exports.LoansController = LoansController;
//# sourceMappingURL=loans.controller.js.map