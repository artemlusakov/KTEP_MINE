import React, {useState} from 'react';
import Card from "./Components/Card/Card";
import s from './Modes.module.css'
import Footer from "../../Components/Footer/Footer";
import MobailNavigeit from "../../Components/MobailNawigeit/MobailNavigeit";
const Modes = () => {
    const [modalActive, setModalActive] = useState( false)
    return (
        <>
            <MobailNavigeit/>
        <div className={s.All_Components_Modes}>
            <div  className={s.Modes_content}>
            <Card
                modalActive={modalActive}
                setModalActive={setModalActive}
                img={require('../../Asets/IMG/world.webp')}
                name={'Выживание'}
                text={"Стандартный режим выживания в котором вам предстоит создать свой личный дом мечты, а так же не дать другим игрокам убить вас. При этом есть функция доната"}/>

            <Card
                modalActive={modalActive}
                setModalActive={setModalActive}
                img={require('../../Asets/IMG/world.webp')}
                name={'Анархия'}
                text={"В этом режиме дозволено всё. Здесь нет привата"}/>

            <Card
                modalActive={modalActive}
                setModalActive={setModalActive}
                img={require('../../Asets/IMG/world.webp')}
                name={'Ванила'}
                text={"В данном режиме вам необходимо соревноваться с другими игроками с целью заполучить яйцо дракона раньше других. После чего необходимо удержать данный предмет в инвентаре 3ч"}/>


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