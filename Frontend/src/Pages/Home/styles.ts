import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.section`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
export const Text = styled.h2`
    color: #E9E9F2;
    font-size: 1em;
`;
export const Title = styled.h1`
    color: #777DF2;
    font-size: 4em;
`;

export const Subtitle = styled(Text)`
    color: #7A7A7A;
`;

export const Wrapper = styled.div`
    margin-top: 3%;
`;

export const MenuLink = styled(Link)`
    padding: 0.7em 3.5em;
    border-radius: 10px;
    background-color: #636AF2;
    text-decoration: none;
    color: #E9E9F2;
    font-weight: 600;
    transition: ease all 0.2s;

    &:hover {
        background-color: #2F3273;
    }
`;