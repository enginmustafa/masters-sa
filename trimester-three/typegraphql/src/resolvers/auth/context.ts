import { Request } from "express";
import { User } from "./user-entity";

export interface Context {
    req: Request,
    user: User,
    ip: any,
    location: any,
    md: any,
}