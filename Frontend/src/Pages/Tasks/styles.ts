import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 2em auto;
  width: 1425px;
  border-radius: 5px;
  background-color: #4d4d4c;

  @media (max-width: 1500px) {
    width: 1070px;
  }

  @media (max-width: 1100px) {
    width: 80%;
  }
`;

export const Title = styled.h2`
  text-align: center;
  padding: 0.5em;
  font-size: 1.4em;
  font-weight: 600;

  color: #e9e9f2;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ContainerTextfield = styled.div`
  margin: 1em;
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    width: 90%;
  }
`;

export const Label = styled.label`
  color: #e9e9f2;
  padding-bottom: 5px;
`;

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
