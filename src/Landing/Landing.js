import React from "react";
import { useState } from "react";
import { getWeather } from "../services/getWeather";
import WeatherBox from "../components/WeatherBox";
import { DateBuilder } from "../components/DateBuilder";

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
      .catch((e) => console.log(e) === alert("the location is invalid"));
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
            : data.weather[0].main === "Haze"||"Mist"||"Smooke"
            ? "app app_haze"
            : data.weather[0].main === "Drizzle"
            ? "app app_drizzle"
            : data.weather[0].main === "Thunderstorm"
            ? "app app_thunderstorm"
            : "app"
          : "app"
      }
    >
      <div className="header">Weather App</div>
      <div className="search">
        <input
          type="text"
          value={location}
          onChange={handleChangeLocation}
          placeholder="Insert Location"
          onKeyPress={enter}
        />
        <button
          className="btn"
          type="button"
          value={location}
          onClick={searchLocation}
        >
          search
        </button>
      </div>
      <div>
        <h2 className={data.name ? "dateHidden" : "date"}>
          {DateBuilder(new Date())}
        </h2>

        <WeatherBox data={data} />
      </div>
    </div>
  );
}

export default Landing;
