import type { User } from "@prisma/client";
import { RepositoryInterface } from "@libs/core/contracts/repository-interface";

export function userService(repository: RepositoryInterface<User>) {
  return { repository };
}
