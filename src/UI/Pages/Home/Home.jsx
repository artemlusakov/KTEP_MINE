import React from 'react';
import s from './Home.module.css'
const Home = () => {
    return (
        <div>

            <div className={s.All_Component_video}>
            <section className={s.Slaider}>
                <h1>Приветствуем вас на проекте KTEP_Mine</h1>
            </section>

            <video autoPlay muted loop id="myVideo">
                <source src={require("../../Asets/Video/Maine1.mp4")} type="video/mp4"/>

            </video>
            </div>

            <section className={s.Informaite}>
                <div className={s.Informaite_name}>
                    <img src="https://img.icons8.com/color/512/minecraft-logo--v1.png" alt="Logo_server"/>
                        <div className={s.Informaite_text}>
                            <h1>КТЭП майн - лучший сервер для игры с друзьями</h1>

                            <div className={s.Vk}>
                                <a href=""><img src="https://cdn-icons-png.flaticon.com/512/2111/2111828.png" alt="vk"/></a>
                                <a href=""><img
                                    src="https://play-lh.googleusercontent.com/Wvjx6rVlC1rGWKkln3r-23ICKV--sxEEUuq7jd15BeJan8v-wS7TGwm0NHXqqon18w"
                                    alt="discord"/></a>
                                <a href=""><img
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/1200px-Telegram_2019_Logo.svg.png"
                                    alt="telegram"/></a>
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