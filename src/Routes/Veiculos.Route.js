import { Router } from "express";
import { veiculosServices } from "../Services/veiculos.Services.js";

export const veiculosRouter = Router();

veiculosRouter.get("/", async (req, res) => {
    try {

        const veiculoId = req.params.id
        const veiculos = await veiculosServices.getall(veiculoId);
        res.json(veiculos);
    } catch (error) {
        console.error(error);
    }
});
veiculosRouter.post("/", async (req, res) => {
    try {
        const veiculos = await veiculosServices.create(req.body);
        res.status(201).json(veiculos);
    } catch (error) {
        console.error(error);
    }

});
veiculosRouter.delete("/:id", async (req, res) => {
    const veiculoId = req.params.id

    try {
        const veiculos = await veiculosServices.delete(veiculoId);
        res.status(201).json(veiculos);
    }
    catch (error) {
        console.error("erro ao deletar veiculo");
    }

});


veiculosRouter.put("/:id", async (req, res) => {

    try {
        const veiculoId = req.params.id

        const veiculos = await veiculosServices.updatePut(veiculoId, req.body);
        res.status(201).json(veiculos);

    }
    catch (error) {
        console.error("erro ao deletar veiculo");
    }
});

veiculosRouter.patch("/:id", async (req, res) => {

    try {
        const veiculoId = req.params.id

        const veiculos = await veiculosServices.updateKnex(veiculoId, req.body);
        res.status(201).json(veiculos);

    }
    catch (error) {
        console.error("erro ao deletar veiculo");
    }
});