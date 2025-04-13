import { GameSoundtrackValue, GameTime, ISettings, LocalStorageKey, WeatherVariantValue, initialSettings } from '../../common';

const isGameSoundtrackValue = (value: string): value is GameSoundtrackValue => Object.values(GameSoundtrackValue).includes(value as GameSoundtrackValue);

const isWeatherVariantValue = (value: string): value is WeatherVariantValue => Object.values(WeatherVariantValue).includes(value as WeatherVariantValue);

const isGameTime = (value: string): value is GameTime => Object.values(GameTime).includes(value as GameTime);

const getBooleanSearchParamValue = (param: string | null, defaultValue: boolean): boolean => param !== null ? param === 'true' : defaultValue;

export const getSettings = (searchParams: URLSearchParams): ISettings => {
    const localSettings: string | null = localStorage.getItem(LocalStorageKey.Object);
    const { gameSoundtrack, weatherVariant, rainSoundEffectOn, thunderSoundEffectOn, gameTime }: ISettings = localSettings && localSettings !== '{}' ? JSON.parse(localSettings) : initialSettings;

    const gameParam: string = searchParams.get("game") ?? '';
    const weatherParam: string = searchParams.get("weather") ?? '';
    const gameTimeParam: string = searchParams.get("time") ?? '';

    const game: GameSoundtrackValue = isGameSoundtrackValue(gameParam) ? gameParam as GameSoundtrackValue : gameSoundtrack;
    const weather: WeatherVariantValue = isWeatherVariantValue(weatherParam) ? weatherParam as WeatherVariantValue : weatherVariant;
    const time: GameTime = isGameTime(gameTimeParam) ? gameTimeParam as GameTime : gameTime;
    const rain: boolean = getBooleanSearchParamValue(searchParams.get("rain"), rainSoundEffectOn);
    const thunder: boolean = getBooleanSearchParamValue(searchParams.get("thunder"), thunderSoundEffectOn);

    return {
        gameSoundtrack: game,
        weatherVariant: weather,
        rainSoundEffectOn: rain,
        thunderSoundEffectOn: thunder,
        gameTime: time
    };
};

export const getRandomWeatherVariantValue = (): WeatherVariantValue => {
    const randomWeatherList: WeatherVariantValue[] = [WeatherVariantValue.RandomNormal, WeatherVariantValue.RandomRainy, WeatherVariantValue.RandomSnowy];
    const randomNumber: number = Math.floor(Math.random() * randomWeatherList.length);
    return randomWeatherList[randomNumber];
};