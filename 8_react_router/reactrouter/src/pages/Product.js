import { UseParams } from 'react-router-dom';


const Product = () => {
  //4 - rota dinâmica
    const { id } = UseParams()

    return (
      <>
      <p>ID do produto: {id}</p>
      </>
    )
  }
  
  export default Product;