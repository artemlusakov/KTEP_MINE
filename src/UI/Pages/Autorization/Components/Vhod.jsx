import React, {useEffect, useState} from 'react';
import '../Autorizait.css'
import {NavLink} from "react-router-dom";


const Vhod = () => {
    const [Nik, setNik] = useState('')
    const [Password, setPassword] = useState('')
    const [NikD, setNikD] = useState(false)
    const [PasswordD, setPasswordD] = useState(false)
    const [NikEror, setNikEror] = useState('Ник не может быть пустым')
    const [PasswordEror, setPasswordEror] = useState('Пароль не может быть пустым')
    const [formValid, setFormValid] = useState(false)

    useEffect(() => {
        if (NikEror || PasswordEror) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [NikEror, PasswordEror])

    const NikHandline = (e) => {
        setNik(e.target.value)
        if (!e.target.value) {
            setNikEror('Ник не может быть пустым')
        } else {
            setNikEror('')
        }
    }

    const PasswordHandline = (e) => {
        setPassword(e.target.value)
        if (e.target.value.length < 3 || e.target.value.length > 16) {
            setPasswordEror('Пароль не может быть короче 3х и больше 16 символов')
            if (!e.target.value) {
                setPasswordEror('Пароль не может быть пустым')
            }
        } else {
            setPasswordEror('')
        }
    }


    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'Nik':
                setNikD(true)
                break
            case 'Password':
                setPasswordD(true)
                break
        }
    }

    return (
        <div className={'AllComponentAutorizaite'}>
            <div className={'AllContentBoxAutorizait '}>
                <h2>Введите данные для входа</h2>
                {(NikD && NikEror) && <div style={{color: "red"}}>{NikEror}</div>}
                <input className={"AuthInput"} onChange={e => NikHandline(e)} value={Nik} onBlur={e => blurHandler(e)} name={'Nik'} type="text"
                       placeholder={'Введите ник'}/>

                {(PasswordD && PasswordEror) && <div style={{color: "red"}}>{PasswordEror}</div>}
                <input className={"AuthInput"} onChange={e => PasswordHandline(e)} value={Password} onBlur={e => blurHandler(e)}
                       name={'Password'} type='password' placeholder={'Введите пароль'}/>

                <div className={'ButtonBox'}>
                    <NavLink to={'/main/Home'}>
                        <button className={"AuthButton"} disabled={!formValid}>Войти</button>
                    </NavLink>
                    <NavLink to={'/Registr'}>
                        <button className={"AuthButton"} >Зарегестрироваться</button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Vhod;