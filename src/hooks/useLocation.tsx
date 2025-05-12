import { IWeatherProps } from '../common';

export const getLocation = (): IWeatherProps | undefined => {
    let location: IWeatherProps | undefined = undefined;

    const getLocationSuccess = (position: any) => {
        location = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        };
        console.log("location", location);
    };

    const getLocationError = () => {
        console.log("Error in getting latitude and longitude");
    };

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getLocationSuccess, getLocationError);
    };

    
    return location;
};