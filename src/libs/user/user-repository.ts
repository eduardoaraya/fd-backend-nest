import { Prisma, User } from "@prisma/client";
import dbConnection from "@db/db-client";
import { RepositoryInterface } from "@libs/core/contracts/repository-interface";

export interface UserRepositoryInterface extends RepositoryInterface<User> {
  getByEmail(email: string): Promise<User | null>;
}

export function userRepository(): UserRepositoryInterface {
  async function create(data: Prisma.UserCreateArgs) {
    return dbConnection.user.create(data);
  }
  async function list() {
    return dbConnection.user.findMany();
  }

  async function getByEmail(email: string) {
    return dbConnection.user.findFirst({
      where: {
        email,
      },
    });
  }

  return {
    create,
    list,
    getByEmail,
  };
}
