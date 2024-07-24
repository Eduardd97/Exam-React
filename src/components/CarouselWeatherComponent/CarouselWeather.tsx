import React from "react";
import { Carousel } from "react-bootstrap";
import useWeather from "../../hooks/useWeather";
import carouselWeatherplanet from "../../image/planet.png";
import carouselWeatherforecast from "../../image/Weather-forecast.png";
import carouselWeatherTemp from "../../image/termometer.png";
import "./CarouselWeatherContext.css"

export const CarouselWeather = () => {
    const { weather } = useWeather();

    const weatherData = weather.flatMap((w) => w);
    const CarouselWeatherIconAndTemp = weatherData.map(
        ({
            current: {
                condition: { icon },
                temp_c,
            },
        }) => {
            return (
                <div className="carousel-weather-condition">
                    <section>
                        <img src={icon} alt='Weather condition' width={'100px'} height={'100px'}/>
                        <span>{temp_c}°C</span>
                    </section>
                </div>
            );
        }
    );

    return (
        <Carousel fade>
            <Carousel.Item>
                <img className="carousel-weather-img" src={carouselWeatherTemp} alt='' />
                <Carousel.Caption>
                    {CarouselWeatherIconAndTemp}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="carousel-weather-img" src={carouselWeatherplanet} alt='' />
                <Carousel.Caption>
                    {CarouselWeatherIconAndTemp}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="carousel-weather-img" src={carouselWeatherforecast} alt='' />
                <Carousel.Caption>
                    {CarouselWeatherIconAndTemp}
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};
