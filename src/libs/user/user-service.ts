import { Prisma } from "@prisma/client";
import { UserRepositoryInterface } from "./user-repository";

export interface UserServiceInterface {
  repository: UserRepositoryInterface;
  create: (data: Prisma.UserCreateInput) => void;
}

export function userService(
  repository: UserRepositoryInterface
): UserServiceInterface {
  async function create(data: Prisma.UserCreateInput) {
    return repository.create({
      data,
    });
  }
  return { repository, create };
}
