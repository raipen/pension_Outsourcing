import React, {useState} from 'react';
import LinkButton from '../../components/LinkButton';
import style from './Page3.module.css';
import styled from 'styled-components';
import service1 from '../../images/service1.jpg';
import service2 from '../../images/service2.jpg';
import service3 from '../../images/service3.jpg';

const ImgSliderItem = styled.div`
  width: 100vw;
  height: 100%;
  background-image: url(${props => props.bgImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const ImgSlider = styled.div`
  width: 100vw;
  max-width: 1200px;
  height: calc(100vw / 3);
  max-height: 400px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  border: 3px solid transparent;
  background-image: Linear-gradient(180deg, #F6EAFF 0%, #B0C4FF 100%);
  background-origin: border-box;
  background-clip: border-box;
  position: absolute;
  top: 250px;
  left: calc(50vw - 600px);
  overflow: hidden;
  >div:nth-child(1){
    width: 300%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    position: absolute;
    left: ${props => props.left}%;
    transition: left 0.5s;
  }

  @media screen and (max-width: 1200px){
    left: 0px;
  }
`;

const SliderBtn = styled.div`
  width: 48px;
  height: 48px;
  line-height: 48px;
  font-size: 48px;
  text-align: center;
  position: absolute;
  top: 50%;
  left: ${props => props.left? props.left : "auto"};
  right: ${props => props.right? props.right : "auto"};
  cursor: pointer;
  user-select: none;
  color: #fff;
`;


const Page3 =  ()=> {
    const [left, setLeft] = useState(0);

    const leftButton = () => {
      if(left === 0)
        setLeft(-200);
      else
        setLeft(left + 100);
    }

    const rightButton = () => {
      setLeft((left - 100)%300);
    }


    return (
      <div className={style.main}>
        <div className={style.title}>
          <div className = {style.titleName}>SERVICE</div>
          <LinkButton text="View Service" link="/service"/>
        </div>
        <ImgSlider left={left}>
        <div>
          <ImgSliderItem bgImg={service1} />
          <ImgSliderItem bgImg={service2} />
          <ImgSliderItem bgImg={service3} />
        </div>
        <SliderBtn onClick={leftButton} className="material-icons-outlined" left="0">arrow_back_ios</SliderBtn>
        <SliderBtn onClick={rightButton} className="material-icons-outlined" right="0">arrow_forward_ios</SliderBtn>
      </ImgSlider>
      </div>
    );
}

export default Page3;