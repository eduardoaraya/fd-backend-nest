import { Prisma, Release } from "@prisma/client";
import dbConnection from "@db/db-client";
import { RepositoryInterface } from "@libs/core/contracts/repository-interface";

export interface ReleaseRepositoryInterface
  extends RepositoryInterface<Release> {}

export function releaseRepository(): ReleaseRepositoryInterface {
  async function create(data: Prisma.ReleaseCreateArgs) {
    return dbConnection.release.create(data);
  }
  async function list() {
    return dbConnection.release.findMany();
  }

  return {
    create,
    list,
  };
}
