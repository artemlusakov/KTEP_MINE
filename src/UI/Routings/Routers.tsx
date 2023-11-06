import React from 'react';
import s from './Router.module.css'
import {Route, Routes} from "react-router-dom";
import Coments from '../Pages/Coments/Coments';
import Donait from '../Pages/Donait/Donait';
import Home from "../Pages/Home/Home";
import Suport from '../Pages/Suport/Suport.jsx';
import Rules from "../Pages/Rules/Rules";
import Modes from "../Pages/Modes/Modes";
import Api from "../../API/api";
import Vhod from "../Pages/Autorization/Components/Vhod";
import Registr from "../Pages/Autorization/Components/Registr";


const Routers = () => {
    return (

            <div className={s.Mt}>
        <Routes>
            <Route path='/' element={<Vhod/>}/>
            <Route path='/Registr' element={<Registr/>}/>


            <Route path='/main/lol' element={<Api/>}/>
            <Route path='/main/Home' element={<Home/>}/>
            <Route path='/main/Donait' element={<Donait/>}/>
            <Route path='/main/Suport' element={<Suport/>}/>
            <Route path='/main/Coments' element={<Coments/>}/>
            <Route path='/main/Rules' element={<Rules/>}/>
            <Route path='/main/Modes' element={<Modes/>}/>
        </Routes>
            </div>

    );
};

export default Routers;