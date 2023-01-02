import React from 'react';
import Title from '../../components/Title';
import SubTitle from '../../components/SubTitle';
import service1 from '../../images/service5.jpg';
import service2 from '../../images/service4.jpg';
import service3 from '../../images/service6.jpg';
import styled from 'styled-components';

const ImgContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  height: 500px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin:100px auto;
  flex-direction: ${p=>p.direction};
  >img {
    width: 65%;
    height: 100%;
  }
  >div {
    width: calc(35% - 25px);
  }

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    height: auto;
    margin:30px auto;
    >img {
      width: 100vw;
      height: calc(100vw * 500 / 780);
    }
    >div {
      width: 100%;
    }
  }
`;


const ImgWithSubTitle = ({ img, subTitle, description, direction }) => {
  return (
    <ImgContainer direction={direction}>
      <img src={img} alt="img" />
      <SubTitle subTitle={subTitle} description={description} margin={{top:"0", left: "2.5rem"}} />
    </ImgContainer>
  );
}

const Service = ()=> {
  let serviceInfo = [
    [service1, "바베큐", "아름다운 자연과 함께 맛있는 바베큐 시간을 즐겨보세요!"],
    [service2, "수영장", "넓은 야외 수영장에서 신나는 물놀이를 즐겨보세요!"],
    [service3, "모닥불", "참나무 모닥불로 아름다운 불멍을 즐겨보세요!"]
  ]


    return (
      <div style={{ position: "relative", overflow: "hidden", minHeight: "100vh" }}>
        <Title title="SERVICE" />
        {serviceInfo.map((info, index) => {
          return (
            <ImgWithSubTitle
              key={index+1}
              img={info[0]}
              subTitle={info[1]}
              description={info[2]}
              direction={index % 2 === 0 ? "row" : "row-reverse"}
            />
          );
        })}
        <div style={{ height: "100px" }} />
      </div>
    );
}

export default Service;