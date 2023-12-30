import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import "./weather.css"
import WeatherCrad from "./WeatherCrad"



function Weather() {
  const [serachVal,setSearchVal]=useState("pune")
  const [tempInfo,setTempInfo]=useState({})

  const getWeatherInfo = async ()=>{
    try {
      let url=`https://api.openweathermap.org/data/2.5/weather?q=${serachVal}&units=metric&appid=b9d10e0dc3f62fd534213960aff4f312`;

      let res=await fetch(url);
      let data=await res.json();

      const {temp,humidity,pressure}=data.main;
      const {main:weather}=data.weather[0];
      const {name}=data;
      const {speed}=data.wind;
      const {country,sunset}=data.sys;

      const myNewWeatherInfo={
        temp,
        humidity,
        pressure,
        weather,
        name,
        speed,
        country,
        sunset,
      };

      setTempInfo(myNewWeatherInfo)
      console.log(temp)
      
    } catch (error) {
      document.write(error);
    }
  }; 

  useEffect(()=>{
    getWeatherInfo();
  },[]);
  return (
    <>
      <Form className="d-flex justify-content-center">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2 w-25 mt-5"
          aria-label="Search"
          value={serachVal}
          onChange={(e)=>setSearchVal(e.target.value)}
        />
        <Button variant="outline-success mt-5" onClick={getWeatherInfo}>Search</Button>
      </Form>
      <WeatherCrad tempInfo={tempInfo}/>
    </>
  );
}

export default Weather;
