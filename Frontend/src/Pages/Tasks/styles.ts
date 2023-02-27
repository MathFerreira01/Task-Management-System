import styled from "styled-components";

export const Container = styled.section`
  margin-top: 2em;
  display: grid;
  grid-template-columns: 345px 345px 345px 345px;
  gap: 1em;
  justify-content: center;

  @media (max-width: 1500px) {
    margin: 2em;
    display: flex;
    flex-wrap: wrap;
  }
`;
