import { Resolver, Query, Mutation, Arg, Authorized } from "type-graphql";
import { Country, CountryModel } from "../../entities/Country-entity";
import { BaseCountryInput, EditCountryInput } from "./country-arguments";

@Resolver()
export class CountryResolver {

  @Query(returns => [Country])
  async countries():Promise<Country[]> {
    return await CountryModel.find({})
  }

  @Query(returns => Country)
  async country(@Arg("_id") _id: string):Promise<Country> {
    return await CountryModel.findById(_id);
  }

  @Mutation(returns => Country)
  async createCountry(@Arg("data") data: BaseCountryInput):Promise<Country> {
    const newCountry = new CountryModel(data);
    await newCountry.save();
    return newCountry;
  }

  @Mutation(returns => Country)
  async deleteCountry(@Arg("_id") _id: string):Promise<Country> {
    return await CountryModel.findByIdAndRemove(_id);
  }

  @Mutation(returns => Country)
  async editCountry(@Arg("_id") _id: string, @Arg("data") data: EditCountryInput):Promise<Country> {
    return await CountryModel.findByIdAndUpdate(_id, data, {new: true});
  }

}