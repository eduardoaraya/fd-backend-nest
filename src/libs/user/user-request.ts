import { Prisma } from "@prisma/client";

export interface UserRequestInterface {
  (data: {
    [k: string | keyof Prisma.UserCreateInput]: typeof k;
  }): Promise<Prisma.UserCreateInput>;
}

export const userRequest: UserRequestInterface = async (data) => {
  const { email, name } = data;
  if (!email || !name) {
    throw new Error("Bad Request!");
  }
  return { email, name };
};
