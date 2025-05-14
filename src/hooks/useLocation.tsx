import { useEffect, useState } from 'react';
import { IWeatherLocation, IWeatherProps } from '../common';

export const useLocation = (shouldFetch: boolean): IWeatherProps | undefined => {
    const [location, setLocation] = useState<IWeatherLocation | undefined>();
    const [error, setError] = useState<boolean>(false);
    console.log("shouldFetch", shouldFetch);

    const getLocationSuccess = (position: any) => {
        setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        });

    };

    const getLocationError = () => {
        setError(true);
        console.log("Error in getting latitude and longitude");
    };

    useEffect(() => {
        if (shouldFetch && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(getLocationSuccess, getLocationError);
        };
    },[shouldFetch]);


    return {location, error};
};