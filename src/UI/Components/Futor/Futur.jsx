import React from 'react';
import s from './Futor.module.css'

const Futur = () => {
    return (
        <div className={s.AllFutorComponents}>
            <div className={s.Pocta}>
                <p>Наши контакты</p>
                <div>
                    <h4>Главный менеджер</h4>
                    <p>почта@mai.ru</p>

                    <h4>Главный Администратор</h4>
                    <p>почта@mai.ru</p>

                    <h4>Главный Тех Инжинер</h4>
                    <p>почта@mai.ru</p>
                </div>
            </div>
            <div>
                <p>Наши сотсети</p>
                <div className={s.Sotseti}>
                    <img src="https://icons8.ru/icon/kstj3AvGydm7/vk-в-круге" alt="vk"/>
                    <img src="https://icons8.ru/icon/pQxnPIlaBeFy/телеграм" alt="telegram"/>
                    <img src="https://icons8.ru/icon/iUtpLaQjK7et/discord" alt="discord"/>
                </div>
            </div>
        </div>
    );
};

export default Futur;