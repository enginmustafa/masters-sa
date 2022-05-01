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
exports.AuthResolver = void 0;
const type_graphql_1 = require("type-graphql");
const login_arguments_1 = require("./login-arguments");
const apollo_server_core_1 = require("apollo-server-core");
const token_1 = require("./token");
const user_entity_1 = require("./user-entity");
let AuthResolver = class AuthResolver {
    async currentUser(ctx) {
        console.log(ctx);
        if (!ctx.user) {
            throw new apollo_server_core_1.AuthenticationError('user_not_authenticated');
        }
        let user = new user_entity_1.User();
        user.email = ctx.user.email;
        return user;
    }
    async login({ email, password }) {
        if (email !== "admin@gmail.com" || password !== "admin")
            throw new apollo_server_core_1.UserInputError('Wrong credentials.');
        return (0, token_1.getToken)(email);
    }
};
__decorate([
    (0, type_graphql_1.Query)(returns => user_entity_1.User),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "currentUser", null);
__decorate([
    (0, type_graphql_1.Mutation)(returns => String),
    __param(0, (0, type_graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_arguments_1.LoginArguments]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "login", null);
AuthResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], AuthResolver);
exports.AuthResolver = AuthResolver;
