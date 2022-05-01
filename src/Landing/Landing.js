import React from "react";
import { useState } from "react";
import {
  BsCloudLightningRain,
  BsCloudRain,
  BsClouds,
  BsSun,
  BsSnow,
} from "react-icons/bs";
import { DateBuilder } from "../components/DateBuilder";
import {getWeather} from '../services/getWeather';

function Landing() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
 
  const enter = (e) => {
    if (e.key === "Enter") {
      searchLocation();
    }
  };
  const searchLocation = () => {
		getWeather(location)
		.then((data) => setData(data))
		.catch((e)=>console.log(e) === alert('the location is invalid'));
	};


  
  const handleChangeLocation = (e) => {
    setLocation(e.target.value);
  };
 
  
  return (
    <div
      className={
        data.weather !== undefined
          ? data.weather[0].main === "Clouds"
            ? "app app_clouds"
            : data.weather[0].main === "Clear"
            ? "app app_clear"
            : data.weather[0].main === "Rain"
            ? "app app_rain"
            : data.weather[0].main === "Snow"
            ? "app app_snow"
            : data.weather[0].main === "Haze"
            ? "app app_haze"
            : data.weather[0].main === "Drizzle"
            ? "app app_drizzle"
            : data.weather[0].main === "Thunderstorm"
            ? "app app_thunderstorm"
            : "app"
          : "app"
      }
    >
      <div className="search">
        <input
          type="text"
          value={location}
          onChange={handleChangeLocation}
          placeholder="Enter Location"
          onKeyPress={enter}
        />
      </div>
      <div className="container">
        <div>
          <div className="top">
            <div className="location">
              {data.name ? (
                <p>
                  {data.name}, {data.sys.country}
                </p>
              ) : null}
            </div>
            <h2 className={data.name ? "" : "date"}>
              {DateBuilder(new Date())}
            </h2>
            <div className="temp">
              {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
              {data.main ? (
                <h3>
                  min: {data.main.temp_min.toFixed()}°C, max:{" "}
                  {data.main.temp_max.toFixed()}°C
                </h3>
              ) : null}
            </div>
            <div className="description">
              {data.weather ? <p>{data.weather[0].main}</p> : null}
            </div>
            <div className="icon">
              <h1>
                {data.weather !== undefined ? (
                  data.weather[0].main === "Clouds" ? (
                    <BsClouds />
                  ) : data.weather[0].main === "Clear" ? (
                    <BsSun />
                  ) : data.weather[0].main === "Rain" ? (
                    <BsCloudRain />
                  ) : data.weather[0].main === "Snow" ? (
                    <BsSnow />
                  ) : data.weather[0].main === "Drizzle" ? (
                    <BsCloudRain />
                  ) : data.weather[0].main === "Thunderstorm" ? (
                    <BsCloudLightningRain />
                  ) : null
                ) : null}
              </h1>
            </div>
          </div>

          {data.name !== undefined && (
            <div className="bottom">
              <div className="feels">
                {data.main ? (
                  <p className="bold">{data.main.feels_like.toFixed()}°C</p>
                ) : null}

                <p>Feels Like</p>
              </div>
              <div className="humidity">
                {data.main ? (
                  <p className="bold">{data.main.humidity}%</p>
                ) : null}

                <p>Humidity</p>
              </div>
              <div className="wind">
                {data.wind ? (
                  <p className="bold">{data.wind.speed.toFixed()}MPH</p>
                ) : null}

                <p>Wind Speed</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Landing;
