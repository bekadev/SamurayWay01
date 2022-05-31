import React from "react";
import s from './Main.module.css';
import {MyPosts} from "./MyPosts/MyPosts";



export const Main = () => {
    return (
        <div className='main'>
            <div >
                <img className={s.img} src="https://www.researchgate.net/profile/Georg-Waltner-2/publication/329620436/figure/fig1/AS:759099822206979@1557994909846/Image-sequence-and-views-of-the-reconstructed-point-cloud-a-j-images-from-the.ppm"/>
            </div>
            <div className={s.flex}>
                <div>
                    <img className={s.main_user} src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"/>
                </div>
                <div className={s.info}>
                    <h4>Bekzat K.</h4>
                    <p>Date of Birth: 22 February</p>
                    <p>City: Almaty</p>
                    <p>Education: KAU</p>
                    <p>Web Site: bekadev.kz</p>
                </div>
            </div>
            <MyPosts/>
        </div>
    )
}

