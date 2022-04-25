import { Prisma, User } from "@prisma/client";
import dbConnection from "@db/db-client";
import { RepositoryInterface } from "@libs/core/contracts/repository-interface";

export interface UserRepositoryInterface extends RepositoryInterface<User> {}

export function userRepository(): UserRepositoryInterface {
  async function create(data: Prisma.UserCreateArgs) {
    return dbConnection.user.create(data);
  }
  async function list() {
    return dbConnection.user.findMany();
  }

  return {
    create,
    list,
  };
}
