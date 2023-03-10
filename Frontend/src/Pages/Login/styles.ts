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

export const MessageError = styled.p`
  font-size: 0.9em;
  color: #bd0b20;
  text-align: center;
`;

export const Span = styled.span`
    padding-top: 0.8em;
    color: #7A7A7A;
    text-align: center;
`;

export const MenuLink = styled(Link)`
    color: #636AF2;
    text-decoration: none;
`;

export const Title = styled.h2`
    font-weight: normal;
    color: #E9E9F2;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
`;
