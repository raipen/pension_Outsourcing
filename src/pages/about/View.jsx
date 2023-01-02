import React, { useEffect } from 'react';
import view1 from '../../images/view1.jpg';
import view2 from '../../images/view2.jpg';
import view3 from '../../images/view3.jpg';
import AutoImgSlider from '../../components/AutoImgSlider';
import Title from '../../components/Title';
import SubTitle from '../../components/SubTitle';
import BlurCircle from '../../components/BlurCircle';

const View = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div style={{ position: "relative", overflow: "hidden", minHeight: "100vh" }}>
      <Title title="VIEW" />
      <SubTitle
        subTitle="외부 전경"
        description="동궁펜션의 아름다운 풍경을 구경해보세요."
      />
      <AutoImgSlider imgList={[view1, view2, view3]} isRelative={true} />
      <div style={{ height: "100px" }}></div>
      <BlurCircle zIndex="-1" color="#80E8FF" top="calc(226px + 10vw)" left="-15vw" m_top="calc(226px + 10vw)" />
      <BlurCircle zIndex="-1" color="#FFAEFC" top="calc(226px + 50vh)" right="-15vw" m_top="calc(226px + 50vh)" />
      <BlurCircle zIndex="-1" color="#C4CFFF" bottom="calc(-15vw)" left="10vw" m_bottom="calc(-15vw)" />
    </div>
  );
}

export default View;