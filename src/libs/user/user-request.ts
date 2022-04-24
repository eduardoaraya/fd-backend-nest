import { Prisma } from "@prisma/client";

export interface UserRequestInterface {
  (data: {
    [k: string | keyof Prisma.UserCreateInput]: typeof k;
  }): Promise<Prisma.UserCreateInput>;
}

export const userRequest: UserRequestInterface = async ({ email, name }) => {
  return { email, name };
};
