import React from "react";

import {
  BsCloudLightningRain,
  BsCloudRain,
  BsClouds,
  BsSun,
  BsSnow,
  BsCloudHaze,
} from "react-icons/bs";

const WeatherBox = ({ data }) => {
  return (
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
                ) : data.weather[0].main === "Haze" ? (
                  <BsCloudHaze />
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
              {data.main ? <p className="bold">{data.main.humidity}%</p> : null}

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
  );
};
export default WeatherBox;
