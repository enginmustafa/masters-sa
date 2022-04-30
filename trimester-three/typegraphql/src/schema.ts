import { buildSchema } from "type-graphql";
import { TypegooseMiddleware } from "./typegoose-middleware";
import { ObjectId } from "mongodb";
import { ObjectIdScalar } from "./object-id.scalar";

import * as path from "path"
import { BrandResolver } from "./resolvers/brand/brand-resolver";
import { FuelResolver } from "./resolvers/fuel/fuel-resolver";
import { CarResolver } from "./resolvers/car/car-resolver";
import { CountryResolver } from "./resolvers/country/country-resolver";
import { AuthResolver } from "./resolvers/auth/auth-resolver";
import { authChecker } from "./resolvers/auth/auth-checker";

export const getSchema = async () => {
    const schema = await buildSchema({
        resolvers: [
            AuthResolver,
            BrandResolver,
            FuelResolver,
            CountryResolver,
            CarResolver            
        ],
        emitSchemaFile: path.resolve(__dirname, "schema.gql"),
        // use document converting middleware
        globalMiddlewares: [TypegooseMiddleware],
        // use ObjectId scalar mapping
        scalarsMap: [{ type: ObjectId, scalar: ObjectIdScalar }],
        authChecker
      });
    return schema
}

