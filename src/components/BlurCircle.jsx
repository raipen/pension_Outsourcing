import styled from "styled-components";

//top left 값 없으면 auto
const BlurCircle = styled.div`
    position: absolute !important;
    top: ${props => props.top ? props.top : "auto" } !important;
    left: ${props => props.left ? props.left : "auto"} !important;
    bottom: ${props => props.bottom ? props.bottom : "auto"} !important;
    right: ${props => props.right ? props.right : "auto"} !important;
    width:20vw !important;
    height:20vw !important;
    overflow: visible !important;
    background-color: ${props => props.color};
    filter: blur(10vw);
    ${props => props.zIndex ? "z-index: " + props.zIndex + " !important;" : ""}
    @media screen and (max-width: 1200px){
        top: ${props => props.m_top ? props.m_top : "auto" } !important;
        bottom: ${props => props.m_bottom ? props.m_bottom : "auto"} !important;
    }
`;

export default BlurCircle;