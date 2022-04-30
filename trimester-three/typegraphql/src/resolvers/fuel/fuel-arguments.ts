import { Field, InputType } from "type-graphql";
import { ObjectId } from "mongodb";

@InputType()
export class BaseFuelInput {
  @Field()
  name: string;

  @Field()
  description: string;
}

@InputType()
export class FuelInput extends BaseFuelInput {
  @Field()
  _id: ObjectId;
}