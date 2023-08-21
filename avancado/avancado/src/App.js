import { useState } from 'react';
import './App.css';
import City from './assets/city.jpg';
import CondicionalRender from './components/CondicionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUsername from './components/ShowUsername';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';

function App() {
  //const name = "Naiara";
  const [userName] = useState("Gabriela");

  const cars = [
    {id:1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0},
    {id:2, brand: "KIA", color: "Branco", newCar: false, km: 13420},
    {id:3, brand: "Renault", color: "Azul", newCar: false, km: 234}
  ];

  function showMessage() {
    console.log("Evento do componente Pai")
  };

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

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
          key={car.id}
          brand={car.brand} 
          color={car.color} 
          km={car.km} 
          newCar={car.newCar} 
        />
      ))}
      {/*fragment */}
      <Fragment propFragment="teste"/>
      {/*children */}
      <Container myValue="testing ">
        <p> E este é o conteúdo </p>
      </Container>
      <Container myValue="testing 2 ">
        <h5>Testando o container</h5> 
      </Container>
      {/*executar função  */}
      <ExecuteFunction myFunction={showMessage} />
      {/*State Lift */}
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage} />
      </div>
    </div>
  );
}

export default App;
