import React, {useState} from 'react';
import BoxDonait from './Components/BoxDonait/BoxDonait';
import s from './Donait.module.css';
import Footer from "../../Components/Footer/Footer";
import MobailNavigeit from "../../Components/MobailNawigeit/MobailNavigeit";



const Donait = (props) => {
    return (
        <div>
            <MobailNavigeit/>

            <section className={s.headline}>
                <img src={require('../../Asets/IMG/Donaite.webp')} alt=""/>
            </section>

<section className={s.Donaite}>
    <BoxDonait src='https://avatars.mds.yandex.net/i?id=1efd0c3bae22fa1cd0290e0af3f65e81-5235096-images-thumbs&n=13' name='Petr' prise='100'/>
    <BoxDonait src={require('../../Asets/IMG/donaite2.webp')} name='Vip' prise='100'/>
    <BoxDonait src={require('../../Asets/IMG/donaite3.webp')} name='helper' prise='250'/>
    <BoxDonait src={require('../../Asets/IMG/donaite4.webp')} name='builder' prise='250'/>
    <BoxDonait src={require('../../Asets/IMG/donaite5.webp')} name='seraphin' prise='400'/>
    <BoxDonait src={require('../../Asets/IMG/donaite6.webp')} name='adamai' prise='400'/>
    <BoxDonait src={require('../../Asets/IMG/minecraft_tnt.webp')} name='trol' prise='400'/>
    <BoxDonait src={require('../../Asets/IMG/donaite9.webp')} name='dreame' prise='500'/>
    <BoxDonait src={require('../../Asets/IMG/donaite7.webp')} name='admin' prise='1000'/>
    <BoxDonait src={require('../../Asets/IMG/donaite8.webp')} name='Soruk' prise='4000'/>

</section>

            <Footer/>
        </div>

    );
};

export default Donait;