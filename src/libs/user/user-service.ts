import { Prisma, User } from "@prisma/client";
import { RepositoryInterface } from "@libs/core/contracts/repository-interface";

export interface UserServiceInterface {
  repository: RepositoryInterface<User>;
  create: (data: Prisma.UserCreateInput) => void;
}

export function userService(
  repository: RepositoryInterface<User>
): UserServiceInterface {
  async function create(data: Prisma.UserCreateInput) {
    return repository.create({
      data,
    });
  }

  return { repository, create };
}
