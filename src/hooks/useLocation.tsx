import { useState } from 'react';
import { IWeatherProps } from '../common';

export const useLocation = (): IWeatherProps | undefined => {
    const [location, setLocation] = useState<IWeatherProps | undefined>();

    const getLocationSuccess = (position: any) => {
        setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        });
    };

    const getLocationError = () => {
        console.log("Error in getting latitude and longitude");
    };

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getLocationSuccess, getLocationError);
    };

    return location;
};