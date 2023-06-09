// import logo from './logo.svg';
import React,{} from 'react';
import './App.css';
import './mobile.css'
import { Routes ,Route } from "react-router-dom";
import Home from './pages/Home';
import Footer from './components/footer/Footer';
import Error from './pages/error/Error';
import Myhub from './pages/Myhub';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Check from './auth/Check';
import Logout from './pages/logout/Logout';
import Rooms from './pages/myHUB/rooms/Rooms';
import Food from './pages/myHUB/food/Food';
import Products from './pages/Products';
import About from './pages/myHUB/About';

function App() {

  return (
    <div className="App">
  <Routes>

       {/* <Route path="/" element={<Home/>} /> */}
       <Route exact path="/" element={
       <Check>

         <Myhub/>
       </Check>
       } />
       <Route path="/login" element={<Login/>} />
       <Route path="/register" element={<Register/>} />
       <Route path="/logout" element={<Logout/>} />
       <Route path="/thehub/food" element={<Food/>} />
       <Route path="/thehub/rooms" element={<Rooms/>} />
       <Route path="/product/:id" element={<Products/>} />
       <Route path="/about" element={<About/>} />
       
        <Route path="*" element={<Error/>} />
  </Routes>
  <Footer/>
    </div>
  );
}

export default App;
