import { useEffect, useState } from 'react';
import { IWeatherProps, IWeatherResponse } from '../common';
import { getWeather } from '../data';

export const useWeather = (time: Date): IWeatherResponse | undefined => {
    const [weather, setWeather] = useState<IWeatherResponse>();
    const [location, setLocation] = useState<IWeatherProps>({ latitude: 0, longitude: 0 });

    const getLocationSuccess = (position: any) => {
        setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        });
    };

    const getLocationError = () => {
        console.log("Error in getting latitude and longitude");
    };

    useEffect(() => {
        const fetch = async () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(getLocationSuccess, getLocationError);
            };
            const { latitude, longitude } = location;

            const weatherData: IWeatherResponse = await getWeather({ latitude, longitude });
            setWeather(weatherData);
        };

        if (weather === undefined || (time.getSeconds() === 0 && time.getMinutes() === 0)) {
            fetch();
        };
    }, [time]);

    return weather;
};