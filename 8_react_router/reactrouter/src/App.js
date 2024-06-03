
import './App.css';

//1- config react router
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//3-components
import Navbar from './components/Navbar';

//2- pages
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';


function App() {
  return (
    <div className="App">
     <h1>React Router</h1>
     <BrowserRouter>
     {/*2 - Links com react router*/}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* 4- Rota Dinâmica */ }
        <Route path="/products/:id" element={<Product />} />
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
