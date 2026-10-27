import { Router } from "express";
import { veiculosController } from '../controller/controller.js'

export const veiculosRouter = Router();

veiculosRouter.get("/", veiculosController.getALL);
veiculosRouter.post("/", veiculosController.create);
veiculosRouter.delete("/:id", veiculosController.delete);
veiculosRouter.put("/:id", veiculosController.put);
veiculosRouter.patch("/:id", veiculosController.patch);