import React, {useState} from 'react';
import MainTitle from '../../components/MainTitle';
import style from './Page3.module.css';
import styled from 'styled-components';
import service1 from '../../images/service1.jpg';
import service2 from '../../images/service2.jpg';
import service3 from '../../images/service3.jpg';
import service4 from '../../images/service7.jpeg';
import service5 from '../../images/service8.jpeg';
import LinkButton from '../../components/LinkButton';

const ImgSliderItem = styled.div`
  width: 100vw;
  height: 100%;
  background-image: url(${props => props.bgImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  >div{
    font-family: Julius Sans One,Noto Sans KR, sans-serif;
    padding: 0.4rem;
    background-color: rgba(53, 42, 58, 0.7);
    color: #fff;
    font-size: 4rem;
  }
  @media (max-width: 600px){
    >div{
      font-size: 24px;
    }
  }
`;

const ImgSlider = styled.div`
  width: calc(100vw - 6px);
  max-width: 1200px;
  height: calc(100vw / 3);
  max-height: 400px;
  display: flex;
  justify-content: center;
  border: 3px solid transparent;
  background-image: Linear-gradient(180deg, #F6EAFF 0%, #B0C4FF 100%);
  background-origin: border-box;
  background-clip: border-box;
  position: absolute;
  top: calc(50vh - 100px);
  left: calc(50vw - 600px);
  overflow: hidden;
  >div:nth-child(1){
    width: 600%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    position: absolute;
    left: ${props => props.left}%;
    transition: left 0.5s;
  }

  @media (max-width: 1200px){
    left: 0px;
    top: 250px;
  }
`;

const SliderBtn = styled.div`
  width: 3rem;
  height: 3rem;
  line-height: 3rem;
  font-size: 3rem;
  text-align: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
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
        setLeft(-500);
      else
        setLeft(left + 100);
    }

    const rightButton = () => {
      setLeft((left - 100)%600);
    }


    return (
      <div>
        <MainTitle title="SERVICE" buttonText="View Service" dir="left" top="calc(50vh - 300px)" link="/service"/>
        <ImgSlider left={left}>
        <div>
          <ImgSliderItem bgImg={service1}><div>SWIMMING POOL</div></ImgSliderItem>
          <ImgSliderItem bgImg={service2}><div>BONFIRE</div></ImgSliderItem>
          <ImgSliderItem bgImg={service3}><div>BARBEQUE</div></ImgSliderItem>
          <ImgSliderItem bgImg={service5}><div>SWIMMING POOL</div></ImgSliderItem>
          <ImgSliderItem bgImg={service4}><div>BONFIRE</div></ImgSliderItem>
          <ImgSliderItem bgImg={service2}><div>BARBEQUE</div></ImgSliderItem>
        
        </div>
        <SliderBtn onClick={leftButton} className="material-icons-outlined" left="0">arrow_back_ios</SliderBtn>
        <SliderBtn onClick={rightButton} className="material-icons-outlined" right="0">arrow_forward_ios</SliderBtn>
        </ImgSlider>
      </div>
    );
}

export default Page3;