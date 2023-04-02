import React, {useState} from 'react';
import s from './BoxDonait.module.css'
import Modal from "../../../../Components/Modal/Modal";
import {NavLink} from "react-router-dom";
import {Button} from "@mui/material";

const BoxDonait = (props) => {
    const [modalActive, setModalActive] = useState(false)

    return (
    <div className={s.Box}>
        <a href="#"><img src={props.src} alt="IMG Box"/></a>
            <h2>{props.name}</h2>
            <p style={{color: '#343434', padding: '10px 15px', fontSize: '12px', textAlign: 'center'}}>Чтобы узнать подробности нажми на картинку доната</p>
        <div className={s.Prise}>
            <Modal
                active={modalActive}
                setActive={setModalActive}>
                <div className={s.ModalContent}>
                <p>Решили купить?</p>
                    <div className={s.ModalInput}>
                        <input placeholder={'Введите никнейм'}/>
                        <h2>Выберите способ оплаты</h2>
                        <div className={s.Oplata}>
                            <NavLink to={''}><img src="https://upload.wikimedia.org/wikipedia/ru/8/89/Logo_qiwi_rgb.png" alt=""/></NavLink>
                            <NavLink to={''}><img src="https://upload.wikimedia.org/wikipedia/ru/8/89/Logo_qiwi_rgb.png" alt=""/></NavLink>
                            <NavLink to={''}><img src="https://upload.wikimedia.org/wikipedia/ru/8/89/Logo_qiwi_rgb.png" alt=""/></NavLink>
                            <NavLink to={''}><img src="https://upload.wikimedia.org/wikipedia/ru/8/89/Logo_qiwi_rgb.png" alt=""/></NavLink>
                            <NavLink to={''}><img src="https://upload.wikimedia.org/wikipedia/ru/8/89/Logo_qiwi_rgb.png" alt=""/></NavLink>
                            <NavLink to={''}><img src="https://upload.wikimedia.org/wikipedia/ru/8/89/Logo_qiwi_rgb.png" alt=""/></NavLink>
                        </div>

                            <Button style={{background: '#03A9F4', color: '#fff'}}>Оплатить</Button>
                    </div>
                </div>
            </Modal>
            <h3>{props.prise}р</h3>
            <button onClick={() => setModalActive(true)}  className="MyButton">купить</button>

        </div>
    </div>
  

    );
};

export default BoxDonait;