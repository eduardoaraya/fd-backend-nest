import { Prisma, RecursionType } from "@prisma/client";

export interface ReleaseRequestInterface {
  (data: Prisma.ReleaseCreateInput): Promise<Prisma.ReleaseCreateInput>;
}

export const releaseRequest: ReleaseRequestInterface = async ({
  categoryId,
  description,
  value,
}) => {
  return {
    categoryId,
    description,
    value,
    recursionDate: new Date(),
    isRecursion: true,
    recursionType: RecursionType.MONTH,
  };
};
