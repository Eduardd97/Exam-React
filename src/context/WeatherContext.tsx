import React, { createContext, useState, FC, ReactNode } from "react";

import {  fiveDayWeatherApi, toDayWeatherApi } from "../apiAxios/axios";
import { FiveDayWetherTYpe, ToDayWeatherDataType } from "../type";

interface WeatherContextType {
    weather: ToDayWeatherDataType[];
    fiveWeather: FiveDayWetherTYpe[];
    error: string | null;
    fetchWeatherData: (inputValue: string) => Promise<void>;
    fetchFiveDayWeatherData: (inputValue: string) => Promise<void>;
    
}

const defaultContextValue: WeatherContextType = {
    weather: [],
    fiveWeather: [],
    error: null,
    fetchWeatherData: async () => {
        /* noop */
    },
    fetchFiveDayWeatherData: async () => {
        /* noop */
    },
};

const WeatherContext = createContext<WeatherContextType>(defaultContextValue);

const WeatherProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [weather, setWeather] = useState<ToDayWeatherDataType[]>([]);
    const [error, setError] = useState<string | null>(null);

    const [fiveWeather, setFiveWeather] = useState<FiveDayWetherTYpe[]>([]);

    const fetchWeatherData = async (inputValue: string) => {
        try {
            if (!inputValue) {
                setError("Input value is empty.");
                return;
            }

            setWeather([]);

            const response = await toDayWeatherApi.get("/current.json", {
                params: { q: inputValue },
            });

            setWeather((prevWeather) => [...prevWeather, response.data]);
            setError(null);          
            
        } catch (err) {
            console.error("Error fetching weather data: ", err);
            setError(
                "Failed to fetch weather data. Please check your input or try again later."
            );
        }
    };

    
    const fetchFiveDayWeatherData = async (inputValue: string) => {
        try {
            if (!inputValue) {
                setError("Input value is empty.");
                return;
            }

            setFiveWeather([]);

            const responseSevenDayWeather = await fiveDayWeatherApi.get(
                `?q=${inputValue}&appid=f145fcf28e1d32f16464752e12b3c3e5&units=metric`
            );
            setFiveWeather(responseSevenDayWeather.data.list);
        } catch (error) {
            console.error("Error fetching weather data:", error);
            setError(
                "Failed to fetch weather data. Please check your input or try again later."
            );
        }
    };

    return (
        <WeatherContext.Provider
            value={{ weather, fiveWeather, error, fetchWeatherData, fetchFiveDayWeatherData }}
        >
            {children}
        </WeatherContext.Provider>
    );
};

export { WeatherProvider, WeatherContext };
