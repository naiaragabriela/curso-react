import { useState } from "react"

const CondicionalRender = () => {
    const [x] = useState(false);

    const [name,setName] = useState("Gabriela");

  return (
    <div>
        <h1>Isso será exibido?</h1>
        {x && <p> Se x for true, sim!</p>}
        {!x && <p> Agora x é falso!</p>}
        <h1> IF ternário </h1>
        {name === "Naiara" ? (
            <div> 
                <p> O nome é Naiara </p>
            </div>
        ) : (
            <div>
                <p>Nome não encontrado!</p>
            </div>
        )}
        <button onClick={() => setName("Naiara")}>Clique aqui</button>
    </div>
  )
}

export default CondicionalRender