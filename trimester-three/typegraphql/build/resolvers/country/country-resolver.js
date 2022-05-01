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
exports.CountryResolver = void 0;
const type_graphql_1 = require("type-graphql");
const Country_entity_1 = require("../../entities/Country-entity");
const country_arguments_1 = require("./country-arguments");
let CountryResolver = class CountryResolver {
    async countries() {
        return await Country_entity_1.CountryModel.find({});
    }
    async country(_id) {
        return await Country_entity_1.CountryModel.findById(_id);
    }
    async createCountry(data) {
        const newCountry = new Country_entity_1.CountryModel(data);
        await newCountry.save();
        return newCountry;
    }
    async deleteCountry(_id) {
        return await Country_entity_1.CountryModel.findByIdAndRemove(_id);
    }
    async editCountry(_id, data) {
        return await Country_entity_1.CountryModel.findByIdAndUpdate(_id, data, { new: true });
    }
};
__decorate([
    (0, type_graphql_1.Query)(returns => [Country_entity_1.Country]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CountryResolver.prototype, "countries", null);
__decorate([
    (0, type_graphql_1.Query)(returns => Country_entity_1.Country),
    __param(0, (0, type_graphql_1.Arg)("_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CountryResolver.prototype, "country", null);
__decorate([
    (0, type_graphql_1.Mutation)(returns => Country_entity_1.Country),
    __param(0, (0, type_graphql_1.Arg)("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [country_arguments_1.BaseCountryInput]),
    __metadata("design:returntype", Promise)
], CountryResolver.prototype, "createCountry", null);
__decorate([
    (0, type_graphql_1.Mutation)(returns => Country_entity_1.Country),
    __param(0, (0, type_graphql_1.Arg)("_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CountryResolver.prototype, "deleteCountry", null);
__decorate([
    (0, type_graphql_1.Mutation)(returns => Country_entity_1.Country),
    __param(0, (0, type_graphql_1.Arg)("_id")),
    __param(1, (0, type_graphql_1.Arg)("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, country_arguments_1.EditCountryInput]),
    __metadata("design:returntype", Promise)
], CountryResolver.prototype, "editCountry", null);
CountryResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], CountryResolver);
exports.CountryResolver = CountryResolver;
