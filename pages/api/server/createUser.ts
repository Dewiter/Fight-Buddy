import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

export type user = {
  email: string;
  password: string;
};

export const createUser = async (payload: user) => {
  const user = await prisma.user.create({
    data: payload
  });
  console.log(payload)

  return 200;
};


