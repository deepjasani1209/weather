import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";

function WeatherCrad({ tempInfo }) {
  let sec = tempInfo.sunset;
  let date = new Date(sec);
  let dateTime = `${date.getHours()}:${date.getMinutes()}`;
  const [weatherMood, setWeatherMood] = useState("");

  useEffect(() => {
    if (tempInfo.weather) {
      switch (tempInfo.weather) {
        case "Clouds":
          setWeatherMood("fa-solid fa-cloud");
          break;

        case "Haze":
          setWeatherMood("fa-regular fa-sun");
          break;

        case "Clear":
          setWeatherMood("fa-regular fa-circle-check");
          break;

        case "MIST":
          setWeatherMood("fa-sharp fa-regular fa-shield");
          break;

        default:
          setWeatherMood("fa-regular fa-circle-check");
          break;
      }
    }
  }, [tempInfo.weather]);
  return (
    <>
      <Container>
        <div className="mt-5 main-1-card">
          <div className="main-card">
            {/* <Row>
        <Col className='icon-div'><i className="fa-solid fa-smog"></i></Col>
      </Row> */}
            <div className="icon-div">
              <i className={weatherMood}></i>
            </div>

            <div className="main-info-div">
              <div className="child-info-div">
                <div className="sub-1-info-div">
                  <span>{tempInfo.temp}</span>
                </div>
                <div className="sub-2-info-div">
                  <span className="temp-info">{tempInfo.weather}</span>
                  <br />
                  <span className="country-name">
                    {tempInfo.name},{tempInfo.country}
                  </span>
                </div>
              </div>
              <div className="sub-3-info-div">
                <span>7/10/2020,</span>
                <br />
                <span>3:39:40 PM</span>
              </div>
            </div>

            <div className="main-info">
              <div className="sub-info">
                <div>
                  <i class="fa-regular fa-sun"></i>
                </div>
                <div className="info-div">
                  <span>{dateTime} PM</span>
                  <br />
                  <span>Sunset</span>
                </div>
              </div>
              <div className="sub-info">
                <div>
                  <i class="fa-regular fa-sun"></i>
                </div>
                <div className="info-div">
                  <span>{tempInfo.humidity}</span>
                  <br />
                  <span>Humidity</span>
                </div>
              </div>
              <div className="sub-info">
                <div>
                  <i class="fa-regular fa-sun"></i>
                </div>
                <div className="info-div">
                  <span>{tempInfo.pressure}</span>
                  <br />
                  <span>Pressure</span>
                </div>
              </div>
              <div className="sub-info">
                <div>
                  <i class="fa-regular fa-sun"></i>
                </div>
                <div className="info-div">
                  <span>{tempInfo.speed}</span>
                  <br />
                  <span>Speed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default WeatherCrad;
