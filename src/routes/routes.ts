import { Router } from "express";
import { FilmeController } from "../controller/filmeController";

const router = Router();
const filmeController = FilmeController;

//rota de criacao de filme , bind para nao perder a instancia do filmecontroller, e nao retornar, caso aja this, metodo java filmeController.create.bind(filmeController));
router.post("/filme", filmeController.create);

export default router;
