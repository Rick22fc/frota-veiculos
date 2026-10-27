import { veiculosServices } from "../Services/veiculos.Services.js";

class VeiculosController{

 async getALL(req, res) {
    try {

        const veiculos = await veiculosServices.getall();
        res.json(veiculos);
    } catch (error) {
        console.error(error);
    }
};
async getByID(){
try {

        const veiculoId = req.params.id
        const veiculos = await veiculosServices.getall(veiculoId);
        res.json(veiculos);
    } catch (error) {
        console.error(error);
    }
};
 async create(req, res) {
    try {
        const veiculos = await veiculosServices.create(req.body);
        res.status(201).json(veiculos);
    } catch (error) {
        console.error(error);
    }

};
async delete(req, res)  {
    const veiculoId = req.params.id

    try {
        const veiculos = await veiculosServices.delete(veiculoId);
        res.status(201).json(veiculos);
    }
    catch (error) {
        console.error("erro ao deletar veiculo");
    }

};


 async put (req, res)  {

    try {
        const veiculoId = req.params.id

        const veiculos = await veiculosServices.updatePut(veiculoId, req.body);
        res.status(201).json(veiculos);

    }
    catch (error) {
        console.error("erro ao atualizar veiculo");
    }
};

 async patch(req, res)  {

    try {
        const veiculoId = req.params.id

        const veiculos = await veiculosServices.updateKnex(veiculoId, req.body);
        res.status(201).json(veiculos);
    }
    catch (error) {
        console.error("erro ao atualizar veiculo");
    }
};

}

export const veiculosController = new VeiculosController();