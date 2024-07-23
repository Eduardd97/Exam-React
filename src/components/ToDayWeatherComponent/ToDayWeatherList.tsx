import useWeather from "../../hooks/useWeather";
import { Accordion } from "react-bootstrap";
import "./ToDayWeather.css";
import "./ToDayWeatherMobile.css";
import humidity from "../../image/humidity.svg";
import { CarouselWeather } from "../CarouselWeatherComponent/CarouselWeather";


export const ToDayWeatherList = () => {
    const { weather, fiveWeather } = useWeather();
    console.log(weather);

    const weatherData = weather.flatMap((w) => w);

    const weatherHumidity = humidity;

    const threHoursWeather = fiveWeather
        .slice(0, 5)
        .map(({ dt_txt, main: { temp, humidity }, wind: { speed } }) => {
            return (
                <div className='three-time-weather'>
                    <div className='weather-date'>
                        {" "}
                        <span className='date'>
                            Date: {dt_txt.slice(0, 10)}
                        </span>
                        <span className='date'>
                            Time: {dt_txt.slice(11, 16)}
                        </span>
                    </div>

                    <div className='weather-condiyions'>
                        {" "}
                        <span className='temp'>
                            {Math.round(temp * 10) / 10}°C
                        </span>
                        <span className='speed'>Wind speed: {speed}m/s</span>
                        <span className='humidity'>
                            {humidity}
                            <img
                                src={weatherHumidity}
                                alt='humidity'
                                width={"20px"}
                                height={"20px"}
                            />
                        </span>
                    </div>
                </div>
            );
        });

    return (
        <div className='to-day-weather-box'>
            <CarouselWeather />

            {weatherData.length > 0 && (
                <div className='weather-box'>
                    {weatherData.map((w, index) => (
                        <div
                            key={`${w.location.country}-${index}`}
                            className='weather'
                        >
                            {" "}
                            <Accordion defaultActiveKey={["0"]} alwaysOpen>
                                <Accordion.Item eventKey='0'>
                                    <Accordion.Header>
                                        <img
                                            src={w.current.condition.icon}
                                            alt='Weather condition'
                                        />{" "}
                                        {w.current.temp_c} {w.location.country}{" "}
                                        {w.location.name}
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        {threHoursWeather}
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
