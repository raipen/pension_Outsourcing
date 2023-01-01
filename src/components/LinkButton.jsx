import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Button = styled.button`
    background-color: #352A3A;
    border: none;
    border-radius: 20px;
    color: white;
    height: 36px;
    width: 140px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
`;
const LinkButton = ({text, link}) => {
    return (
        <Link to={link}>
            <Button>{text}</Button>
        </Link>
    );
}
export default LinkButton;