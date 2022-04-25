import { Prisma } from "@prisma/client";
import { CategoryRepositoryInterface } from "./category-repository";

export interface CategoryServiceInterface {
  repository: CategoryRepositoryInterface;
  create: (data: Prisma.CategoryCreateInput) => void;
}

export function categoryService(
  repository: CategoryRepositoryInterface
): CategoryServiceInterface {
  async function create(data: Prisma.CategoryCreateInput) {
    return repository.create({
      data,
    });
  }
  return { repository, create };
}
