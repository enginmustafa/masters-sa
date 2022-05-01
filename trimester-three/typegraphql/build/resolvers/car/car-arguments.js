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
exports.EditCarInput = exports.CarInput = void 0;
const class_validator_1 = require("class-validator");
const type_graphql_1 = require("type-graphql");
const brand_arguments_1 = require("../brand/brand-arguments");
const country_arguments_1 = require("../country/country-arguments");
const fuel_arguments_1 = require("../fuel/fuel-arguments");
let CarInput = class CarInput {
};
__decorate([
    (0, type_graphql_1.Field)(type => brand_arguments_1.BrandInput),
    __metadata("design:type", brand_arguments_1.BrandInput)
], CarInput.prototype, "brand", void 0);
__decorate([
    (0, type_graphql_1.Field)(type => fuel_arguments_1.FuelInput),
    __metadata("design:type", fuel_arguments_1.FuelInput)
], CarInput.prototype, "fuel", void 0);
__decorate([
    (0, type_graphql_1.Field)(type => country_arguments_1.CountryInput),
    __metadata("design:type", country_arguments_1.CountryInput)
], CarInput.prototype, "countryOfOrigin", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, class_validator_1.MinLength)(6),
    (0, class_validator_1.MaxLength)(200),
    __metadata("design:type", String)
], CarInput.prototype, "model", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, class_validator_1.Min)(1886),
    (0, class_validator_1.Max)(2022),
    __metadata("design:type", Number)
], CarInput.prototype, "releaseYear", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], CarInput.prototype, "horsePower", void 0);
CarInput = __decorate([
    (0, type_graphql_1.InputType)()
], CarInput);
exports.CarInput = CarInput;
let EditCarInput = class EditCarInput {
};
__decorate([
    (0, type_graphql_1.Field)(type => brand_arguments_1.BrandInput, { nullable: true }),
    __metadata("design:type", brand_arguments_1.BrandInput)
], EditCarInput.prototype, "brand", void 0);
__decorate([
    (0, type_graphql_1.Field)(type => fuel_arguments_1.FuelInput, { nullable: true }),
    __metadata("design:type", fuel_arguments_1.FuelInput)
], EditCarInput.prototype, "fuel", void 0);
__decorate([
    (0, type_graphql_1.Field)(type => country_arguments_1.CountryInput, { nullable: true }),
    __metadata("design:type", country_arguments_1.CountryInput)
], EditCarInput.prototype, "countryOfOrigin", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.MinLength)(3),
    (0, class_validator_1.MaxLength)(200),
    __metadata("design:type", String)
], EditCarInput.prototype, "model", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.Min)(1886),
    (0, class_validator_1.Max)(2022),
    __metadata("design:type", Number)
], EditCarInput.prototype, "releaseYear", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], EditCarInput.prototype, "horsePower", void 0);
EditCarInput = __decorate([
    (0, type_graphql_1.InputType)()
], EditCarInput);
exports.EditCarInput = EditCarInput;
