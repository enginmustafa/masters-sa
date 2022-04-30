import { MaxLength, MinLength, Min, Max } from "class-validator";
import { Field, InputType } from "type-graphql";
import { BrandInput } from "../brand/brand-arguments";
import { CountryInput } from "../country/country-arguments";
import { FuelInput } from "../fuel/fuel-arguments";

@InputType()
export class CarInput {
  @Field(type => BrandInput)
  brand: BrandInput

  @Field(type => FuelInput)
  fuel: FuelInput;

  @Field(type => CountryInput)
  countryOfOrigin: CountryInput;

  @Field()
  @MinLength(6)
  @MaxLength(200)
  model: string;

  @Field()
  @Min(1886)
  @Max(2022)
  releaseYear: number;

  @Field()
  @Min(1)
  horsePower: number;
}

@InputType()
export class EditCarInput {
  @Field(type => BrandInput, {nullable: true})
  brand?: BrandInput

  @Field(type => FuelInput, {nullable: true})
  fuel?: FuelInput;

  @Field(type => CountryInput, {nullable: true})
  countryOfOrigin?: CountryInput;

  @Field({nullable: true})
  @MinLength(3)
  @MaxLength(200)
  model?: string;

  @Field({nullable: true})
  @Min(1886)
  @Max(2022)
  releaseYear?: number;

  @Field({nullable: true})
  @Min(1)
  horsePower?: number;
}