import React from 'react';
import s from './Footer.module.css'

const Footer = () => {
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
            <div className={s.SotsetiAll}>
                <h4>Наши сотсети</h4>
                <div className={s.Sotseti}>
                    <a href="https://vk.com/feed" target="_blank"><img src={require('../../Asets/IMG/Vk.webp')} alt="vk"/></a>
                    <a href="https://web.telegram.org" target="_blank"><img src={require('../../Asets/IMG/Telegram_Messenger.png')} alt="telegram"/></a>
                    <a href="https://discord.com/" target="_blank"><img src={require('../../Asets/IMG/Diskord.png')} alt="discord"/></a>
                </div>
            </div>
        </div>
    );
};

export default Footer;