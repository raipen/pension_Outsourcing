import React from 'react';
import MainTitle from '../../components/MainTitle';
import room1 from '../../images/room1.jpg';
import room2 from '../../images/room2.jpg';
import room3 from '../../images/room3.jpg';
import AutoImgSlider from '../../components/AutoImgSlider';


const Page2 = () => {
  return (
    <div>
      <MainTitle title="ROOM" buttonText="View Room" dir="right" link="/room" />
      <AutoImgSlider imgList={[room1,room2,room3]}/>
    </div>
  );
}

export default Page2;