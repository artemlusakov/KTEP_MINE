import React, {useState} from 'react';
import s from  './MobailNavigaite.module.css'
import {NavLink} from "react-router-dom";
const MobailNavigeit = () => {
    const [BurgerActive, setBurgerActiv] = useState(false)

    return (
        <div>
            <nav className={BurgerActive ? s.Navigate + ' ' + s.open  : s.Navigate}>
                <div className={s.Navigate_Content}>

                    <div className={s.Wrapper}>
                        <button className={s.Burger_btn} onClick={() => setBurgerActiv(!BurgerActive)}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>

                    <NavLink to={'./'} className={s.stils_logo}><img src={require('../../Asets/IMG/logo.webp')} alt="Logo"/></NavLink>

                    <div className={s.Navigate_Link}>

                        <ul>
                            <li><NavLink to={'./Donait'}>Донат</NavLink></li>
                            <li><NavLink to={'./Suport'}>Подержка</NavLink></li>
                            <li><NavLink to={'./Coments'}>Отзывы</NavLink></li>
                            <li><NavLink to={'./Rules'}>Правила</NavLink></li>
                            <li><NavLink to={'./Modes'}>Режимы</NavLink></li>
                        </ul>
                    </div>
                </div>

                <div className={s.Registration}>
                    <button className={s.Navigate_Registration}>
                    <NavLink to={'./Registrait'}>Войти</NavLink>
                    </button>
                <NavLink to={''}> <img src= {require("../../Asets/Gif/Allay.webp")} alt=""/></NavLink>
                </div>
            </nav>
        </div>

    );

};

export default MobailNavigeit;