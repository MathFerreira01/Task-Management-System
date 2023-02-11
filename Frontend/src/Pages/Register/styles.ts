import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Wrapper = styled.section`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Form = styled.form`
    width: 100%;
    max-width: 414px;
    padding: 1.3rem;
    display: flex;
    flex-direction: column;
`;

export const Label = styled.label`
    color: #E9E9F2;
    padding-bottom: 5px;
`;

export const Span = styled.span`
    color: #76787A;
    padding-bottom: 5px;
    text-align: center;
    padding-bottom: 1.5em;
`;

export const MenuLink = styled(Link)`
    color: #636AF2;
    text-decoration: none;
`;

export const Title = styled.h2`
    font-weight: 500;
    color: #E9E9F2;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
`;