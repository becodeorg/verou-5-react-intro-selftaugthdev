//import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Input from './Input';
import Todo from './Todo';
//import Divider from "./Divider";


function App() {
  return (
    <div className="App">
    <div className="Header">
      < Header />
      </div>
    <div className="Input">
      < Input />
    </div>
    <div className="Todo">
      < Todo />
    </div>
    </div>
  );
}

export default App;
