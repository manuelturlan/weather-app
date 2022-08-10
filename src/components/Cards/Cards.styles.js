import styled from "styled-components";

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  height: 100%;
  min-height: 100vh;
  background: rgb(238, 174, 202);
  background: radial-gradient(
    circle,
    rgba(238, 124, 102, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
  overflow: hidden;

  @media screen and (max-width: 850px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;
