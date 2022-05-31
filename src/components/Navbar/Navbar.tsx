import React from "react";
import s from './Navbar.module.css';


export const Navbar = () => {
    return (
        <nav className={s.aside}>
            <div className={s.item}>
                <a href="#">
                    Profile
                </a>
            </div>
            <div>
                <a className={`${s.item} ${s.active}`} href="#">
                    Messages
                </a>
            </div>
            <div className={s.item}>
                <a href="#">
                    News
                </a>
            </div>
            <div className={s.item}>
                <a href="#">
                    Music
                </a>
            </div>
            <div className={`${s.aside_settings} ${s.item}`}>
                <a href="#">
                    Settings
                </a>
            </div>

        </nav>
    )
}

