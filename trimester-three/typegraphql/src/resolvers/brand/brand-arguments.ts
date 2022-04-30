import { Field, InputType } from "type-graphql";
import { ObjectId } from "mongodb";

@InputType()
export class BaseBrandInput {
  @Field()
  name: string;

  @Field()
  description: string;
}

@InputType()
export class BrandInput extends BaseBrandInput {
  @Field()
  _id: ObjectId;
}