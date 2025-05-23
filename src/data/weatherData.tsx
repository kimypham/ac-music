import { fetchWeather } from '../api';
import { IWeatherApiResponse, IWeatherProps, IWeatherResponse } from '../common';

export const getWeather = async ({ latitude, longitude }: IWeatherProps): Promise<IWeatherResponse> => {
    try {
        const response: IWeatherApiResponse = await fetchWeather({ latitude, longitude });
        return {
            weatherCode: response.current.weather_code
        };
    } catch (error) {
        console.log("Error in getting weather data:", error);
        throw error;
    };
};