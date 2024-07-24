import React from "react";
import "./App.css";
import "./AppMobile.css"
import { SearchWeather } from "./components/SearchWeatherLocationComponent/SearchWeather";

import { ToDayWeatherList } from "./components/ToDayWeatherComponent/ToDayWeatherList";
import { FiveDayWeather } from "./components/FiveDayWeatherComponent/FiveDayWeather";
import { Header } from "./components/HeaderComponent/Header";


function App() {
    return (
        <div className='App'>
            <Header />
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
