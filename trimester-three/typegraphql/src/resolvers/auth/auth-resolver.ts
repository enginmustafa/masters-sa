import { Resolver, Query, Mutation, Args, Ctx } from "type-graphql";
import bcryptjs from "bcryptjs"
import { LoginArguments } from "./login-arguments";
import { UserInputError, AuthenticationError } from "apollo-server-core";
import { getToken } from "./token";
import { Context } from "./context";
import { User } from "./user-entity";

@Resolver()
export class AuthResolver {

  @Query(returns => User)
  async currentUser(@Ctx() ctx: Context):Promise<User> {
    console.log(ctx)
    if(!ctx.user) {
        throw new AuthenticationError('user_not_authenticated');
    }
    let user = new User();
    user.email = ctx.user.email;

    return user;
  }

  @Mutation(returns => String)
  async login(@Args(){email, password}: LoginArguments) {
    
    if(email !== "admin@gmail.com" || password !== "admin")
        throw new UserInputError('Wrong credentials.')

    return getToken(email);
  }

}