import { Router } from "express";
import { FilmeController } from "../controller/filmeController";

const router = Router();
const filmeController = FilmeController;

//rota de criacao de filme , bind para nao perder a instancia do filmecontroller, e nao retornar, caso aja this, metodo java filmeController.create.bind(filmeController));
router.post("/filme", filmeController.create);

//rota de deletar filme por id
router.delete("/filme/:id", filmeController.delete);

// rota de buscar todos filmes
router.get("/filme", filmeController.findAll);

//rota de buscar filme por id
router.get("/filme/:id", filmeController.findbyId);

//rota de editar filme pelo id
router.put("/filme/:id", filmeController.update);

//rota de buscar filme pelo titulo
//pensar em uma alterntiva melhor
router.get("/filme/titulo/:titulo", filmeController.findbyTitulo);
export default router;
