import React from 'react';
import LinkButton from '../../components/LinkButton';
import style from './Page2.module.css';


const Page2 = ()=> {
    return (
      <div className={style.main}>
        <div>
          <div className = {style.title}>ROOM</div>
          <LinkButton text="View Room" />
        </div>
      </div>
    );
}

export default Page2;