import { Category, Prisma } from "@prisma/client";
import dbConnection from "@db/db-client";
import { RepositoryInterface } from "@libs/core/contracts/repository-interface";

export interface CategoryRepositoryInterface
  extends RepositoryInterface<Category> {}

export function categoryRepository(): CategoryRepositoryInterface {
  async function create(data: Prisma.CategoryCreateArgs) {
    return dbConnection.category.create(data);
  }
  async function list() {
    return dbConnection.category.findMany();
  }

  return {
    create,
    list,
  };
}
