import './App.css';

import { useState, useEffect } from 'react';

//4-Custom hook
import { useFetch } from './hooks/useFetch';

const url = "http://localhost:3000/product/";

function App() {
  const [product, setProduct] = useState([]);
//4 - Custom hook
  const { data: items, httpConfig } = useFetch(url);


  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  //1- resgatando dados (chamada assincrona)
  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     setProduct(data);
  //   };
  //   fetchData();
  // }, []);
  
  //2- Adição de produtos
  const handleSubmit = async (e) => {
    e.preventDefault();
    const product= {
      name,
      price
    };
    
    // //criando a requisição
    //const res = await fetch(url, {
     //method: "POST",
      //headers: {
        //"Content-Type": "application/json"
      //},
      //body: JSON.stringify(product)
    //});

    //const addedProduct = await res.json();
  // //3-carregamento dinâmico
  //setProduct((prevProducts) => [...prevProducts, addedProduct]);

  // 5- refatorando o Post
  httpConfig(product, "POST");

  setName("");
  setPrice("");
   
  };

  return (
    <div className="App">
      <h1>Lista de produtos</h1>
      <ul>
        {items && items.map((product) => (
          <li key={product.id}>
            {product.name} - R$: {product.price}
          </li>
        ))}
      </ul>
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input type="text" value={name} name="name" onChange={(e)=> setName(e.target.value)} />
          </label>
          <label>
            Preço:
            <input type="number" value={price} name="price" onChange={(e)=> setPrice(e.target.value)} />
          </label>
          <input type="submit" value="CRIAR"/>
        </form>
      </div>
    </div>
  );
}

export default App;
