import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Button = styled.button`
    background-color: #352A3A;
    border: none;
    border-radius: 20px;
    color: white;
    height: 2.5rem;
    width: 8.5rem;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 1rem;
    cursor: pointer;
`;

const LinkButton = ({text, link, href}) => {
    if(href)
        return (
            <a href={href} target="_blank">
                <Button>{text}</Button>
            </a>
        );
    return (
        <Link to={link}>
            <Button>{text}</Button>
        </Link>
    );
}
export default LinkButton;