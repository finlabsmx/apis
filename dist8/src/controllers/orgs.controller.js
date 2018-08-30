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
let OrgsController = class OrgsController {
    constructor(orgRepo) {
        this.orgRepo = orgRepo;
    }
    async create(obj) {
        return await this.orgRepo.create(obj);
    }
    async count(where) {
        return await this.orgRepo.count(where);
    }
    async find(filter) {
        return await this.orgRepo.find(filter);
    }
    async updateAll(obj, where) {
        return await this.orgRepo.updateAll(obj, where);
    }
    async deleteAll(where) {
        return await this.orgRepo.deleteAll(where);
    }
    async findById(id) {
        return await this.orgRepo.findById(id);
    }
    async updateById(id, obj) {
        return await this.orgRepo.updateById(id, obj);
    }
    async deleteById(id) {
        return await this.orgRepo.deleteById(id);
    }
};
__decorate([
    rest_1.post('/orgs'),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Organization]),
    __metadata("design:returntype", Promise)
], OrgsController.prototype, "create", null);
__decorate([
    rest_1.get('/orgs/count'),
    __param(0, rest_1.param.query.string('where')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OrgsController.prototype, "count", null);
__decorate([
    rest_1.get('/orgs'),
    __param(0, rest_1.param.query.string('filter')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OrgsController.prototype, "find", null);
__decorate([
    rest_1.patch('/orgs'),
    __param(0, rest_1.requestBody()),
    __param(1, rest_1.param.query.string('where')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Organization, Object]),
    __metadata("design:returntype", Promise)
], OrgsController.prototype, "updateAll", null);
__decorate([
    rest_1.del('/orgs'),
    __param(0, rest_1.param.query.string('where')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OrgsController.prototype, "deleteAll", null);
__decorate([
    rest_1.get('/orgs/{id}'),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrgsController.prototype, "findById", null);
__decorate([
    rest_1.patch('/orgs/{id}'),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Organization]),
    __metadata("design:returntype", Promise)
], OrgsController.prototype, "updateById", null);
__decorate([
    rest_1.del('/orgs/{id}'),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrgsController.prototype, "deleteById", null);
OrgsController = __decorate([
    __param(0, repository_1.repository(repositories_1.OrganizationRepository)),
    __metadata("design:paramtypes", [repositories_1.OrganizationRepository])
], OrgsController);
exports.OrgsController = OrgsController;
//# sourceMappingURL=orgs.controller.js.map