import { veiculosRepositore } from "../repositories/repositore.js";


class VeiculosService{
    async getall() {
        const veiculos = await veiculosRepositore.getall()
        return veiculos
    }
    async getByID(id) {
            const veiculos = await veiculosRepositore.getByID(id)
            return veiculos
        }


    async create(data) {
        const veiculos = await veiculosRepositore.create(data)
        return veiculos
    }
     async delete(id) {
        const veiculos = await veiculosRepositore.delete (id)
        return veiculos
    }
     async updatePut(id, data) {
        const veiculos = await veiculosRepositore.updatePut(id,data)
        return veiculos 
    }

    //  async updatePatch(id, campos) {
    //     const keys = object.keys(campos)
    //     if(keys.length === 0){
    //         throw new Error("É necessário informar um campo ser atualizado")

    //     }
    //     const queryDinamica = keys.map((key, index)=>{
    //         `${key} = $${index + 1} `
    //     }).join(", ")
    //     const valores = object.valores(campos)
    //     valores.push(id)

    //     const query = `UPDATE veiculos SET ${queryDinamica} WHERE id = $${valores.length} RETURNING *`

    //     const res = pool.query(query, valores)

    //     return {
    //         message:"Veiculo atualizado com sucesso",
    //         veiculo: res.rows[0]
    //     }

    // }
async updateKnex(id,dados){
    const veiculoAtualizado = await veiculosRepositore.updateKnex(id,dados)
    return veiculoAtualizado
}

}

export const veiculosServices = new VeiculosService()