import React, {useState} from 'react';
import s from './Card.module.css'
import Modal from "../../../../Components/Modal/Modal";

const Card = (props) => {

    return (
        <div className={s.Card}>


            <div className={s.Card_name}>
                <img src={props.img} alt=""/>
                <h2>{props.name}</h2>
            </div>

            <p>
                {props.text}
            </p>

            <Modal
                active={props.modalActive}
                setActive={props.setModalActive}
            />

            <button onClick={()=> props.setModalActive(true)}>Подробнее</button>

        </div>
    );
};

export default Card;