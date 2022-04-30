import { Field, InputType } from "type-graphql";
import { ObjectId } from "mongodb";

@InputType()
export class BaseCountryInput {
  @Field()
  name: string;

  @Field()
  capital: string;
}

@InputType()
export class CountryInput extends BaseCountryInput {
  @Field()
  _id: ObjectId;
}

@InputType()
export class EditCountryInput {
  @Field({nullable: true})
  name?: string;

  @Field({nullable: true})
  capital?: string;
}