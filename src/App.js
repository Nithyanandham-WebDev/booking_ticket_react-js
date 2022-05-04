import logo from './logo.svg';
import './App.css';
import {BrowserRouter , Routes, Route} from 'react-router-dom';
import Home from "./page/home/Home";
import List from "./page/list/List";
import Hotel from "./page/hotel/Hotel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/hotel' element={<List/>}/>
        <Route path='/hotel/id' element={<Hotel/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
