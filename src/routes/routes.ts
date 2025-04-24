import { Router } from "express";
import { FilmeController } from "../controller/filmeController";

const router = Router();
const filmeController = FilmeController;
router.post("/filme", filmeController.create.bind(filmeController));

export default router;
