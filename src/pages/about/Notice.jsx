import React,{useEffect} from "react";
import ReactMarkdown from "react-markdown";
import Title from '../../components/Title';
import SubTitle from '../../components/SubTitle';
import BlurCircle from '../../components/BlurCircle';
import styled from 'styled-components';

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
    >*:nth-child(1){
        margin-top: 0;
    }
    >h1{
        font-size: 1.5rem;
        line-height: 1.5rem;
    }
    >h1::before{
        content: "|";
        margin-right: 10px;
    }
    >h2{
        font-size: 1.2rem;
        line-height: 1.8rem;
    }
    >h2::before{
        content: "-";
        margin-right: 10px;
    }
    >h3{
        font-size: 1.1rem;
        line-height: 1.5rem;
    }
    li{
        font-size: 1rem;
        line-height: 1.8rem;
    }
    li::marker{
        font-size: 0.8rem;
    }
`;

const Notice = () => {
    const [markdown, setMarkdown] = React.useState("");
    useEffect(() => {
        window.scrollTo(0, 0);
        fetch("/notice.md")
            .then((res) => res.text())
            .then((text) => {
                setMarkdown(text);
            });
    }, []);

    return (
        <div style={{ position: "relative", overflow: "hidden", minHeight: "100vh" }}>
            <Title title="NOTICE" />
            <SubTitle
                subTitle="공지사항"
                description="동궁펜션의 공지사항을 알려드립니다."
            />
            <Box>
                <ReactMarkdown children={markdown} />
            </Box>
            <div style={{ height: "100px" }}></div>
            <BlurCircle zIndex="-1" color="#80E8FF" top="calc(226px + 10vw)" left="-15vw" m_top="calc(226px + 10vw)" />
            <BlurCircle zIndex="-1" color="#FFAEFC" top="calc(226px + 50vh)" right="-15vw" m_top="calc(226px + 50vh)" />
            <BlurCircle zIndex="-1" color="#C4CFFF" bottom="calc(-15vw)" left="10vw" m_bottom="calc(-15vw)" />
        </div>
    );
}

export default Notice;