import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background: rgb(238, 174, 202);
  background: radial-gradient(
    circle,
    rgba(238, 124, 102, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
`;

export const Title = styled.h1`
  text-align: center;
  color: #fff;
  font-weight: 600;
  position: relative;
  top: 3.5rem;
  margin: 0;
  @media screen and (max-width: 450px) {
    top: 7rem;
  }
`;

export const CityInfo = styled.div`
  display: grid;
  margin-top: 7rem;
  row-gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  background-image: linear-gradient(
    68.4deg,
    rgba(109, 91, 225, 11) -0.4%,
    rgba(15, 122, 150, 1) 100.2%
  );
  justify-self: end;
  border-radius: 20px;
  box-shadow: 14px 4px 41px 32px rgba(47,126,186,0.83);
-webkit-box-shadow: 14px 4px 41px 32px rgba(47,126,186,0.83);
-moz-box-shadow: 14px 4px 41px 32px rgba(47,126,186,0.83);
  min-width: 50%;
  @media screen and (max-width: 500px) {
    margin-top: 10rem;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
`;

export const SubTitle = styled.p`
  display: grid;
  color: #fff;
  font-weight: 600;
  text-decoration: underline;
  justify-self: center;
  @media screen and (max-width: 500px) {
    font-size: 1rem;
  }
`;

export const Text = styled.p`
  display: grid;
  font-weight: 600;
  color: #fff;
  justify-self: center;
  @media screen and (max-width: 500px) {
    font-size: 0.8rem;
  }
`;
