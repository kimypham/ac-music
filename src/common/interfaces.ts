import { GameSoundtrackValue, GameTime, WeatherVariantValue } from './enums';

export interface ISettings {
    gameSoundtrack: GameSoundtrackValue,
    weatherVariant: WeatherVariantValue,
    gameTime: GameTime,
    rainSoundEffectOn: boolean,
    thunderSoundEffectOn: boolean
};

export interface IWeatherApiResponse {
    latitude: number;
    longitude: number;
    generationtime_ms: number;
    utc_offset_seconds: number;
    timezone: string;
    timezone_abbreviation: string;
    elevation: number;
    current_units: {
        time: string;
        interval: string;
        weather_code: string;
    };
    current: {
        time: string;
        interval: number;
        weather_code: number;
    };
};

export interface IWeatherResponse {
    weatherCode: number
};

export interface IWeatherProps {
    latitude: number,
    longitude: number
};