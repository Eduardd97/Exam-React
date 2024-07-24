import React, { useEffect, useState } from "react";
import useWeather from "../../hooks/useWeather";
import humidity from "../../image/humidity.svg";
import { Accordion } from "react-bootstrap";
import "./FiveDayWeatherComponent.css"

export const FiveDayWeather = () => {
    const { fiveWeather, weather } = useWeather();
    const [weatherLocationName, setWeatherLocationName] = useState("");

    const weatherData = weather.flatMap((w) => w);

    const weatherLocation = weatherData.flatMap((name) => name.location.name);

    useEffect(() => {
      if (weatherLocation.length > 0) {
        setWeatherLocationName(weatherLocation[0]);
      }
    }, [weatherLocation]);

    return (
        <div>
            {fiveWeather.length > 0 && (
                <div>
                    {fiveWeather.slice(5).map((w) => (
                        <div key={w.dt}>
                            <Accordion defaultActiveKey={["0"]} alwaysOpen>
                                <Accordion.Item eventKey='0'>
                                    <Accordion.Header>
                                        <span>{w.dt_txt.slice(0, 16)}</span>
                                        <span>{weatherLocationName}</span>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <span>
                                            {Math.round(w.main.temp * 10) / 10}
                                            °C
                                        </span>
                                        <span className="weather-speed">Speed: {w.wind.speed}m/s</span>
                                        <span>
                                            {w.main.humidity}
                                            <img
                                                src={humidity}
                                                alt='humidity'
                                                width={"20px"}
                                                height={"20px"}
                                            />
                                        </span>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
