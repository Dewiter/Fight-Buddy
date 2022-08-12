import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type user = {
  email: string;
  password: string;
};

const createUser = async (payload: user) => {
  const user = await prisma.user.createUser({
    email: payload.email,
    password: payload.password,
  });

  return "200";
};

export default createUser;
