import React, {useState} from 'react';
import s from './Card.module.css'
import Modal from "../../../../Components/Modal/Modal";
import {Button} from "@mui/material";

const Card = (props) => {

    return (
        <div className={s.Card}>


            <div className={s.Card_name}>
                <img src={props.img} alt=""/>
                <h2>{props.name}</h2>
            </div>

            <p style={{color: '#343434', padding: "10px", height: '500px'}}>
                {props.text}
            </p>

            <Modal
                active={props.modalActive}
                setActive={props.setModalActive}
            />



        </div>
    );
};

export default Card;