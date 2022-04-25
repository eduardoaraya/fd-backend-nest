import { Prisma } from "@prisma/client";
import { WalletRepositoryInterface } from "./wallet-repository";

export interface WalletServiceInterface {
  repository: WalletRepositoryInterface;
  create: (data: Prisma.WalletCreateInput) => void;
}

export function walletService(
  repository: WalletRepositoryInterface
): WalletServiceInterface {
  async function create(data: Prisma.WalletCreateInput) {
    return repository.create({
      data,
    });
  }
  return { repository, create };
}
