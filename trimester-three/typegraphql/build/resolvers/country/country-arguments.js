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
exports.EditCountryInput = exports.CountryInput = exports.BaseCountryInput = void 0;
const type_graphql_1 = require("type-graphql");
const mongodb_1 = require("mongodb");
let BaseCountryInput = class BaseCountryInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], BaseCountryInput.prototype, "name", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], BaseCountryInput.prototype, "capital", void 0);
BaseCountryInput = __decorate([
    (0, type_graphql_1.InputType)()
], BaseCountryInput);
exports.BaseCountryInput = BaseCountryInput;
let CountryInput = class CountryInput extends BaseCountryInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", mongodb_1.ObjectId)
], CountryInput.prototype, "_id", void 0);
CountryInput = __decorate([
    (0, type_graphql_1.InputType)()
], CountryInput);
exports.CountryInput = CountryInput;
let EditCountryInput = class EditCountryInput {
};
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], EditCountryInput.prototype, "name", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], EditCountryInput.prototype, "capital", void 0);
EditCountryInput = __decorate([
    (0, type_graphql_1.InputType)()
], EditCountryInput);
exports.EditCountryInput = EditCountryInput;
