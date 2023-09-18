//components
import FirstComponent from './components/FirstComponents';
import TemplateExpressions from './components/TemplateExpressions';
import MyComponents from './components/MyComponents';
import Events from './components/Events';


//styles /css
import './App.css';
import Challenge from './components/Challenge';

function App() {
  return (
    <div className="App">
    <h1>Fundamentos de React</h1>
    <FirstComponent />
    <TemplateExpressions />
    <MyComponents />
    <Events />
    <Challenge />
    </div>
  );
}

export default App;
