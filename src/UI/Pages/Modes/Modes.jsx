import React, {useState} from 'react';
import Card from "./Components/Card/Card";
import s from './Modes.module.css'


const Modes = () => {
    const [modalActive, setModalActive] = useState( false)
    return (
        <div className={s.All_Components_Modes}>
            <div  className={s.Modes_content}>
            <Card
                modalActive={modalActive}
                setModalActive={setModalActive}
                img={'https://img.freepik.com/free-icon/globe_318-436669.jpg'}
                name={'Выживание'}
                text={"Ttex text text"}/>

            <Card
                modalActive={modalActive}
                setModalActive={setModalActive}
                img={'https://img.freepik.com/free-icon/globe_318-436669.jpg'}
                name={'Выживание'}
                text={"Ttex text text"}/>

            <Card
                modalActive={modalActive}
                setModalActive={setModalActive}
                img={'https://img.freepik.com/free-icon/globe_318-436669.jpg'}
                name={'Выживание'}
                text={"Ttex text text"}/>

            <Card
                modalActive={modalActive}
                setModalActive={setModalActive}
                img={'https://img.freepik.com/free-icon/globe_318-436669.jpg'}
                name={'Выживание'}
                text={"Ttex text text"}/>

            </div>
            <div>
                <img src={require("../../Asets/IMG/stive.webp")} alt=""/>
            </div>
            </div>





    );
};

export default Modes;