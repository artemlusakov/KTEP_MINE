import React from "react";
import s from './Coments.module.css'
import Coment from './Components/Coments/Coments'
import Futur from "../../Components/Futor/Futur";

const Coments = () => {
    return (
        <div>
            <section className={s.Coments_Head}>
                <div className={s.Coments_Head_text}> ↓ Отзывы от Игроков ↓</div>

            </section>

            <section className={s.Coments_Content}>
                <div className={s.Coments_Content_rightSection}>
                    <h1>Недавние коментарии</h1>
                    <div className={s.LineSize}>
                        <Coment src='https://www.meme-arsenal.com/memes/17c961f489520ee02794a2c6ed593f0a.jpg'
                                Nik='KikFliper' Coments='Один из лутших серверов на которых я играл'/>
                        <Coment src='https://www.meme-arsenal.com/memes/17c961f489520ee02794a2c6ed593f0a.jpg' Nik='lol'
                                Coments='Шикарный сервер выйграл на раздаче vip статус'/>
                        <Coment src='https://www.meme-arsenal.com/memes/17c961f489520ee02794a2c6ed593f0a.jpg'
                                Nik='Mistr Trololo' Coments='Почему я не могу взорвать спавн?'/>
                        <Coment src='https://www.meme-arsenal.com/memes/17c961f489520ee02794a2c6ed593f0a.jpg'
                                Nik='Mojore' Coments='Это конечно не хай пиксель но играть можно'/>
                        <Coment src='https://www.meme-arsenal.com/memes/17c961f489520ee02794a2c6ed593f0a.jpg' Nik='lol'
                                Coments='ahahahhahahhahah'/>
                        <Coment src='https://www.meme-arsenal.com/memes/17c961f489520ee02794a2c6ed593f0a.jpg' Nik='lol'
                                Coments='ahahahhahahhahah'/>
                        <Coment src='https://www.meme-arsenal.com/memes/17c961f489520ee02794a2c6ed593f0a.jpg' Nik='lol'
                                Coments='ahahahhahahhahah'/>
                        <Coment src='https://www.meme-arsenal.com/memes/17c961f489520ee02794a2c6ed593f0a.jpg' Nik='lol'
                                Coments='ahahahhahahhahah'/>
                        <Coment src='https://www.meme-arsenal.com/memes/17c961f489520ee02794a2c6ed593f0a.jpg' Nik='lol'
                                Coments='ahahahhahahhahah'/>
                        <Coment src='https://www.meme-arsenal.com/memes/17c961f489520ee02794a2c6ed593f0a.jpg' Nik='lol'
                                Coments='ahahahhahahhahah'/>
                        <Coment src='https://www.meme-arsenal.com/memes/17c961f489520ee02794a2c6ed593f0a.jpg' Nik='lol'
                                Coments='ahahahhahahhahah'/>

                    </div>
                </div>
                <div className={s.ComentsImg}>
                    <img src={require('../../Asets/IMG/criper.webp')} alt=""/>
                </div>
            </section>

            <section className={s.All_Content_BestPlaer}>
                <h1>Благодарность</h1>

                <div className={s.Content_BestPlaer}>
                    <div className={s.BestPlaer_IMG}>
                        <img src={require('../../Asets/IMG/Best.webp')} alt=""/>
                    </div>

                    <div className={s.BestPlaer}>

                        <div className={s.BestPlaer_Top3}>

                            <h1>Топ 3 игрока сервера</h1>

                            <div className={s.Positeons_Top3}>
                                <div className={s.BestPlaer_Box}>
                                    <img
                                        src="https://pixelbox.ru/wp-content/uploads/2020/11/ava-maincraft-youtube-34-300x300.jpg"
                                        alt=""/>
                                    <h1>Niks</h1>
                                    <button>Посмотреть профиль</button>
                                </div>

                                <div className={s.BestPlaer_Box}>
                                    <img
                                        src="https://www.meme-arsenal.com/memes/ffe0b145529edea37d6b0d0e5aa7f676.jpg"
                                        alt=""/>
                                    <h1>Faicer</h1>
                                    <button>Перейти в профиль</button>
                                </div>

                                <div className={s.BestPlaer_Box}>
                                    <img
                                        src="https://blobs.omlet.gg/blob/bG9uZ2RhbjovL0ZPVVIvbGRwcm9kLWRlL3V3LUh4eHA5ZkRFTF9Nc0duSU1Oamc9PQ"
                                        alt=""/>
                                    <h1>Bombino</h1>
                                    <button>Перейти в профиль</button>
                                </div>
                            </div>

                            <div className={s.BestPlaer_masege}>
                            <h1>
                                Благодарим вас за активную помощь серверу KTEP_MINE
                            </h1>
                            <h3>
                                В ближайшее время с вами свяжется наш админестратор для выдачи награды
                            </h3>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <Futur/>
        </div>
    );
};

export default Coments;