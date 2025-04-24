import { FilmeModel } from "../models/filmeModel";


// poderia importar o filme model como java private repository: FilmeRepository = new FilmeRepository(); dos dois jeitos testados e funcional
const filmemodel = FilmeModel;

// poderia ser uma classe tambem export class FilmeService{metodos} igual java
export const FilmeService = {
  async create(data: {
    titulo: string;
    genero: string;
    duracao: number;
    data_lancamento: Date;
  }) {
    return await filmemodel.create(data);
  },

  async delete(id: string) {
    const filme = await filmemodel.findbyId(id);
    if (filme !== null) {
      return await filmemodel.delete(id);
    } else {
    }
  },

  async findbyId(id: string) {
    return await filmemodel.findbyId(id);
  },

  async update(
    id: string,
    dados: {
      titulo?: string; //update em qualquer dado ?
      genero?: string;
      duracao?: number;
      data_lancamento?: Date;
    }
  ) {
    return await filmemodel.update(id, dados);
  },

  async findAll() {
    return await filmemodel.findAll();
  },

  async findbyTitulo(titulo: string) {
    return await filmemodel.findbyTitulo(titulo);
  },
};
