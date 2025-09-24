import {useState, useEffect} from 'react'
import axios from 'axios'


const Produtos = () => {

    const [pizzas, setPizzas] = useState([])

// consumir rota com lista de produtos

axios.get("http://viacep.com.br/ws/01010000/json")
.then(response=>{

    console.log(response.data)
})
.catch(error=>{console.log(error)})
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