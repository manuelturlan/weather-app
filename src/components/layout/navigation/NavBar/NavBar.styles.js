import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: #212323;
  position: fixed;
  height: 2.5rem;
  width: 100%;
  @media screen and (max-width: 450px) {
    justify-content: start;
    grid-template-columns: 1fr;
    height: 5rem;
  }
`;

export const SpanText = styled.span`
  &:nth-child(1) {
    margin-left: 4rem;
    @media screen and (max-width: 450px) {
      display: grid;
      justify-self: center;
      font-size: 1rem;
    }
    @media screen and (max-width: 280px) {
      width: 60%;
    }
  }
  &:nth-child(2) {
    display: none;
  }
`;

export const StyledLink = styled(Link)`
  color: #fff;
  font-weight: 500;
  text-decoration: none;
  font-size: 1.5rem;
`;
