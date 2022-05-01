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
exports.FuelResolver = void 0;
const type_graphql_1 = require("type-graphql");
const fuel_entity_1 = require("../../entities/fuel-entity");
const fuel_arguments_1 = require("./fuel-arguments");
let FuelResolver = class FuelResolver {
    async fuels() {
        return await fuel_entity_1.FuelModel.find({});
    }
    async fuel(_id) {
        return await fuel_entity_1.FuelModel.findById(_id);
    }
    async createFuel(data) {
        const newFuel = new fuel_entity_1.FuelModel(data);
        await newFuel.save();
        return newFuel;
    }
    async deleteFuel(_id) {
        return await fuel_entity_1.FuelModel.findByIdAndRemove(_id);
    }
    async editFuel(_id, data) {
        return await fuel_entity_1.FuelModel.findByIdAndUpdate(_id, data, { new: true });
    }
};
__decorate([
    (0, type_graphql_1.Query)(returns => [fuel_entity_1.Fuel]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FuelResolver.prototype, "fuels", null);
__decorate([
    (0, type_graphql_1.Query)(returns => fuel_entity_1.Fuel),
    __param(0, (0, type_graphql_1.Arg)("_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FuelResolver.prototype, "fuel", null);
__decorate([
    (0, type_graphql_1.Mutation)(returns => fuel_entity_1.Fuel),
    __param(0, (0, type_graphql_1.Arg)("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [fuel_arguments_1.BaseFuelInput]),
    __metadata("design:returntype", Promise)
], FuelResolver.prototype, "createFuel", null);
__decorate([
    (0, type_graphql_1.Mutation)(returns => fuel_entity_1.Fuel),
    __param(0, (0, type_graphql_1.Arg)("_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FuelResolver.prototype, "deleteFuel", null);
__decorate([
    (0, type_graphql_1.Mutation)(returns => fuel_entity_1.Fuel),
    __param(0, (0, type_graphql_1.Arg)("_id")),
    __param(1, (0, type_graphql_1.Arg)("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, fuel_arguments_1.BaseFuelInput]),
    __metadata("design:returntype", Promise)
], FuelResolver.prototype, "editFuel", null);
FuelResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], FuelResolver);
exports.FuelResolver = FuelResolver;
