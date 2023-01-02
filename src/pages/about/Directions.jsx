import React,{useEffect,useRef} from 'react';
import Title from '../../components/Title';
import SubTitle from '../../components/SubTitle';
import BlurCircle from '../../components/BlurCircle';
import styled from 'styled-components';

const Map = styled.div`
  width: 80vw;
  max-width: 1100px;
  height: calc(80vw * 675 / 1200);
  max-height: 675px;
  margin: 0 auto;
  z-index: 0;
`;

const Direction = ()=> {
    const mapElement = useRef(null);

    useEffect(() => {
      window.scrollTo(0, 0);
      const { naver } = window;
      if (!mapElement.current || !naver) return;

      // 지도에 표시할 위치의 위도와 경도 좌표를 파라미터로 넣어줍니다.
      const location = new naver.maps.LatLng(35.853495, 129.262862);
      const mapOptions = {
        center: location,
        zoom: 14,
        zoomControl: true,
        zoomControlOptions: {
          position: naver.maps.Position.TOP_RIGHT,
        },
      };
      const map = new naver.maps.Map(mapElement.current, mapOptions);
      new naver.maps.Marker({
        position: location,
        map,
      });
    }, []);

    
    return (
      <div style={{position:"relative", overflow:"hidden", minHeight:"100vh"}}>
        <Title title="DIRECTION"/>
        <SubTitle 
          subTitle="오시는 길"
          description="동궁펜션에 오시는 길을 안내해드리겠습니다."
        />
        <Map ref={mapElement} />
        <SubTitle 
          subTitle="주소"
          description="- 경북 경주시 북군2길 28-4 동궁펜션(북군동 196-5)"
        />
        <div style={{height:"100px"}}></div>
        <BlurCircle zIndex="-1" color="#80E8FF" top="calc(226px + 10vw)" left="-15vw" m_top="calc(226px + 10vw)"/>
        <BlurCircle zIndex="-1" color="#FFAEFC" top="calc(226px + 50vh)" right="-15vw" m_top="calc(226px + 50vh)"/>
        <BlurCircle zIndex="-1" color="#C4CFFF" bottom="calc(-15vw)" left="10vw" m_bottom="calc(-15vw)"/>
      </div>
    );
}

export default Direction;