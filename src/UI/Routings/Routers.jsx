import React from 'react';
import s from './Router.module.css'
import {Route, Router, Routes} from "react-router-dom";
import Navigait from "../Components/Navigaite/Navigait";
import Coments from '../Pages/Coments/Coments';
import Donait from '../Pages/Donait/Donait';
import Home from "../Pages/Home/Home";
import Suport from '../Pages/Suport/Suport.jsx';
import Rules from "../Pages/Rules/Rules";
import Modes from "../Pages/Modes/Modes";


const Routers = () => {
    return (
        <div>
            <Navigait/>

            <div className={s.Mt}>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Donait' element={<Donait/>}/>
            <Route path='/Suport' element={<Suport/>}/>
            <Route path='/Coments' element={<Coments/>}/>
            <Route path='/Rules' element={<Rules/>}/>
            <Route path='/Modes' element={<Modes/>}/>
        </Routes>
            </div>
        </div>

    );
};

export default Routers;