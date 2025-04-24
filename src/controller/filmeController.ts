import { Request, Response } from "express";
import { createFilmeSchema } from "../schema/filme.schema";
import { FilmeService } from "../service/filmeService";
import { Filme } from "../../generated/prisma";

const filmeService = FilmeService;
export const FilmeController = {
  async create(req: Request, res: Response) {
    try {
      const data = createFilmeSchema.parse(req.body);

      const newFilme = await filmeService.create({
        data_lancamento: new Date(data.data_lancamento),
        titulo: data.titulo,
        genero: data.genero,
        duracao: data.duracao,
      });

      res.status(201).json(newFilme);
    } catch (error: any) {
      console.log(error);
      res.status(400).json({ message: error.message });
    }
  },
  async delete(req: Request, res: Response) {
    try {
      const deleteFilme = await filmeService.delete(req.params.id);
      res.status(200).json(deleteFilme);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  },
  async findAll(req: Request, res: Response) {
    try {
      const findFilme: Filme[] = await filmeService.findAll();
      res.status(200).json(findFilme);
    } catch (error: any) {
      res.status(404).json({ message: error.message });
    }
  },

  async findbyId(req: Request, res: Response) {
    try {
      const findFilme = await filmeService.findbyId(req.params.id);
      res.status(200).json(findFilme);
    } catch (error: any) {
      res.status(404).json({ message: error.message });
    }
  },
};
