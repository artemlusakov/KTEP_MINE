import React, {useState} from 'react';
import s from './BoxDonait.module.css'
import Modal from "../../../../Components/Modal/Modal";
import {NavLink} from "react-router-dom";

const BoxDonait = (props) => {
    const [modalActive, setModalActive] = useState(false)

    return (
    <div className={s.Box}>
        <a href="#"><img src={props.src} alt="IMG Box"/></a>
            <h2>{props.name}</h2>
            <h5>Чтобы узнать подробности нажми на картинку доната</h5>
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

                            <button>Оплатить</button>
                    </div>
                </div>
            </Modal>
            <h3>{props.prise}р</h3> <button onClick={() => setModalActive(true)}>купить</button>

        </div>
    </div>
  

    );
};

export default BoxDonait;