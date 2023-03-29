import React from 'react';
import s from './Coments.module.css'

const Coment = (props) => {
    return (
        <article className={s.Coments_All}>
            <div className={s.Profil}>
                    <img src={props.src} alt="" />
                <div className={s.Raiting}>
                    {props.Nik}

                    <div className={s.Simple_rating}>
                        <div className={s.Simple_rating_items}>
                            <input id={'simple_rating_5'} className={s.Simple_rating_item} name={'simple-rating'} type={"radio"} value={5}/>
                            <label for="{'simple_rating_5'}" className={s.Simple_rating_label}></label>
                            <input id={'simple_rating_4'} className={s.Simple_rating_item} name={'simple-rating'} type={"radio"} value={4}/>
                            <label htmlFor="{'simple_rating_4'}" className={s.Simple_rating_label}></label>
                            <input id={'simple_rating_3'} className={s.Simple_rating_item} name={'simple-rating'} type={"radio"} value={3}/>
                            <label htmlFor="{'simple_rating_3'}" className={s.Simple_rating_label}></label>
                            <input id={'simple_rating_2'} className={s.Simple_rating_item} name={'simple-rating'} type={"radio"} value={2}/>
                            <label htmlFor="{'simple_rating_2'}" className={s.Simple_rating_label}></label>
                            <input id={'simple_rating_1'} className={s.Simple_rating_item} name={'simple-rating'} type={"radio"} value={1}/>
                            <label htmlFor="{'simple_rating_1'}" className={s.Simple_rating_label}></label>

                        </div>
                    </div>
                </div>
            </div>

            <p className={s.Coments_text}>

                {props.Coments}
            </p>
        </article>

    );
};

export default Coment;