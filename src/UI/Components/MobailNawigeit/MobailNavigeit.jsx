import React, {useState} from 'react';
import s from  './MobailNavigaite.module.css'
import {NavLink} from "react-router-dom";
import Modal from "../Modal/Modal";

const MobailNavigeit = () => {
    const [BurgerActive, setBurgerActiv] = useState(false)
    const [modalActive, setModalActive] = useState(false)

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
                <NavLink onClick={() => setModalActive(true)} > <img src= {require("../../Asets/Gif/Allay.webp")} alt=""/></NavLink>

                    <Modal  active={modalActive} setActive={setModalActive} height={'800px'} width={'1400px'}>
                        <div className={s.AlaiContent}>
                                <img src={require('../../Asets/Gif/AllayTaike.webp')} alt=""/>

                            <div className={s.DialogAlai}>
                                <h1>Allay</h1>
                                <div className={s.AllayMasege}>
                                    <p>
                                        Вау ты нашёл меня. Хотя это не удевительно видемо надо было спрятатся как те 3 жабы.
                                        <br/> Ой я тебе про них не говорил лутше не ищи а то они меня унечтожат.
                                        <br/> Почему ты до сих пор тут иди играй
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Modal>
                </div>
            </nav>
        </div>

    );

};

export default MobailNavigeit;