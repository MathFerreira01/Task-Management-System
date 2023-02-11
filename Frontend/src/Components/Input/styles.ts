import styled from "styled-components";

export const TextField = styled.input`
    width: 100%;
    padding: 11px 13px;
    background: #212121;
    color: #E9E9F2;
    margin-bottom: 0.9rem;
    border-radius: 4px;
    outline: 0;
    border: none;
    font-size: 14px;
    transition: all 0.3s ease-out;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
    :focus,
    :hover {
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
    }
`;