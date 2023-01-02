import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export const ImgSliderItem = styled.div`
  width: calc(200vh - 620px);
  max-width: 1200px;
  height: 100%;
  background-image: url(${props => props.bgImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  @media screen and (max-width: 1200px){
    width: calc(100vw - 20px);
  }
`;

export const ImgSlider = styled.div`
  width: calc(200vh - 620px);
  max-width: 1200px;
  height: calc(100vh - 310px);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  ${p=>p.isRelative? `position: relative;`: `position: absolute;
  top: 250px;
  left: 50%;
  transform: translateX(-50%);`}
  margin: 0 auto;
  >div{
    width: ${p=>p.count}00%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    position: absolute;
    left: -${props => props.left}00%;
    transition: left 0.5s;
  }

  @media screen and (max-width: 1200px){
    width: calc(100vw - 20px);
    height: calc(50vw - 10px);
    ${p=>p.isRelative? "":`left: 10px; transform: none;`}
  }
`;

export const SliderBtn = styled.div`
  width: 100%;
  height: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${p=>p.isRelative? `position: relative; margin: 20px auto;`: `position: absolute;
  top: calc(100vh - 35px);`}
  left: 0;
  >div{
    width: 50px;
    height: 10px;
    background-color: #aaa;
    margin: 0 10px;
    cursor: pointer;
  }

  @media screen and (max-width: 1200px){
    ${p=>p.isRelative? `margin: 20px auto;`:`top: calc(50vw + 260px);`}
  }
`;

const AutoImgSlider = ({ imgList, isRelative }) => {
    const [left, setLeft] = useState(0);
    const handleLeft = value => e => {
        setLeft(value);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if(left === imgList.length - 1) setLeft(0);
            else setLeft(left + 1);
        }, 3000);
        return () => clearInterval(interval);
    }, [left,imgList.length]);

    const buttons = [];
    for (let i = 0; i < imgList.length; i++) {
        buttons.push(
            <div
                key={i + 1}
                style={{
                    backgroundColor: left === i ? "#352A3A" : "#aaa"
                }}
                onClick={handleLeft(i)}
            />
        )
    }

    return (
        <>
            <ImgSlider left={left} count={imgList.length} isRelative={isRelative}>
                <div>
                    {imgList.map((img, index) => <ImgSliderItem key={index+1} bgImg={img} />)}
                </div>
            </ImgSlider>
            <SliderBtn isRelative={isRelative}>
                {buttons}
            </SliderBtn>
        </>
    );
};

export default AutoImgSlider;