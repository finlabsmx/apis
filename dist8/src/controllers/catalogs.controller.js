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
let CatalogsController = class CatalogsController {
    constructor(catalogsRepository) {
        this.catalogsRepository = catalogsRepository;
        console.log("[CATALOGS] started");
    }
    async create(obj) {
        return await this.catalogsRepository.create(obj);
    }
    async count(where) {
        return await this.catalogsRepository.count(where);
    }
    async find(filter) {
        return await this.catalogsRepository.find(filter);
    }
    async updateAll(obj, where) {
        return await this.catalogsRepository.updateAll(obj, where);
    }
    async deleteAll(where) {
        return await this.catalogsRepository.deleteAll(where);
    }
    async findById(id) {
        return await this.catalogsRepository.findById(id);
    }
    async updateById(id, obj) {
        return await this.catalogsRepository.updateById(id, obj);
    }
    async deleteById(id) {
        return await this.catalogsRepository.deleteById(id);
    }
};
__decorate([
    rest_1.post('/catalogs'),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.BaseCatalog]),
    __metadata("design:returntype", Promise)
], CatalogsController.prototype, "create", null);
__decorate([
    rest_1.get('/catalogs/count'),
    __param(0, rest_1.param.query.string('where')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CatalogsController.prototype, "count", null);
__decorate([
    rest_1.get('/catalogs'),
    __param(0, rest_1.param.query.string('filter')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CatalogsController.prototype, "find", null);
__decorate([
    rest_1.patch('/catalogs'),
    __param(0, rest_1.requestBody()),
    __param(1, rest_1.param.query.string('where')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.BaseCatalog, Object]),
    __metadata("design:returntype", Promise)
], CatalogsController.prototype, "updateAll", null);
__decorate([
    rest_1.del('/catalogs'),
    __param(0, rest_1.param.query.string('where')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CatalogsController.prototype, "deleteAll", null);
__decorate([
    rest_1.get('/catalogs/{id}'),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CatalogsController.prototype, "findById", null);
__decorate([
    rest_1.patch('/catalogs/{id}'),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.BaseCatalog]),
    __metadata("design:returntype", Promise)
], CatalogsController.prototype, "updateById", null);
__decorate([
    rest_1.del('/catalogs/{id}'),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CatalogsController.prototype, "deleteById", null);
CatalogsController = __decorate([
    __param(0, repository_1.repository(repositories_1.CatalogsRepository)),
    __metadata("design:paramtypes", [repositories_1.CatalogsRepository])
], CatalogsController);
exports.CatalogsController = CatalogsController;
//# sourceMappingURL=catalogs.controller.js.map