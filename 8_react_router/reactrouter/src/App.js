
import './App.css';

//1- config react router
import {BrowserRouter, Routes, Route} from 'react-router-dom';
//2- pages
import Home from './pages/Home';
import About from './pages/About';

//3-components
import Navibar from './components/Navbar';

function App() {
  return (
    <div className="App">
     <h1>React Router</h1>
     <BrowserRouter>
      <Navibar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
