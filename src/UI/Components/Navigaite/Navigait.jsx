import React from 'react';
import s from './Navigait.module.css'
import {NavLink} from "react-router-dom";

const Navigait = () => {
    return (
        <div >
            <nav className={s.Navigate}>
                <div className={s.Navigate_Content}>
                    <NavLink to={'./'}><img src="https://pngimg.com/d/minecraft_PNG38.png" alt="Logo"/></NavLink>

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

                <button className={s.Navigate_Registration}>
                    <NavLink to={'./Registrait'}>Войти</NavLink>
                </button>
            </nav>
        </div>
    );
};

export default Navigait;