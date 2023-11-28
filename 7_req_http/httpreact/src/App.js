import './App.css';

import { useState, useEffect } from 'react';

const url = "http://localhost:3000/product/";

function App() {
  const [product, setProduct] = useState([]);
  //1- resgatando dados (chamada assincrona)
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const data = await response.json();
      setProduct(data);
    };
    fetchData();
  }, []);
  
  return (
    <div className="App">
      <h1>Lista de produtos</h1>
      <ul>
        {product.map((product) => (
          <li key={product.id}>{product.name} - R$: {product.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
