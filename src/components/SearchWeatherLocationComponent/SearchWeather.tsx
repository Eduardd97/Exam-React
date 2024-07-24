import React, { ChangeEvent, useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import useWeather from "../../hooks/useWeather";
import "./SearchWeather.css"

export const SearchWeather = () => {
    const { fetchWeatherData, fetchFiveDayWeatherData } = useWeather();
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleFetchWeather = async () => {
        await fetchWeatherData(inputValue);
        await fetchFiveDayWeatherData(inputValue);
        setInputValue("");
    };

    return (
        <div>
            <InputGroup className='mb-3'>
                <Form.Control
                    placeholder='Enter location'
                    aria-label='Enter location'
                    aria-describedby='basic-addon2'
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <Button
                    variant='outline-secondary'
                    id='button-addon2'
                    onClick={handleFetchWeather}
                >
                    Fetch Weather
                </Button>
            </InputGroup>


        </div>
    );
};
