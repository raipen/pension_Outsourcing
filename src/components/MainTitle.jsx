import styled from "styled-components";
import LinkButton from "./LinkButton";

const Container = styled.div`
    position: absolute;
    display: flex;
    position: absolute;
    flex-direction: column;
    align-items: ${props=>props.dir==="left"?"flex-start":"flex-end"};
    justify-content: center;
    top: ${props=>props.top};
    ${props=>props.dir}: calc(50% - 600px);

    >div{
        font-family: Julius Sans One, Noto Sans KR, sans-serif;
        font-size: 96px;
        font-weight: 400;
        color: #352A3A;
        margin-bottom: 1rem;
    }
    
    @media (max-width: 1200px){
        ${props=>props.dir}: 20px;
        top: 80px;
        >div{font-size: 60px;}
    }
`;


const MainTitle = ({title, buttonText, dir, top, link}) => {
    return (
        <Container dir={dir} top={top?top:"80px"}>
            <div>{title}</div>
            <LinkButton text={buttonText} link={link} />
        </Container>
    );
};

export default MainTitle;