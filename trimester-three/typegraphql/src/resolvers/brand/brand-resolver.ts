import { Resolver, Query, Mutation, Arg, Authorized } from "type-graphql";
import { Brand, BrandModel } from "../../entities/brand-entity";
import { BaseBrandInput } from "./brand-arguments";

@Resolver()
export class BrandResolver {

  @Query(returns => [Brand])
  async brands():Promise<Brand[]> {
    return await BrandModel.find({})
  }

  @Query(returns => Brand)
  async brand(@Arg("_id") _id: string):Promise<Brand> {
    return await BrandModel.findById(_id);
  }

  @Mutation(returns => Brand)
  async createBrand(@Arg("data") data: BaseBrandInput):Promise<Brand> {
    const newBrand = new BrandModel(data);
    await newBrand.save();
    return newBrand;
  }

  @Mutation(returns => Brand)
  async deleteBrand(@Arg("_id") _id: string):Promise<Brand> {
    return await BrandModel.findByIdAndRemove(_id);
  }

  @Mutation(returns => Brand)
  async editBrand(@Arg("_id") _id: string, @Arg("data") data: BaseBrandInput):Promise<Brand> {
    return await BrandModel.findByIdAndUpdate(_id, data, {new: true});
  }

}