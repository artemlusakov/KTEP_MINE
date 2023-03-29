import React from 'react';
import s from './Router.module.css'
import {Route, Router, Routes} from "react-router-dom";
import Coments from '../Pages/Coments/Coments';
import Donait from '../Pages/Donait/Donait';
import Home from "../Pages/Home/Home";
import Suport from '../Pages/Suport/Suport.jsx';
import Rules from "../Pages/Rules/Rules";
import Modes from "../Pages/Modes/Modes";
import MobailNavigeit from "../Components/MobailNawigeit/MobailNavigeit";


const Routers = () => {
    return (
        <div>
            <MobailNavigeit/>

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