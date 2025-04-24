import prismaClient from "../prisma/prismaclient";

 // poderia usar FilmeModel como class , mais parecido com java, e oop , export class filmeModel{}
export const FilmeModel = {
  async create(data: {
    titulo: string;
    genero: string;
    duracao: number;
    data_lancamento: Date;
  }) {
    const dt = await prismaClient.filme.create({ data });
    return dt;
  },
  async delete(id: string) {
    return await prismaClient.filme.delete({
      where: {
        id,
      },
    });
  },
  async update(
    id: string,
    dados: {
      titulo?: string;
      genero?: string;
      duracao?: number;
      data_lancamento?: Date;
    }
  ) {
    return await prismaClient.filme.update({
      where: {
        id,
      },
      data: {
        data_lancamento: dados?.data_lancamento,
        genero: dados?.genero,
        titulo: dados?.titulo,
        duracao: dados?.duracao,
      },
    });
  },
  async findbyId(id: string) {
    return await prismaClient.filme.findFirst({
      where: {
        id,
      },
    });
  },
  async findAll() {
    return await prismaClient.filme.findMany();
  },

  async findbyTitulo(title: string) {
    return await prismaClient.filme.findMany({
      where: {
        titulo: {
          contains: title,
        },
      },
    });
  },
};
