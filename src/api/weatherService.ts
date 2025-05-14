import axios, { AxiosResponse } from 'axios';
import { IWeatherApiResponse, IWeatherLocation, WEATHER_API_BASE_URL } from '../common';

export const fetchWeather = async ({ latitude, longitude }: IWeatherLocation): Promise<IWeatherApiResponse> => {
    try {
        const response: AxiosResponse = await axios.get<IWeatherApiResponse>(`${WEATHER_API_BASE_URL}&latitude=${latitude}&longitude=${longitude}`);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error("Axios error when fetching weather data:", error.response?.data || error.message);
        } else {
            console.error("Unexpected error when fetching weather data:", error);
        }
        throw error;
    };
};