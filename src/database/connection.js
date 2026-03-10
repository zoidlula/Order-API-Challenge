// importa a biblioteca mongoose, que vai gerenciar a conexão com o MongoDB
const mongoose = require("mongoose")

// realiza a conexão com o banco de dados MongoDB local
mongoose.connect("mongodb://localhost:27017/orderdb")

// mostra mensagem no console caso a conexão seja realizada com sucesso
mongoose.connection.on("connected", ()=>{
 console.log("Conectado ao MongoDB")
})

// mostra mensagem caso ocorra erro na conexão
mongoose.connection.on("error", (error)=>{
 console.log("Erro ao conectar ao MongoDB:", error)
})

// exporta a conexão para usar em outros arquivos
module.exports = mongoose