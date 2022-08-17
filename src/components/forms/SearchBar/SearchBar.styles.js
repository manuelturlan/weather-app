import styled from "styled-components";

export const Form = styled.form`
  display: grid;
  justify-content: end;
  @media screen and (max-width: 450px) {
    justify-content: center;
  }
`;

export const InputButton = styled.input`
  display: grid;
  background-color: #bc5d0c;
  font-size: 1.2rem;
  width: 100%;
  color: #fff;
  border: none;
  font-weight: 600;
  grid-column: 2 / 3;
  cursor: pointer;
  @media screen and (max-width: 280px) {
    font-size: 1rem;
  }
`;

export const InputText = styled.input`
  background-color: #fff;
  justify-self: end;
  display: grid;
  border-radius: 5%;
  outline: none;
  width: 90%;
  @media screen and (max-width: 450px) {
    justify-self: end;
    width: 80%;
  }
  /* @media screen and (max-width: 280px) {
    font-size: 0.8rem;
    width: 60%;
    justify-self: center;
  } */
`;
