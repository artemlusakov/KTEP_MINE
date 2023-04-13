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
                    <a href="https://vk.com/feed" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/VK.com-logo.svg/2048px-VK.com-logo.svg.png" alt="vk"/></a>
                    <a href="https://web.telegram.org" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/800px-Telegram_2019_Logo.svg.png" alt="telegram"/></a>
                    <a href="https://discord.com/" target="_blank"><img src="https://play-lh.googleusercontent.com/Wvjx6rVlC1rGWKkln3r-23ICKV--sxEEUuq7jd15BeJan8v-wS7TGwm0NHXqqon18w" alt="discord"/></a>
                </div>
            </div>
        </div>
    );
};

export default Footer;