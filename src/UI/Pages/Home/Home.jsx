import React from 'react';
import s from './Home.module.css'
import MobailNavigeit from "../../Components/MobailNawigeit/MobailNavigeit";
const Home = () => {
    return (
        <div>
            <MobailNavigeit/>
            <div className={s.All_Component_video}>

            <section className={s.Slaider}>

                <h1>Приветствуем вас на проекте КТЭП майн</h1>
            </section>

            <video autoPlay muted loop id="myVideo">
                <source src={require("../../Asets/Video/Maine1.mp4")} type="video/mp4"/>

            </video>
            </div>

            <section className={s.Informaite}>
                <div className={s.Informaite_name}>
                    <img src={require('../../Asets/IMG/minecraft-logo--v1.png')} alt="Logo_server"/>
                        <div className={s.Informaite_text}>
                            <h1>КТЭП майн - лучший сервер для игры с друзьями</h1>

                            <div className={s.Vk}>
                                <a href=""><img src={require('../../Asets/IMG/Vk.webp')} alt="vk"/></a>
                                <a href=""><img src={require('../../Asets/IMG/Diskord.png')} alt="discord"/></a>
                                <a href=""><img src={require('../../Asets/IMG/Telegram_Messenger.png')} alt="telegram"/></a>
                            </div>
                        </div>
                </div>

                <div className={s.Plae}>
                    <button>Играть</button>

                    <div className={s.statistical}>
                        <div className={s.statistical_sercal}>
                            1000
                        </div>
                        Место в рэйтинге
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;