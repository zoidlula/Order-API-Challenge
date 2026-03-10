// importa o model do pedido
const Order = require("../models/orderModel")

// importa a função de mapping
const { mapOrder } = require("../services/orderService")


// =============================
//         criar pedido
// =============================
exports.createOrder = async (req,res) => {

 try{

  // converte o JSON recebido pro formato correto
  const mappedOrder = mapOrder(req.body)

  // cria um objeto de pedido novo
  const order = new Order(mappedOrder)

  // salva no banco
  await order.save()

  // retorna status 201 (criado)
  res.status(201).json(order)

 }catch(error){

  // retorna erro caso algo falhe
  res.status(500).json({
   message:"Erro ao criar pedido",
   error:error.message
  })

 }

}


// =============================
//     buscar pedido por ID
// =============================
exports.getOrder = async (req,res)=>{

 try{

  // busca pedido pelo orderId
  const order = await Order.findOne({orderId:req.params.orderId})

  // se não encontrar retorna a mensagem
  if(!order){
   return res.status(404).json({
    message:"Pedido não encontrado"
   })
  }

  // retorna o pedido encontrado
  res.json(order)

 }catch(error){

  res.status(500).json({error:error.message})

 }

}


// =============================
//    listar todos os pedidos
// =============================
exports.listOrders = async (req,res)=>{

 try{

  // busca todos os pedidos
  const orders = await Order.find()

  res.json(orders)

 }catch(error){

  res.status(500).json({error:error.message})

 }

}


// =============================
//       atualizar pedido
// =============================
exports.updateOrder = async (req,res)=>{

 try{

  // faz o mapping de novo
  const mappedOrder = mapOrder(req.body)

  // atualiza pedido pelo orderId
  const order = await Order.findOneAndUpdate(
   {orderId:req.params.orderId},
   mappedOrder,
   {new:true}
  )

  res.json(order)

 }catch(error){

  res.status(500).json({error:error.message})

 }

}


// =============================
//        deletar pedido
// =============================
exports.deleteOrder = async (req,res)=>{

 try{

  // remove pedido do banco
  await Order.findOneAndDelete({
   orderId:req.params.orderId
  })

  res.json({
   message:"Pedido deletado com sucesso"
  })

 }catch(error){

  res.status(500).json({error:error.message})

 }

}