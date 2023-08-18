import { useState } from 'react';
import './App.css';
import City from './assets/city.jpg';
import CondicionalRender from './components/CondicionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUsername from './components/ShowUsername';
import CarDetails from './components/CarDetails';

function App() {
  const name = "Naiara";
  const [userName] = useState("Gabriela");

  const cars = [
    {id:1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0},
    {id:2, brand: "KIA", color: "Branco", newCar: false, km: 13420},
    {id:3, brand: "Renault", color: "Azul", newCar: false, km: 234}
  ];

  return (
    <div className="App">
      <h1>Avançando no REACT</h1>
      {/* Imagem em public */}
      <div>
        <img src="/img1.jpg" alt="Paisagem"></img>
      </div>
      {/* Imagem em asset */}
        <img src={City} alt="Cidade"></img>
      <div>
      <ManageData />
      <ListRender />
      <CondicionalRender />
      {/* props */}
      <ShowUsername name={userName}/>
      {/* destructuring */}
       <CarDetails brand="VW" km={100000} color="Azul" newCar={false} />
      {/* reaproveitando */}
      <CarDetails brand="Ford" km={0} color="Vermelho" newCar={true} />
      <CarDetails brand="Fiat" km={4500} color="Branco" newCar={true} />
      {/*loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails 
          brand={car.brand} 
          color={car.color} 
          km={car.km} 
          newCar={car.newCar} 
        />
      ))}
      </div>
    </div>
  );
}

export default App;
