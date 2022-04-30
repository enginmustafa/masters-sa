import { ObjectType, InputType, Field } from "type-graphql";
import { prop as Prop, getModelForClass } from "@typegoose/typegoose"
import { ObjectId } from "mongodb"
import { Brand } from "./brand-entity";
import { Fuel } from "./fuel-entity";
import { Country } from "./Country-entity";

@ObjectType()
export class Car {

  @Field()
  readonly _id: ObjectId;

  @Field(type => Brand)
  @Prop({require: true})
  brand: Brand

  @Field(type => Fuel)
  @Prop({require: true})
  fuel: Fuel
  
  @Field(type => Country)
  @Prop({require: true})
  countryOfOrigin: Country

  @Prop({required: true})
  @Field()
  model: string;

  @Prop({required: true})
  @Field()
  releaseYear: number;

  @Prop({required: true})
  @Field()
  horsePower: number;
}

export const CarModel = getModelForClass(Car, { schemaOptions:  {}})