import React from "react";
import { Cards, Title, SubTitle, Button, MinMax, Img, StyledLink } from "./Card.styles";

const Card = ({ city, onClose, id }) => {
  return (
    <Cards>
      <Title><StyledLink to={`ciudad/${id}`}>{city.name}</StyledLink></Title>
      <Button onClick={() => onClose(id)}>X</Button>
      <SubTitle>MIN</SubTitle>
      <SubTitle>MAX</SubTitle>
      <MinMax>{city.min} °C</MinMax>
      <MinMax>{city.max} °C</MinMax>
      <Img
        src={`http://openweathermap.org/img/wn/${city.img}@2x.png`}
        alt="clima"
      ></Img>
    </Cards>
  );  
};

export default Card;
