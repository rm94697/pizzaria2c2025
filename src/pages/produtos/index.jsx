const Produtos = () => {
//Objeto da lista de pizzas
 const pizza = [

 'Pizza Mussarela',
 'Pizza Calabresa',
 'Pizza Quatro Queijos'
]

// Iteração da lista de pizzas - pizza a pizza ( um a um )

const listaPizzas = pizzas.map(pizza=><li>(pizza)</li>)

    return (
        <div>
            <h3>Listagem de Produtos</h3>
            <ul>

               {ListaPizzas}
               
           </ul>
        </div>
 
    )
 
}
 
export default Produtos