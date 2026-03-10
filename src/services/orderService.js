// aqui vai ser a função responsável por transformar os dados que vierem
// pela API para o formato que vai salvar no banco de dados
function mapOrder(data){

 return {

  // converte numeroPedido -> orderId
  orderId: data.numeroPedido,

  // converte valorTotal -> value
  value: data.valorTotal,

  // converte dataCriacao -> creationDate
  creationDate: data.dataCriacao,

  // passa pelos itens recebidos e transforma os campos
  items: data.items.map(item => ({

   // converte idItem -> productId
   productId: Number(item.idItem),

   // converte quantidadeItem -> quantity
   quantity: item.quantidadeItem,

   // converte valorItem -> price
   price: item.valorItem

  }))
 }

}

// exporta a função para usar no controller
module.exports = { mapOrder }