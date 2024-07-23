export type ToDayWeatherDataType = [
    {
        location: {
            name: string;
            region: string;
            country: string;
            lat: number;
            lon: number;
            tz_id: string;
            localtime_epoch: number;
            localtime: string;
        };
        current: {
            last_updated_epoch: number;
            last_updated: string;
            temp_c: number;
            temp_f: number;
            is_day: number;
            condition: {
                text: string;
                icon: string;
                code: number;
            };
            wind_mph: number;
            wind_kph: number;
            wind_degree: number;
            wind_dir: string;
            pressure_mb: number;
            pressure_in: number;
            precip_mm: number;
            precip_in: number;
            humidity: number;
            cloud: number;
            feelslike_c: number;
            feelslike_f: number;
            windchill_c: number;
            windchill_f: number;
            heatindex_c: number;
            heatindex_f: number;
            dewpoint_c: number;
            dewpoint_f: number;
            vis_km: number;
            vis_miles: number;
            uv: number;
            gust_mph: number;
            gust_kph: number;
        };
    }
];

// ------------------------------------ //

export type FiveDayWetherTYpe = {
    dt: number;
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        sea_level: number;
        grnd_level: number;
        humidity: number;
        temp_kf: number;
    };
    weather: [{ id: number; main: string; description: string; icon: string }];
    clouds: { all: number };
    wind: { speed: number; deg: number; gust: number };
    visibility: number;
    pop: number;
    sys: { pod: string };
    dt_txt: string;
};

export type Weather = {
    id: number;
    main: string;
    description: string;
    icon: string;
};
