import { useState } from 'react'
import './App.css'
import Mycomponent from './components/Mycomponent'

function App() {
  const n = 15
  const [name] = useState("Naiara")
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
    </>
  )
}

export default App
