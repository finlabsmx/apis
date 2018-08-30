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
let ProposalsController = class ProposalsController {
    constructor(proposalRepository) {
        this.proposalRepository = proposalRepository;
    }
    async create(obj) {
        return await this.proposalRepository.create(obj);
    }
    async count(where) {
        return await this.proposalRepository.count(where);
    }
    async find(filter) {
        return await this.proposalRepository.find(filter);
    }
    async updateAll(obj, where) {
        return await this.proposalRepository.updateAll(obj, where);
    }
    async deleteAll(where) {
        return await this.proposalRepository.deleteAll(where);
    }
    async findById(id) {
        return await this.proposalRepository.findById(id);
    }
    async updateById(id, obj) {
        return await this.proposalRepository.updateById(id, obj);
    }
    async deleteById(id) {
        return await this.proposalRepository.deleteById(id);
    }
};
__decorate([
    rest_1.post('/proposals'),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Proposal]),
    __metadata("design:returntype", Promise)
], ProposalsController.prototype, "create", null);
__decorate([
    rest_1.get('/proposals/count'),
    __param(0, rest_1.param.query.string('where')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProposalsController.prototype, "count", null);
__decorate([
    rest_1.get('/proposals'),
    __param(0, rest_1.param.query.string('filter')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProposalsController.prototype, "find", null);
__decorate([
    rest_1.patch('/proposals'),
    __param(0, rest_1.requestBody()),
    __param(1, rest_1.param.query.string('where')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Proposal, Object]),
    __metadata("design:returntype", Promise)
], ProposalsController.prototype, "updateAll", null);
__decorate([
    rest_1.del('/proposals'),
    __param(0, rest_1.param.query.string('where')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProposalsController.prototype, "deleteAll", null);
__decorate([
    rest_1.get('/proposals/{id}'),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProposalsController.prototype, "findById", null);
__decorate([
    rest_1.patch('/proposals/{id}'),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Proposal]),
    __metadata("design:returntype", Promise)
], ProposalsController.prototype, "updateById", null);
__decorate([
    rest_1.del('/proposals/{id}'),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProposalsController.prototype, "deleteById", null);
ProposalsController = __decorate([
    __param(0, repository_1.repository(repositories_1.ProposalRepository)),
    __metadata("design:paramtypes", [repositories_1.ProposalRepository])
], ProposalsController);
exports.ProposalsController = ProposalsController;
//# sourceMappingURL=proposals.controller.js.map