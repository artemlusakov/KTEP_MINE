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
                        <input style={{border: '1px solid #ccc'}} className={"AuthInput"} placeholder={'Введите никнейм'}/>
                        <h2>Выберите способ оплаты</h2>
                        <div className={s.Oplata}>
                            <NavLink to={''}><img src="https://upload.wikimedia.org/wikipedia/ru/8/89/Logo_qiwi_rgb.png" alt=""/></NavLink>
                            <NavLink to={''}><img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt=""/></NavLink>
                            <NavLink to={''}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Mir-logo.SVG.svg/2560px-Mir-logo.SVG.svg.png" alt=""/></NavLink>
                            <NavLink to={''}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Visa_Electron.svg/1200px-Visa_Electron.svg.png" alt=""/></NavLink>
                            <NavLink to={''}><img src="https://www.webmoney.ru/img/icons/wmlogo_vector_blue.png?1679918368" alt=""/></NavLink>
                            <NavLink to={''}><img src="https://upload.wikimedia.org/wikipedia/ru/thumb/c/c7/%D0%A1%D0%91%D0%9F_%D0%BB%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF.svg/1200px-%D0%A1%D0%91%D0%9F_%D0%BB%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF.svg.png" alt=""/></NavLink>
                        </div>

                            <Button style={{background: '#03A9F4', color: '#fff', padding: '25px 15px'}}>Оплатить</Button>
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