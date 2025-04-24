import { number, string, z } from "zod";

// zod biblioteca para validar dados
export const createFilmeSchema = z.object({
  titulo: string().nonempty({ message: "Campo Obrigatorio!" }),
  genero: string().nonempty({ message: "Campo Obrigatorio!" }),
  duracao: number(),

  //regex para usuario passar a data sem horas
  data_lancamento: string().regex(/^\d{4}-\d{2}-\d{2}$/, {
    message: "Data deve estar no formato YYYY-MM-DD",
  }),
});

export const updateFilmeSchema = z.object({
  titulo: string().optional(),
  genero: string().optional(),  //optional para passar qualquer dado
  duracao: number().optional(),

  //regex para usuario passar a data sem horas
  data_lancamento: string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, {
      message: "Data deve estar no formato YYYY-MM-DD",
    })
    .optional(),
});
