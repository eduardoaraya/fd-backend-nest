import { Prisma, User } from "@prisma/client";
import dbConnection from "@db/db-client";
import { RepositoryInterface } from "@libs/core/contracts/repository-interface";

export function userRepository(): RepositoryInterface<User> {
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
