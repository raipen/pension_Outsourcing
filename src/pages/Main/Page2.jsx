import React,{useState,useEffect} from 'react';
import LinkButton from '../../components/LinkButton';
import style from './Page2.module.css';
import styled from 'styled-components';
import room1 from '../../images/room1.jpg';
import room2 from '../../images/room2.jpg';
import room3 from '../../images/room3.jpg';


const ImgSliderItem = styled.div`
  width: 100vw;
  height: 100%;
  background-image: url(${props => props.bgImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const ImgSlider = styled.div`
  width: calc(200vh - 620px);
  height: calc(100vh - 310px);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: absolute;
  top: 250px;
  left: calc(50vw - 100vh + 310px);
  >div{
    width: 300%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    position: absolute;
    left: ${props => props.left};
    transition: left 0.5s;
  }

  @media screen and (max-width: 1200px){
    width: calc(100vw - 20px);
    height: calc(50vw - 10px);
    left: 10px;
  }
`;

const SliderBtn = styled.div`
  width: 100%;
  height: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: calc(100vh - 35px);
  left: 0;
  >div{
    width: 50px;
    height: 10px;
    background-color: #aaa;
    margin: 0 10px;
    cursor: pointer;
  }

  @media screen and (max-width: 1200px){
    top: calc(50vw + 260px);
  }
`;

const Page2 = () => {
  const [left, setLeft] = useState(0);

  const handleLeft = value => e => {
    setLeft(value);
  };

  useEffect(() => {
     const interval = setInterval(() => {
      switch(left){
        case 0:
          setLeft("-100%");
          break;
        case "-100%":
          setLeft("-200%");
          break;
        case "-200%":
          setLeft(0);
          break;
        default:
          setLeft(0);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [left]);

  return (
    <div className={style.main}>
      <div className={style.title}>
        <div className={style.titleName}>ROOM</div>
        <LinkButton text="View Room" link="/room" />
      </div>
      <ImgSlider left={left}>
        <div>
          <ImgSliderItem bgImg={room1} />
          <ImgSliderItem bgImg={room2} />
          <ImgSliderItem bgImg={room3} />
        </div>
      </ImgSlider>
      <SliderBtn>
        {[0, "-100%", "-200%"].map((value, index) => {
          return (
            <div
              key={index+1}
              style={{
                backgroundColor: left === value ? "#352A3A" : "#aaa"
              }}
              onClick={handleLeft(value)}
            />
          );
        })}
      </SliderBtn>
    </div>
  );
}

export default Page2;