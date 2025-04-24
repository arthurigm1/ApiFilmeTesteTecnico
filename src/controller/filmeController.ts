import { Request, Response } from "express";
import { createFilmeSchema } from "../schema/filme.schema";
import { FilmeService } from "../service/filmeService";

const filmeService = FilmeService;
export const FilmeController = {
  async create(req: Request, res: Response) {
    try {
      const data = createFilmeSchema.parse(req.body);

      const newFilme = await filmeService.create({
        data_lancamento: new Date(data.data_lancamento),
        titulo: data.title,
        genero: data.genero,
        duracao: data.duracao,
      });

      res.status(201).json(newFilme);
    } catch (error: any) {
      console.log(error);
      res.status(400).json({ message: error.message });
    }
  },
};
