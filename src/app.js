// importa a biblioteca Express que vai criar a API
const express = require("express")

// importa o arquivo que vai fazer a conexão com o banco MongoDB
require("./database/connection")

// importa as rotas da aplicação
const orderRoutes = require("./routes/orderRoutes")

// cria uma instância da aplicação Express
const app = express()

// permite a aplicação de receber requisições no formato JSON
app.use(express.json())

// registra as rotas da aplicação
app.use(orderRoutes)

// rota simples pra verificar se a API tá funcionando
app.get("/", (req,res)=>{
 res.send("API funcionando 🚀")
})

// inicializa o server na porta 3000
app.listen(3000, ()=>{
 console.log("Servidor rodando na porta 3000")
})