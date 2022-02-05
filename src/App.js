import logo from './logo.svg';
import './App.css';

import { BrowserRouter } from "react-router-dom";
import MainRouter from "./MainRouter";
import Menu from './Menu';

function App() {
  return (
    <BrowserRouter>
        <Menu/>
        <MainRouter />
    </BrowserRouter>
    
  );
}

export default App;
