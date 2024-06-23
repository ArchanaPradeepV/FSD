import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Data from './components/Data';
import Adds from './components/Adds';
import Views from './components/Views';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/add'element={<Data data={{ename:"",eage:"",eposition:"",esalary:""}}method="post"/>}/>
        
        {/* <Route path='/'element={<Adds/>}/> */}
        <Route path='/view'element={<Views/>}>


        </Route>
      </Routes>

    </div>
  );
}

export default App;
