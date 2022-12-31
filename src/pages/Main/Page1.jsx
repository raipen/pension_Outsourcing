import React from 'react';
import style from './Page1.module.css';
import BlurCircle from '../../components/BlurCircle';

const Info = () => {
  return (
    <div className={style.info}>
      <div className={style.title}>
        DONGGUNG<br />
        PENSION
      </div>
      <div className={style.subTitle}>
        | 경주 한옥 독채 펜션
      </div>
      <div className={style.description}>
        경주 보문단지 초입에 위치한 한옥독채 펜션입니다. <br />
        도보 5분이내에 동궁원, 버드파크, 보문호수를 즐기실 수 있고 펜션 입구길에<br />
        보문 맷돌순두부, 함양집, 낙지마실등 맛집들이 즐비하여있습니다.
      </div>
    </div>
  );
}

const Page1 = () => {
  return (
    <div className={style.main}>
      <BlurCircle top="-15vw" left="-15vw" color="#80E8FF" />
      <BlurCircle right="-15vw" bottom="-15vw" m_bottom="-15vw" color="#FFAEFC" />
      <div className={style.img1}>
        <Info/>
      </div>
      <div className={style.img2} />
      <Info />
    </div>
  );
}

export default Page1;