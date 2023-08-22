
import './App.css'
import Car from './components/Car'

function App() {

  const cars = [
    { brand: "Ferrari", color: "Amarela", km: 0},
    { brand: "KIA", color: "Branco", km: 13420},
    { brand: "Renault", color: "Azul", km: 234}
  ];

  return (
    <>
    <h1> Desafio CSS </h1>
    <div className="car-container">
    {cars.map((car) => (
        <Car car={car}/>
    ))}


    </div>
    </>
  )
}

export default App
