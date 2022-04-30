import { Resolver, Query, Mutation, Arg, Authorized } from "type-graphql";
import { Fuel, FuelModel } from "../../entities/fuel-entity";
import { BaseFuelInput } from "./fuel-arguments";

@Resolver()
export class FuelResolver {

  @Query(returns => [Fuel])
  async fuels():Promise<Fuel[]> {
    return await FuelModel.find({})
  }

  @Query(returns => Fuel)
  async fuel(@Arg("_id") _id: string):Promise<Fuel> {
    return await FuelModel.findById(_id);
  }

  @Mutation(returns => Fuel)
  async createFuel(@Arg("data") data: BaseFuelInput):Promise<Fuel> {
    const newFuel = new FuelModel(data);
    await newFuel.save();
    return newFuel;
  }

  @Mutation(returns => Fuel)
  async deleteFuel(@Arg("_id") _id: string):Promise<Fuel> {
    return await FuelModel.findByIdAndRemove(_id);
  }

  @Mutation(returns => Fuel)
  async editFuel(@Arg("_id") _id: string, @Arg("data") data: BaseFuelInput):Promise<Fuel> {
    return await FuelModel.findByIdAndUpdate(_id, data, {new: true});
  }

}