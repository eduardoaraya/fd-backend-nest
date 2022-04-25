import { Prisma } from "@prisma/client";

export interface WalletRequestInterface {
  (data: Prisma.WalletCreateInput): Promise<Prisma.WalletCreateInput>;
}

export const walletRequest: WalletRequestInterface = async ({ name, user }) => {
  return { name, user };
};
