import React from "react";
import style from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.logo}>Logo</div>
            <div className={style.info}>
                <div>Tel. 0507-1368-1420</div>
                <div>상호: 경주 동궁펜션 | 대표자: 000 | 사업자번호: 000-00-00000</div>
                <div>주소: 경북 경주시 북군2길 28-4</div>
                <div>Copyright ⓒ 경주동궁펜션 All Rights Reserved</div>
            </div>
        </div>
    );
}

export default Footer;
