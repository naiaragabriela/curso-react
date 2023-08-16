//components
import FirstComponent from './components/FirstComponents';


//styles /css
import './App.css';
import TemplateExpressions from './components/TemplateExpressions';
import MyComponents from './components/MyComponents';

function App() {
  return (
    <div className="App">
    <h1>Fundamentos de React</h1>
    <FirstComponent />
    <TemplateExpressions />
    <MyComponents />
    </div>
  );
}

export default App;
