import { number, string, z } from "zod";

export const createFilmeSchema = z.object({
  title: string().nonempty({ message: "Campo Obrigatorio!" }),
  genero: string().nonempty({ message: "Campo Obrigatorio!" }),
  duracao: number(),
  data_lancamento: string().datetime(),
});
