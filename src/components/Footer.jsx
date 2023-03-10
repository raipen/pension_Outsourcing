import React from "react";
import style from "./Footer.module.css";
import {removeMenu} from './Header';

const Footer = () => {
    return (
        <div className={style.footer} onClick={removeMenu}>
            <div className={style.logo}><img src="/logo.png" alt=""/></div>
            <div className={style.info}>
                <div>0507-1368-1420 / 010-2520-1420</div>
                <div>주소: 경북 경주시 북군2길 28-4 | 사업자번호: 175-47-00798</div>
                <div>Copyright ⓒ 경주동궁펜션 All Rights Reserved</div>
            </div>
        </div>
    );
}

export default Footer;