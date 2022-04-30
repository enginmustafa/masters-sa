import { Resolver, Query, Mutation, Arg, Authorized } from "type-graphql";
import { Car, CarModel } from "../../entities/Car-entity";
import { CarInput, EditCarInput } from "./car-arguments";

@Resolver()
export class CarResolver {

  @Query(returns => [Car])
  async cars():Promise<Car[]> {
    return await CarModel.find({})
  }

  @Query(returns => Car)
  async car(@Arg("_id") _id: string):Promise<Car> {
    return await CarModel.findById(_id);
  }

  @Authorized()
  @Mutation(returns => Car)
  async createCar(@Arg("data") data: CarInput):Promise<Car> {
    const newCar = new CarModel(data);
    await newCar.save();
    return newCar;
  }

  @Authorized()
  @Mutation(returns => Car)
  async deleteCar(@Arg("_id") _id: string):Promise<Car> {
    return await CarModel.findByIdAndRemove(_id);
  }

  @Authorized()
  @Mutation(returns => Car)
  async editCar(@Arg("_id") _id: string, @Arg("data") data: EditCarInput):Promise<Car> {
    return await CarModel.findByIdAndUpdate(_id, data, {new: true});
  }

}