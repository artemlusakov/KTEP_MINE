import React from "react";
import s from './Suport.module.css'
import Futur from "../../Components/Futor/Futur";

const Suport = () => {
    return (
        <div className={s.AllContentSuport}>
        <section className={s.Suport_Helou}>
            <div className={s.Suport_text}>
            У вас проблема? тогда предлогаем вам посмотреть часто задоваемые вопросы здесь или отправить свой вопрос в поддержку
            </div>

            <div className={s.Suport_input}>
            <input type="text" placeholder="Задайте свой вопрос"/> <button>Отправить</button>
            </div>
        </section>
        <Futur/>
        </div>
    );
};

export default Suport;