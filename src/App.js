import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import Allusers from "./components/Allusers"
import Addusers from "./components/Addusers"
import EditUser from './components/Edituser';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
   <NavBar/>
   <Routes>
   <Route path='/' element ={<Home/>}/>
   <Route path='/all' element ={<Allusers/>}/>
   <Route path='/add' element ={<Addusers/>}/>
   <Route path="/edit/:id" element={<EditUser />} />
   </Routes>
   </BrowserRouter>
   </>
  )
}

export default App;
