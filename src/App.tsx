import React from "react";
import "./App.css";
import { SearchWeather } from "./components/SearchWeatherLocationComponent/SearchWeather";

import { ToDayWeatherList } from "./components/ToDayWeatherComponent/ToDayWeatherList";
import { FiveDayWeather } from "./components/FiveDayWeatherComponent/FiveDayWeather";


function App() {
    return (
        <div className='App'>
            <SearchWeather />

            <div className="weather-condition-container">
                {/* <WeatherConditions /> */}
                <ToDayWeatherList />
                <FiveDayWeather />
            </div>
        </div>
    );
}

export default App;
