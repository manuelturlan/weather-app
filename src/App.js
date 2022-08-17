import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/layout/navigation/NavBar/NavBar";
import Cards from "./components/Cards/Cards";
import CityDetail from "./components/layout/CityDetail/CityDetail";

function App() {
  const [cities, setCities] = useState([]);
  const apiKey = "ff508f41cbb6b5d48590305c5061064b";

  function onSearch(city) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    )
      .then((r) => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const city = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
          };

          setCities((oldCities) => {
            if (oldCities.length === 0) {
              return [...oldCities, city];
            } else {
              let arr = [...oldCities];
              for (let i = 0; i < arr.length; i++) {
                if (city.name === arr[i].name) {
                  alert("La ciudad que estás intentando agregar ya existe.");
                  return [...oldCities];
                }
              }
              return [...oldCities, city];
            }
          });
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }

  function onClose(cityId) {
    setCities((oldCities) => oldCities.filter((c) => c.id !== cityId))
  }


  return (  
    <React.Fragment>
      <NavBar onSearch={onSearch}></NavBar>
      <Routes>
        <Route path="/" element={<Cards cities={cities} onClose={onClose}></Cards>}></Route>
        <Route path="/ciudad/:id" element={<CityDetail city={cities}></CityDetail>}></Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
