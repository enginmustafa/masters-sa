import { Prop } from "@typegoose/typegoose";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class User {
    @Prop()
    @Field()
    email: string
}