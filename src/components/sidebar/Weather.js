import { useEffect, useState } from "react";
import "../../assets/style/Weather.css";
const Weather = () => {
  const [lat, setLat] = useState();
  const [long, setLong] = useState();
  const [data, setData] = useState([]);

  useEffect(() => {
    const AbortConst = new AbortController();
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?lat=" +
        lat +
        "&lon=" +
        long +
        "&units=metric&appid=1a5eca88b0c2cb459728b38e85285c2e",
      { signal: AbortConst.signal }
    )
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          return;
        }
      });
    return () => AbortConst.abort();
  }, [lat, long]);
  return (
    <div className="weather-widget">
      <h3 className="weather-widget-title">Weather</h3>
      {data.weather && (
        <div className="header">
          <img
            src={
              "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png"
            }
            alt="Icon"
          />
          <p>{data.weather[0].main}</p>
        </div>
      )}
      <div className="body">
        {data.main && (
          <div className="flex">
            <span className="temp">
              <p>Temprature</p>
              {data.main.temp} &deg;C
            </span>
            <span className="temp">
              <p> Humidity </p>
              {data.main.humidity} %
            </span>
          </div>
        )}
        {data.sys && (
          <div className="flex">
            <span className="sunrise-sunset">
              <p>Sunrise</p>
              {new Date(data.sys.sunrise * 1000).toLocaleTimeString("en-IN")}
            </span>
            <span className="sunrise-sunset">
              <p>Sunset</p>
              {new Date(data.sys.sunset * 1000).toLocaleTimeString("en-IN")}
            </span>
          </div>
        )}
      </div>
      <h2>{data.name}</h2>
    </div>
  );
};

export default Weather;
