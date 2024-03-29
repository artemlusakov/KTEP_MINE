import React from "react";
import s from './Suport.module.css'
import {Button} from "@mui/material";
import Futor from "../../Components/Footer/Footer";
import Footer from "../../Components/Footer/Footer";
import MobailNavigeit from "../../Components/MobailNawigeit/MobailNavigeit";

const Suport = () => {
    return (
        <div className={s.AllContentSuport}>
            <MobailNavigeit/>
        <section className={s.Suport_Helou}>
            <div className={s.Suport_text}>
            У вас проблема? тогда предлогаем вам посмотреть часто задоваемые вопросы здесь или отправить свой вопрос в поддержку
            </div>

            <div className={s.Suport_input}>
            <input style={{marginRight: '20px'}} className={s.MyInput} type="text" placeholder="Задайте свой вопрос"/>
            <Button style={{background: '#03A9F4', color: '#fff', border: 'none'}}>Отправить</Button>
            </div>
        </section>
        <Footer/>
        </div>
    );
};

export default Suport;