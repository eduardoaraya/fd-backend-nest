import { Prisma } from "@prisma/client";

export interface CategoryRequestInterface {
  (data: Prisma.CategoryCreateInput): Promise<Prisma.CategoryCreateInput>;
}

export const categoryRequest: CategoryRequestInterface = async ({ name }) => {
  return { name };
};
