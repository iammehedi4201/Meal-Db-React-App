import { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import AboutUs from './Components/AboutUs/AboutUs';
import Error from './Components/ErrorMeassage/Error';
import FoodDetails from './Components/FoodDetails/FoodDetails';
import Foods from './Components/Foods/Foods';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';

function App() {

  const [inputValue,setInputValue] =useState("")

  const navigate = useNavigate();

  const catchInputValue=(e)=>{

    const value =document.getElementById("input-field").value;

    setInputValue(value);

    const path = '/Foods'

    navigate(path)

    document.getElementById("input-field").value="";

  }

  return (
    <div className="App">

          <Header  catchInputValue={ catchInputValue}></Header>   

          <Routes>

            <Route path='/' element={<Home/>}></Route>
            <Route path='/Foods' element={<Foods inputValue={inputValue} />}></Route>
            <Route path='/Food/:mealid' element={<FoodDetails/>}></Route>
            <Route path='/About' element={<AboutUs/>}></Route>
            <Route path='*' element={<Error/>}></Route>

          </Routes>
     
    </div>
  );
}

export default App;
