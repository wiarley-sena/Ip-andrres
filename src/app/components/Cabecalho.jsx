import { useState } from "react";

export default function Cabecalho(props) {
  const [input, setInput] = useState("")

  return (
    <div>
      <header className="cabecalho">
        <h1 className="titulo"> Endereço IP</h1>
        <div className="container-input">
          <input onChange={(evt)=> setInput(evt.target.value)} type="text" placeholder="Digite seu IP"></input>
          <button onClick={(()=>{
            props.onBuscar(input.trim())
          } )}>
            <img alt="btn pesquisar" src="/images/icon-arrow.svg"></img>
          </button>
        </div>
      </header>
    </div>

  );
}
