import axios from "axios";

export const toDayWeatherApi = axios.create({
    baseURL: "https://weatherapi-com.p.rapidapi.com",
    headers: {
        "x-rapidapi-key": "9ebb47f7c6mshfe8c805d52bddacp1f9a17jsnd085d3940efd",
        "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
    },
});

export const fiveDayWeatherApi = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5/forecast",
});
