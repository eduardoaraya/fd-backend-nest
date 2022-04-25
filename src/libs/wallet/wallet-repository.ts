import { Prisma, Wallet } from "@prisma/client";
import dbConnection from "@db/db-client";
import { RepositoryInterface } from "@libs/core/contracts/repository-interface";

export interface WalletRepositoryInterface
  extends RepositoryInterface<Wallet> {}

export function walletRepository(): WalletRepositoryInterface {
  async function create(data: Prisma.WalletCreateArgs) {
    return dbConnection.wallet.create(data);
  }
  async function list() {
    return dbConnection.wallet.findMany();
  }

  return {
    create,
    list,
  };
}
