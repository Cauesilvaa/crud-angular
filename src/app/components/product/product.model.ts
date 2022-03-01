export interface Product {
    id?: number, //'?' no id pq quando for criar um obj de produto se vc quiser passar o id ele é opcional
    name?: string,
    price?: number,
    
    //atributos para testar com a api sequelize
    nome?: string,
    senha?: string,
    cpf?: number
}