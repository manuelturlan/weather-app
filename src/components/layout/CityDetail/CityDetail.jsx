import React from "react";
import { useParams } from "react-router-dom";
import {
  CardContainer,
  Title,
  SubTitle,
  Text,
  CityInfo,
} from "./CityDetail.styles";

const CityDetail = ({ city }) => {
  let { id } = useParams();
  function onFilter(cityId) {
    let theCity = city.filter((c) => c.id === parseInt(cityId));
    if (theCity.length > 0) {
      return theCity[0];
    }

    return null;
  }

  let theCity = onFilter(id);

  if (theCity) {
    return (
      <CardContainer>
        <Title>Detalles de la ciudad</Title>
        <CityInfo>
          <SubTitle>Ciudad </SubTitle>
          <SubTitle>Latitud </SubTitle>
          <SubTitle>Longitud </SubTitle>
          <SubTitle>Viento </SubTitle>
          <SubTitle>Nubes </SubTitle>
          <Text>{theCity.name}</Text>
          <Text>{theCity.latitud}</Text>
          <Text>{theCity.longitud}</Text>
          <Text>{theCity.wind}</Text>
          <Text>{theCity.clouds}</Text>
        </CityInfo>
      </CardContainer>
    );
  } else {
    return (
      <CardContainer>
        <Title>No se encontró ninguna ciudad</Title>
      </CardContainer>
    )
  }
  
};

export default CityDetail;
