import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Register from './components/Register';
import { Route, Routes } from 'react-router-dom';
import StateBasics from './components/StateBasics';
import Calc from './components/Calc';
import Listmap from './components/Listmap';
import Api from './components/Api';
import Sampleuse from './components/Sampleuse';
import { Card } from '@mui/material';
import Getcard from './components/Getcard';

function App() {
  return (
    <div className="App">
    
      <Navbar/>
      <Routes>
      <Route path='/'element={<Register/>}/>
      <Route path='/sin' element={<Signup/>}/>
      <Route path='/sb' element={<StateBasics/>}/>
      <Route path='/ad' element={<Calc/>}/>
      <Route path='/list'element={<Listmap/>}/>
      <Route path='/api'element ={<Api/>}/>
      <Route path='/sam' element={<Sampleuse/>}/>
      <Route path='/card'element={<Getcard/>}/>

     
      </Routes>
      
    
      
    </div>
  );
}

export default App;
