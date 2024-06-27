
import './App.css';

//1- config react router
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//3-components
import Navbar from './components/Navbar';

//2- pages
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Info from './pages/Info';
import NotFound from './pages/NotFound';
import SearchForm from './components/SearchForm';
import Search from './pages/Search';


function App() {
  return (
    <div className="App">
     <h1>React Router</h1>
     <BrowserRouter>
     {/*2 - Links com react router*/}
      <Navbar />
      {/*9 - search */}
      <SearchForm />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* 6- nested route */}
        <Route path="/products/:id/info" element={<Info />} />
        {/* 4- Rota Dinâmica */ }
        <Route path="/products/:id" element={<Product />} />
        {/*9- search*/}
        <Route path="/search" element={<Search />} />
        {/*7- no match route */}
        <Route path="*" element={<NotFound />} />
        {/* */}
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
