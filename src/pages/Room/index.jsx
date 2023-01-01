import React from 'react';
import room1 from '../../images/room1.jpg';
import room2 from '../../images/room2.jpg';
import room3 from '../../images/room3.jpg';
import room4 from '../../images/room4.png';
import room5 from '../../images/room5.jpg';
import room6 from '../../images/room6.jpg';
import room7 from '../../images/room7.jpg';
import room8 from '../../images/room8.jpg';
import AutoImgSlider from '../../components/AutoImgSlider';
import Title from '../../components/Title';
import SubTitle from '../../components/SubTitle';
import BlurCircle from '../../components/BlurCircle';
import LinkButton from '../../components/LinkButton';
import styled from 'styled-components';

const RoomInfo = styled.div`
    width: 100vw;
    max-width: 1200px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    margin: 0 auto;
    >div{
        width: 50%;
    }
`;

const Pictures = styled.div`
    width: 50%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 10px;
`;

const Box = styled.div`
    width: 100vw;
    max-width: 1200px;
    border: 3px solid transparent;
    border-radius: 20px;
    box-sizing: border-box;
    background-image: Linear-gradient(180deg, #fff 0%, #fff 100%), Linear-gradient(180deg, #F6EAFF 0%, #B0C4FF 100%);
    background-origin: padding-box, border-box;
    background-clip: padding-box, border-box;
    padding: 20px;
    margin: 0 auto;
`;

const Room = () => {
    const money = {
        "비수기": ["270,000", "350,000", "490,000", "300,000"],
        "준성수기": ["400,000", "350,000", "490,000", "400,000"],
        "성수기": ["500,000", "500,000", "500,000", "490,000"]
    };

    return (
        <div style={{ position: "relative", overflow: "hidden", minHeight: "100vh" }}>
            <Title title="ROOM" />
            <SubTitle
                subTitle="객실사진"
            />
            <AutoImgSlider imgList={[room1, room2, room3, room4]} isRelative={true} />
            <div style={{ height: "100px" }}></div>
            <RoomInfo>
                <Pictures>
                    {[room5, room6, room7, room8].map((img, index) => {
                        return <img key={index} src={img} alt="room" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    })}
                </Pictures>
                <div>
                    <SubTitle
                        subTitle="객실소개"
                        description="침실방 (퀸사이즈 침대3개)3개와 화장실2개 그리고 넓은 거실과 여럿이 사용 가능한 주방이 있어 세가족 또는 단체가 오셔도 편안하게 이용하실 수 있습니다."
                        margin={{ left: "auto", right: "auto" }}
                    />
                    <LinkButton link="/reservation" text="예약하기" />
                </div>
            </RoomInfo>
            <div style={{ height: "100px" }}></div>
            <SubTitle
                subTitle="객실요금"
            />
            <Box>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                    <thead>
                        <tr>
                            <th style={{ border: "1px solid #000", padding: "10px" }}>시기</th>
                            <th style={{ border: "1px solid #000", padding: "10px" }}>주중</th>
                            <th style={{ border: "1px solid #000", padding: "10px" }}>금요일</th>
                            <th style={{ border: "1px solid #000", padding: "10px" }}>토요일</th>
                            <th style={{ border: "1px solid #000", padding: "10px" }}>일요일</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(money).map((key, index) => {
                            return (
                                <tr key={index}>
                                    <td style={{ border: "1px solid #000", padding: "10px" }}>{key}</td>
                                    {money[key].map((m, index) => {
                                        return <td key={index} style={{ border: "1px solid #000", padding: "10px" }}>{m}</td>
                                    })}
                                </tr>
                            )
                        }
                        )}
                    </tbody>
                </table>
            </Box>
            <div style={{ height: "100px" }}></div>
            <BlurCircle zIndex="-1" color="#80E8FF" top="calc(226px + 10vw)" left="-15vw" m_top="calc(226px + 10vw)" />
            <BlurCircle zIndex="-1" color="#FFAEFC" top="calc(226px + 150vh)" right="-15vw" m_top="calc(226px + 150vh)" />
            <BlurCircle zIndex="-1" color="#C4CFFF" bottom="calc(-15vw)" left="10vw" m_bottom="calc(-15vw)" />
        </div>
    );
}

export default Room;