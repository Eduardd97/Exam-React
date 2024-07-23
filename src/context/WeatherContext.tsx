import React, { createContext, useState, FC, ReactNode } from "react";

import {  sevenDayWeatherApi, toDayWeatherApi } from "../apiAxios/axios";
import { FiveDayWetherTYpe, ToDayWeatherDataType } from "../type";

interface WeatherContextType {
    weather: ToDayWeatherDataType[];
    fiveWeather: FiveDayWetherTYpe[];
    error: string | null;
    fetchWeatherData: (inputValue: string) => Promise<void>;
    fetchSevenDayWeatherData: (inputValue: string) => Promise<void>;
    
}

const defaultContextValue: WeatherContextType = {
    weather: [],
    fiveWeather: [],
    error: null,
    fetchWeatherData: async () => {
        /* noop */
    },
    fetchSevenDayWeatherData: async () => {
        /* noop */
    },
};

const WeatherContext = createContext<WeatherContextType>(defaultContextValue);

const WeatherProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [weather, setWeather] = useState<ToDayWeatherDataType[]>([]);
    const [error, setError] = useState<string | null>(null);

    const [fiveWeather, setFiveWeather] = useState<FiveDayWetherTYpe[]>([]);

    const fetchWeatherData = async (inputValue: string) => {
        console.log(inputValue);
        try {
            if (!inputValue) {
                setError("Input value is empty.");
                return;
            }

            const response = await toDayWeatherApi.get("/current.json", {
                params: { q: inputValue },
            });
            console.log(response);

            // setSevenDayWeather(response.data);
            setWeather((prevWeather) => [...prevWeather, response.data]);
            setError(null); // Сброс ошибки при успешном запросе           
            
        } catch (err) {
            console.error("Error fetching weather data: ", err);
            setError(
                "Failed to fetch weather data. Please check your input or try again later."
            );
        }
    };

    

    const fetchSevenDayWeatherData = async (inputValue: string) => {
        try {
            if (!inputValue) {
                setError("Input value is empty.");
                return;
            }

            // Запрашиваем данные о погоде на 7 дней, используя координаты
            const responseSevenDayWeather = await sevenDayWeatherApi.get(
                `?q=${inputValue}&appid=f145fcf28e1d32f16464752e12b3c3e5&units=metric`
            );
            console.log(responseSevenDayWeather.data.list)
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
            value={{ weather, fiveWeather, error, fetchWeatherData, fetchSevenDayWeatherData }}
        >
            {children}
        </WeatherContext.Provider>
    );
};

export { WeatherProvider, WeatherContext };
