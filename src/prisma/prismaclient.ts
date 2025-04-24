import { PrismaClient } from "../../generated/prisma";

const prismaClient = new PrismaClient();

export default prismaClient;
  // classe prisma para chamadas, caso aja mais de um model para reutilizar