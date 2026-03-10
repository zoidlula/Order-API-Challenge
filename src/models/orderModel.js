// importa a conexão com o banco
const mongoose = require("../database/connection")

// schema dos itens do pedido
// representa cada produto dentro do pedido
const ItemSchema = new mongoose.Schema({

 // ID do produto
 productId: Number,

 // quantidade do produto
 quantity: Number,

 // preço do produto
 price: Number

})

// schema principal do pedido
const OrderSchema = new mongoose.Schema({

 // ID do pedido
 orderId: String,

 // valor total do pedido
 value: Number,

 // data da criação do pedido
 creationDate: Date,

 // lista dos itens do pedido
 items: [ItemSchema]

})

// exporta o modelo Order para usar no controller
module.exports = mongoose.model("Order", OrderSchema)