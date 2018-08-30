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
let ProspectsController = class ProspectsController {
    constructor(prospectRepo) {
        this.prospectRepo = prospectRepo;
    }
    async create(obj) {
        return await this.prospectRepo.create(obj);
    }
    async count(where) {
        return await this.prospectRepo.count(where);
    }
    async find(filter) {
        return await this.prospectRepo.find(filter);
    }
    async updateAll(obj, where) {
        return await this.prospectRepo.updateAll(obj, where);
    }
    async deleteAll(where) {
        return await this.prospectRepo.deleteAll(where);
    }
    async findById(id) {
        return await this.prospectRepo.findById(id);
    }
    async updateById(id, obj) {
        return await this.prospectRepo.updateById(id, obj);
    }
    async deleteById(id) {
        return await this.prospectRepo.deleteById(id);
    }
};
__decorate([
    rest_1.post('/prospects'),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Prospect]),
    __metadata("design:returntype", Promise)
], ProspectsController.prototype, "create", null);
__decorate([
    rest_1.get('/prospects/count'),
    __param(0, rest_1.param.query.string('where')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProspectsController.prototype, "count", null);
__decorate([
    rest_1.get('/prospects'),
    __param(0, rest_1.param.query.string('filter')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProspectsController.prototype, "find", null);
__decorate([
    rest_1.patch('/prospects'),
    __param(0, rest_1.requestBody()),
    __param(1, rest_1.param.query.string('where')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Prospect, Object]),
    __metadata("design:returntype", Promise)
], ProspectsController.prototype, "updateAll", null);
__decorate([
    rest_1.del('/prospects'),
    __param(0, rest_1.param.query.string('where')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProspectsController.prototype, "deleteAll", null);
__decorate([
    rest_1.get('/prospects/{id}'),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProspectsController.prototype, "findById", null);
__decorate([
    rest_1.patch('/prospects/{id}'),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Prospect]),
    __metadata("design:returntype", Promise)
], ProspectsController.prototype, "updateById", null);
__decorate([
    rest_1.del('/prospects/{id}'),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProspectsController.prototype, "deleteById", null);
ProspectsController = __decorate([
    __param(0, repository_1.repository(repositories_1.ProspectRepository)),
    __metadata("design:paramtypes", [repositories_1.ProspectRepository])
], ProspectsController);
exports.ProspectsController = ProspectsController;
//# sourceMappingURL=prospects.controller.js.map