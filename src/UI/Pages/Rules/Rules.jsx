import React from 'react';
import s from './Rules.module.css'
import Footer from "../../Components/Footer/Footer";
const Rules = () => {
    return (
        <div className={s.All_Components_Rules}>
            <div className={s.Rules}>
            <div className={s.Bloc}>
                <div className={s.Bloc_name}>
                <img src={require('../../Asets/IMG/world.webp')} alt="world"/>
                <h1>World</h1>
                </div>

                <div className={s.Bloc_text}>
                    <h3>Здесь будут прописаны общие правила для всех миров сервера </h3>
                          1. Не допускается софт помогающий игроку видеть сквозь блоки
                    <br/> 2. Не допускается хамское отношение к другим игрокам
                    <br/> 3. Не допускается строительство похабных и аморальных построек
                    <br/> 4. Запрет на кемперство игрока
                    <br/> 5. Запрет на гриферство (за искрлючением режима анархия)
                    <br/> 6. Запрет на строительство лаг машин
                    <br/> 7. Запрет на возведение огромных стен
                    <br/> 8. Запрет на строительство скоростных путей в близи спавна ( исключени составляют пути утверждённые администратором)
                </div>
            </div>

            <div className={s.Bloc}>
                <div className={s.Bloc_name}>
                    <img src={require('../../Asets/IMG/stivehead.webp')} alt="world"/>
                    <h1>User</h1>
                </div>

                <div className={s.Bloc_text}>
                    <h3>Права игроков</h3>
                    1. Каждый игрок имеет право на обжалование блокировки
                    <br/> 2. Каждый игрок имеет право вернуть деньги за превилегию в течение часа с момента покупки при условии что игрок ник-каким образом не вредил серверу
                    <br/> 3. Каждый игрок имеет право принемать участие в розыгрыши превелегий раз в 1 неделю
                    <h3>Запреты</h3>
                     1. Игроку запрещенно оскорблять других игроков
                    <br/> 2. Игроку запрещенно кемпить других игроков
                    <br/> 3. Игроку запрещенно застраивать спавн
                    <br/> 4. Игроку запрещенно использовать сторонний софт
                    <br/> 5. Игроку запрещенно использовать дюп
                    <br/> 6. Игроку запрещенно строить лаг машины
                    <br/> 7. Игроку запрещенно отказываться от проверки на читы
                    <br/> 8. Игроку запрещенно ставить оскрбительный ник
                    <br/> 9. Игроку запрещенно переименовывать мобов в оскорбительные слова
                </div>
            </div>

            <div className={s.Bloc}>
                <div className={s.Bloc_name}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWkdt4rygA3YB8K4riJ9dL3kFXWpWf_8avKA&usqp=CAU" alt="world"/>
                    <h1>admins</h1>
                </div>

                <div className={s.Bloc_text}>
                    <h3>Права</h3>
                    Админестратор имеет право вызвать игрока на проверк
                    <br/> 2. Админестратор имеет право забанить игрока на 7 дней за оскорбительное поведение
                    <br/> 3. Админестратор имеет право забанить навсегда игрока за использование сторонего софта
                    <br/> 4. Админестратор имеет право внести ip игрока в чёрный список
                    <br/> 5. Админестратор имеет право забанить игрока за постройку лаг машины и дюп машины
                    <br/> 6. Админестратор имеет право устраевать раздачю ресурсов
                    <br/> 7. Админестратор имеет право понизеть или забрать донат привелегию в качестве наказания однако данное действие игрок может обжаловать и в случаяе успешного обжалования админестратор будет понижен до статуса vip
                    <br/> 8. Админестратор имеет право выдать игроку донат vip за хорошее поведение
                    <br/> 9. Админестратор имеет право забанить другого администратора по веской пречине иначе админестратор получит бан по ip адресу
                </div>
            </div>
            </div>

            <Footer/>
        </div>
    );
};

export default Rules;