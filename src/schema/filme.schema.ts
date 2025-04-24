import { number, string, z } from "zod";

// zod biblioteca para validar dados
export const createFilmeSchema = z.object({
  titulo: string().nonempty({ message: "Campo Obrigatorio!" }),
  genero: string().nonempty({ message: "Campo Obrigatorio!" }),
  duracao: number(),
  data_lancamento: string().datetime(),
});
