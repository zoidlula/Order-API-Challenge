// importa o express
const express = require("express")

// cria um router
const router = express.Router()

// importa o controller
const orderController = require("../controllers/orderController")

// endpoint para criar pedido
router.post("/order", orderController.createOrder)

// endpoint para listar pedidos
router.get("/order/list", orderController.listOrders)

// endpoint para buscar pedido por ID
router.get("/order/:orderId", orderController.getOrder)

// endpoint para atualizar pedido
router.put("/order/:orderId", orderController.updateOrder)

// endpoint para deletar pedido
router.delete("/order/:orderId", orderController.deleteOrder)

// exporta as rotas
module.exports = router