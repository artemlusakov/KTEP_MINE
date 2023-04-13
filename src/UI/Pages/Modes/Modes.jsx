import React, {useState} from 'react';
import Card from "./Components/Card/Card";
import s from './Modes.module.css'
import Footer from "../../Components/Footer/Footer";
const Modes = () => {
    const [modalActive, setModalActive] = useState( false)
    return (
        <>
        <div className={s.All_Components_Modes}>
            <div  className={s.Modes_content}>
            <Card
                modalActive={modalActive}
                setModalActive={setModalActive}
                img={require('../../Asets/IMG/world.webp')}
                name={'Выживание'}
                text={"Стандартный режим выживания в котором вам предстоит создать свой личный дом мечты а так же не дать другим игрокам убить вас. При этом есть функция доната"}/>

            <Card
                modalActive={modalActive}
                setModalActive={setModalActive}
                img={require('../../Asets/IMG/world.webp')}
                name={'Анархия'}
                text={"В этом режиме дозволено почти всё. Здесь нет привата а так-же "}/>

            <Card
                modalActive={modalActive}
                setModalActive={setModalActive}
                img={require('../../Asets/IMG/world.webp')}
                name={'Ванила'}
                text={"Это тоже выживание но без донат превелегий"}/>

            <Card
                modalActive={modalActive}
                setModalActive={setModalActive}
                img={require('../../Asets/IMG/world.webp')}
                name={'Мини игры'}
                text={"Этот режим идеально подходит для игры в компание друзей. Вам предстоит окунутся в соревновательные баталии на звание лутшего игрока в определённой мини игре"}/>

            </div>
            <div>
                <img src={require("../../Asets/IMG/stive.webp")} alt=""/>
            </div>
            </div>
    <Footer/>
    </>
    );
};

export default Modes;