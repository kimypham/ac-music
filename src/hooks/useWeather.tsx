import { useEffect, useState } from 'react';
import { IWeatherLocation, IWeatherResponse } from '../common';
import { getWeather } from '../data';

export const useWeather = (time: Date, location: IWeatherLocation | undefined): IWeatherResponse | undefined => {
    const [weather, setWeather] = useState<IWeatherResponse>();

    useEffect(() => {
        const fetch = async () => {
            if (location) {
                const { latitude, longitude } = location;
                const weatherData: IWeatherResponse = await getWeather({ latitude, longitude });
                setWeather(weatherData);
            };
        };

        if (weather === undefined || (time.getSeconds() === 0 && time.getMinutes() === 0)) {
            fetch();
        };
        // console.log("location", location);
        // console.log("time", time);
    }, [location, time]);

    return weather;
};