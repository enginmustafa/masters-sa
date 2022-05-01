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
exports.CarResolver = void 0;
const type_graphql_1 = require("type-graphql");
const Car_entity_1 = require("../../entities/Car-entity");
const car_arguments_1 = require("./car-arguments");
let CarResolver = class CarResolver {
    async cars() {
        return await Car_entity_1.CarModel.find({});
    }
    async car(_id) {
        return await Car_entity_1.CarModel.findById(_id);
    }
    async createCar(data) {
        const newCar = new Car_entity_1.CarModel(data);
        await newCar.save();
        return newCar;
    }
    async deleteCar(_id) {
        return await Car_entity_1.CarModel.findByIdAndRemove(_id);
    }
    async editCar(_id, data) {
        return await Car_entity_1.CarModel.findByIdAndUpdate(_id, data, { new: true });
    }
};
__decorate([
    (0, type_graphql_1.Query)(returns => [Car_entity_1.Car]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CarResolver.prototype, "cars", null);
__decorate([
    (0, type_graphql_1.Query)(returns => Car_entity_1.Car),
    __param(0, (0, type_graphql_1.Arg)("_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CarResolver.prototype, "car", null);
__decorate([
    (0, type_graphql_1.Authorized)(),
    (0, type_graphql_1.Mutation)(returns => Car_entity_1.Car),
    __param(0, (0, type_graphql_1.Arg)("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [car_arguments_1.CarInput]),
    __metadata("design:returntype", Promise)
], CarResolver.prototype, "createCar", null);
__decorate([
    (0, type_graphql_1.Authorized)(),
    (0, type_graphql_1.Mutation)(returns => Car_entity_1.Car),
    __param(0, (0, type_graphql_1.Arg)("_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CarResolver.prototype, "deleteCar", null);
__decorate([
    (0, type_graphql_1.Authorized)(),
    (0, type_graphql_1.Mutation)(returns => Car_entity_1.Car),
    __param(0, (0, type_graphql_1.Arg)("_id")),
    __param(1, (0, type_graphql_1.Arg)("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, car_arguments_1.EditCarInput]),
    __metadata("design:returntype", Promise)
], CarResolver.prototype, "editCar", null);
CarResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], CarResolver);
exports.CarResolver = CarResolver;
