import { useState } from 'react'
import './App.css'
import Mycomponent from './components/Mycomponent'
import Title from "./components/Title"

function App() {
  const n = 15
  const [name] = useState("Naiara")
  const redTitle = true

  return (
    <>
    {/*CSS GLOBAL */}
    <h1>React com CSS</h1>
     {/*CSS Componente */}
    <Mycomponent />
    <p>este é o parágrafo do App.js</p>
    {/* Inline CSS */}
    <p style={{color: "blue", padding:"25px", borderTop: "2px solid red"}}>
      Este elemento foi estilizado de forma inline
    </p>
    {/* Inline CSS Dinamico */}
      <h2 style={n < 10 ? ({ color: "purple" }) : ({ color: "pink" }) }>CSS dinâmico</h2>
      <h2 style={n > 10 ? ({ color: "purple" }) : ({ color: "pink" }) }>CSS dinâmico</h2>
      <h2 style={
        name === "Naiara" 
        ? ({ color: "green", backgroundColor: "#000" }) 
        : null }>
        Test nome
      </h2>
    {/* Classe Dinamica */}
    <h2 className={redTitle ? "red-title" : "title"}> 
      Esse título vai ter classe dinâmica
    </h2>
    {/* CSS Modules */}
    <Title />
    <h2 className='my_title'>Testando</h2>
    </>
  )
}

export default App
