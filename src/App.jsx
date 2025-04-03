import { useState } from "react";
 
function App(){
 
  const [nome, setNome] = useState('Ronaldo')
 
  const Formulario = (props) => {
 
    return (
      <div>
          <input
            placeholder= {props.sombra}
            className="nome"
            onChange={(e)=>{setNome(e.target.value)}}
            name="nome"
            type="text" />
      <button
            onClick={()=>{(props.mensagem!= null )? alert (props.mensagem): alert (" TEXTO PADRÃO")}}
            className="botao">
         {(props.textoBotao != null )? props.textoBotao: "CLIQUE AQUI"}
      </button>
      </div>
    );
  };
 
  return (
    <div>
      <h3>Pizzaria 2C</h3>
      <Formulario  sombra = "Digie seu nome..." textoBotao= "ENVIAR NOME"/>
      <Formulario sombra = "Digie seu email..." textoBotao= "ENVIAR EMAIL"/>
      <Formulario mensagem = "Mensagem enviada pelo App" />
    </div>
 
  );
}
 
export default App