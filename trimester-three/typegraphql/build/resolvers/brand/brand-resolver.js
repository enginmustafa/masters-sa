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
exports.BrandResolver = void 0;
const type_graphql_1 = require("type-graphql");
const brand_entity_1 = require("../../entities/brand-entity");
const brand_arguments_1 = require("./brand-arguments");
let BrandResolver = class BrandResolver {
    async brands() {
        return await brand_entity_1.BrandModel.find({});
    }
    async brand(_id) {
        return await brand_entity_1.BrandModel.findById(_id);
    }
    async createBrand(data) {
        const newBrand = new brand_entity_1.BrandModel(data);
        await newBrand.save();
        return newBrand;
    }
    async deleteBrand(_id) {
        return await brand_entity_1.BrandModel.findByIdAndRemove(_id);
    }
    async editBrand(_id, data) {
        return await brand_entity_1.BrandModel.findByIdAndUpdate(_id, data, { new: true });
    }
};
__decorate([
    (0, type_graphql_1.Query)(returns => [brand_entity_1.Brand]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BrandResolver.prototype, "brands", null);
__decorate([
    (0, type_graphql_1.Query)(returns => brand_entity_1.Brand),
    __param(0, (0, type_graphql_1.Arg)("_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BrandResolver.prototype, "brand", null);
__decorate([
    (0, type_graphql_1.Mutation)(returns => brand_entity_1.Brand),
    __param(0, (0, type_graphql_1.Arg)("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [brand_arguments_1.BaseBrandInput]),
    __metadata("design:returntype", Promise)
], BrandResolver.prototype, "createBrand", null);
__decorate([
    (0, type_graphql_1.Mutation)(returns => brand_entity_1.Brand),
    __param(0, (0, type_graphql_1.Arg)("_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BrandResolver.prototype, "deleteBrand", null);
__decorate([
    (0, type_graphql_1.Mutation)(returns => brand_entity_1.Brand),
    __param(0, (0, type_graphql_1.Arg)("_id")),
    __param(1, (0, type_graphql_1.Arg)("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, brand_arguments_1.BaseBrandInput]),
    __metadata("design:returntype", Promise)
], BrandResolver.prototype, "editBrand", null);
BrandResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], BrandResolver);
exports.BrandResolver = BrandResolver;
