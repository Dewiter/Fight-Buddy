import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export type user = {
  email: string;
  password: string;
};

const createUser = async (payload: user) => {
  const user = await prisma.user.create({
    data : payload
  });

  return 200;
};

export default createUser;
