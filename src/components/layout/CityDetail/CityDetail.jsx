import React from "react";
import { useParams } from "react-router-dom";
import {
  CardContainer,
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
        <CityInfo>
          <SubTitle>Ciudad </SubTitle>
          <Text>{theCity.name}</Text>
          <SubTitle>Latitud </SubTitle>
          <Text>{theCity.latitud}</Text>
          <SubTitle>Longitud </SubTitle>
          <Text>{theCity.longitud}</Text>
          <SubTitle>Viento </SubTitle>
          <Text>{theCity.wind}</Text>
          <SubTitle>Nubes </SubTitle>
          <Text>{theCity.clouds}</Text>  
        </CityInfo>
      </CardContainer>
    );
  } else {
    return (
      <CardContainer>
        <h1>No se encontró ninguna ciudad</h1>
      </CardContainer>
    )
  }
  
};

export default CityDetail;
