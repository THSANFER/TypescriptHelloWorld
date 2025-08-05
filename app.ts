// src/app.ts

function messageformatada(nome:string, preco:number): string{
  return `\n${nome} no valor de R$ ${preco.toFixed(2)}`;
}

function main() {

   const produtonome: string = "Jogo de Tabuleiro - Mundo da Magia";

   const protudovalor: number = 59.99;

   let disponivel: boolean = true;

   const categoriapedido: string[] = ["Infantil", "Familiar", "Educativo","Para maiores de 7 anos"] 

   const latilong: [number,number] = [-25.0945,-50.1633 ]

   
   enum StatusPedido{
    Pendente,
    Processando,
    Entregue,
    Cancelado
   }
   const statuspedi: StatusPedido = StatusPedido.Processando;

   enum StatusPagamento{
      NãoPago,
      Pago,
   }

   const statuspag: StatusPagamento = StatusPagamento.Pago;
   

    console.log("\nObrigado por comprar na Lions Store!\nSegue abaixo o resumo do seu pedido: ")
    let message = messageformatada(produtonome,protudovalor);
    console.log(message);

    console.log(`\nStatus do Pedido: ${StatusPedido[statuspedi]}`);

    console.log(`\nStatus do Pagamento: ${StatusPagamento[statuspag]}`);

    console.table("\nCategoria do Produto: ");
    console.table(categoriapedido);

    console.table("\nLocalização da Loja: ");
    console.table(latilong);
  }
  
  main();
