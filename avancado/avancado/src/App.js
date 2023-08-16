import './App.css';
import City from './assets/city.jpg';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';

function App() {
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
      </div>
    </div>
  );
}

export default App;
