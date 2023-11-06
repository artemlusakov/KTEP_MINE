import React from 'react';
import s from "./Simple.module.css";
import f from '../Simple_raiting/Simple.module.css'

const Simple = (props) => {
    return (
        <div className={f.Simple_raiting_items}>
            <input id={'Simple_rating_' + props.value} className={s.Simple_raiting_item} name={'Simple_taite'} type={"radio"}
                   value={props.value}/>
            <label htmlFor={'Simple_rating_' + props.value} className={s.Simple_raiting_label}></label>
        </div>
    );
};

export default Simple;