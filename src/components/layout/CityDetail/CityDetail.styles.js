import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  min-height: 100vh;
  background: rgb(238, 174, 202);
  background: radial-gradient(
    circle,
    rgba(238, 124, 102, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
`;

export const CityInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-self: flex-end;
  margin-top: 2rem;
  min-width: 40%;
  height: 33rem;
  background-image: linear-gradient(
    68.4deg,
    rgba(109, 91, 225, 11) -0.4%,
    rgba(15, 122, 150, 1) 100.2%
  );
  border-radius: 20px;
  box-shadow: 14px 4px 41px 32px rgba(47,126,186,0.83);
-webkit-box-shadow: 14px 4px 41px 32px rgba(47,126,186,0.83);
-moz-box-shadow: 14px 4px 41px 32px rgba(47,126,186,0.83);
  @media screen and (max-width: 450px) {
   margin-top: 5rem;
   height: 27rem;
  }
  @media screen and (max-width: 410px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const SubTitle = styled.p`
  display: flex;
  color: #fff;
  font-weight: 600;
  text-decoration: underline;
  align-self: center;
  @media screen and (max-width: 500px) {
    font-size: 0.8rem;
  }
`;

export const Text = styled.p`
  display: flex;
  font-weight: 600;
  color: #fff;
  align-self: center;
  @media screen and (max-width: 500px) {
    font-size: 0.8rem;
  }
`;
