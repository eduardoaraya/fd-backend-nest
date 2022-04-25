import { Prisma, ReleaseType } from "@prisma/client";
import { ReleaseRepositoryInterface } from "./release-repository";

export interface ReleaseServiceInterface {
  repository: ReleaseRepositoryInterface;
  createOutput: (data: Prisma.ReleaseCreateInput) => void;
  createInput: (data: Prisma.ReleaseCreateInput) => void;
  create: (data: Prisma.ReleaseCreateInput) => void;
}

export function releaseService(
  repository: ReleaseRepositoryInterface
): ReleaseServiceInterface {
  async function create(data: Prisma.ReleaseCreateInput) {
    return repository.create({
      data,
    });
  }
  async function createOutput(data: Prisma.ReleaseCreateInput) {
    return repository.create({
      data: {
        ...data,
        type: ReleaseType.OUTPUT,
      },
    });
  }
  async function createInput(data: Prisma.ReleaseCreateInput) {
    return repository.create({
      data: {
        ...data,
        type: ReleaseType.INPUT,
      },
    });
  }
  return { repository, create, createOutput, createInput };
}
