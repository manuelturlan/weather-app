import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-image: linear-gradient(
    68.4deg,
    rgba(109, 91, 225, 11) -0.4%,
    rgba(15, 122, 150, 1) 100.2%
  );
  height: 20rem;
  min-width: 60%;
  width: auto;
  margin-top: 4rem;
  margin-bottom: 1rem;
  border-radius: 10%;
  
  @media screen and (max-width: 420px) {
    margin-top: 8rem;
    height: 15rem;
  }

  @media screen and (max-width: 450px) {
    margin-top: 6rem;
  }
`;

export const Title = styled.h3`
  display: grid;
  justify-self: center;
  grid-column: 1/3;
  color: #fff;
  font-size: 1.5rem;

  @media screen and (max-width: 920px) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 430px) {
    font-size: 1rem;
  }
`;

export const SubTitle = styled.span`
  display: grid;
  font-weight: 600;
  justify-self: center;
  color: #fff;
  font-size:1.2rem;
  @media screen and (max-width: 920px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 430px) {
    font-size: 0.8rem;
  }
`;

export const MinMax = styled.p`
  display: grid;
  font-weight: 600;
  justify-self: center;
  color: #fff;
  @media screen and (max-width: 920px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 430px) {
    font-size: 0.8rem;
  }
`

export const Button = styled.button`
  display: grid;
  justify-self: end;
  grid-row: 1/2;
  grid-column: 1/3;
  border: none;
  background-color: #E82167;
  cursor: pointer;
  color: #fff;
  font-size: 1.7rem;
  font-weight: 600;
  width: 2rem;
  height: 2rem;
  border-radius: 30%;
`;

export const Img = styled.img`
  display: grid;
  justify-self: center;
  grid-column: 1/3;
`

export const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: overline;
  text-decoration: underline;
`;
