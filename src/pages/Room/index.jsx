import React, { useEffect } from 'react';
import ReactMarkdown from "react-markdown";
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
import PriceTable from './PriceTable';
import styled from 'styled-components';

const RoomInfo = styled.div`
    width: calc(100vw - 40px);
    max-width: 1200px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 60px;
    margin: 0 auto;
    >div{
        width: 50%;
    }
    @media (max-width: 1200px){
        flex-direction: column-reverse;
        gap: 20px;
        >div{
            width: 100%;
        }
    }
`;

const MarkdownBox = styled.div`
    >*{
        margin-block: 0;
    }
    >p{
        line-height: 1.56rem;
    }
    >h1{
        font-size: 1.5rem;
        margin-top: 5rem;
    }
    >h2{
        font-size: 1.3rem;
        margin-top: 1rem;
    }
    >h2::before{
        content: "-";
        margin-right: 10px;
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

const TableBox = styled.div`
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
    const [markdown, setMarkdown] = React.useState("");
    useEffect(() => {
        window.scrollTo(0, 0);
        fetch("/info.md")
            .then((res) => res.text())
            .then((text) => {
                setMarkdown(text);
            });
    }, []);

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
                        margin={{ top: "0px", left: "auto", right: "auto" }}
                    />
                    <div style={{ textAlign: "right", marginBottom: "3rem" }}>
                        <LinkButton href="https://naver.me/GvXbLTLU" text="예약하기" />
                    </div>
                    <MarkdownBox>
                        <ReactMarkdown children={markdown} />
                    </MarkdownBox>
                </div>
            </RoomInfo>
            <div style={{ height: "100px" }}></div>
            <SubTitle
                subTitle="객실요금"
            />
            <TableBox>
                <PriceTable />
            </TableBox>
            <div style={{ height: "100px" }}></div>
            <BlurCircle zIndex="-1" color="#80E8FF" top="calc(226px + 10vw)" left="-15vw" m_top="calc(226px + 10vw)" />
            <BlurCircle zIndex="-1" color="#FFAEFC" top="calc(226px + 150vh)" right="-15vw" m_top="calc(226px + 150vh)" />
            <BlurCircle zIndex="-1" color="#C4CFFF" bottom="calc(-15vw)" left="10vw" m_bottom="calc(-15vw)" />
        </div>
    );
}

export default Room;