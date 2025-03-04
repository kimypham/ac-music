import { useEffect, useState } from 'react';
import { FormattedHour, GameSoundtrackList, GameSoundtrackValue, ISettings, NHVideoId, NLVideoId, OriginalVideoId, WeatherVariantValue, WWCFVideoId } from '../../common';
import { getHour, getSettingsFromLocalStorage, isRandomWeather } from '../../common/service';
import { GameSoundtrackOption, WeatherVariantOption } from '../../common/types';
import { useTime } from '../../hooks';

export const Video = () => {
    const [videoId, setVideoId] = useState<string>();

    const { gameSoundtrack: soundtrack, weatherVariant: weather }: ISettings = getSettingsFromLocalStorage();
    const time: Date = useTime();
    const hour: FormattedHour = getHour(time);

    const getRandomSoundtrack = (): GameSoundtrackOption => {
        const randomNumber: number = Math.floor(Math.random() * GameSoundtrackList.length);
        return GameSoundtrackList[randomNumber] as GameSoundtrackOption;
    };

    const getVideoId = (soundtrack: GameSoundtrackValue, weather: WeatherVariantOption, hour: FormattedHour): string => {
        const videoIdMappings: Record<string, Record<FormattedHour, Record<WeatherVariantOption, string>>> = {
            [GameSoundtrackValue.Original]: OriginalVideoId,
            [GameSoundtrackValue.WWCF]: WWCFVideoId,
            [GameSoundtrackValue.NL]: NLVideoId,
            [GameSoundtrackValue.NH]: NHVideoId,
        };
        return videoIdMappings[soundtrack][hour][weather]
    };

    const mapRandomWeather = (weather: WeatherVariantValue): WeatherVariantOption => {
        switch (weather) {
            case WeatherVariantValue.RandomNormal:
                return WeatherVariantValue.Normal;
            case WeatherVariantValue.RandomRainy:
                return WeatherVariantValue.Rainy;
            case WeatherVariantValue.RandomSnowy:
                return WeatherVariantValue.Snowy;
            default:
                return WeatherVariantValue.Normal;
        };
    };

    useEffect(() => {
        const selectedSoundtrack: GameSoundtrackOption = soundtrack === GameSoundtrackValue.Random ? getRandomSoundtrack() : soundtrack;
        const selectedWeather: WeatherVariantOption = isRandomWeather(weather) ? mapRandomWeather(weather) : weather === WeatherVariantValue.Real ? WeatherVariantValue.Normal : weather;
        setVideoId(getVideoId(selectedSoundtrack, selectedWeather, hour));
    }, [soundtrack, weather, hour]);

    return (
        <div className='overflow-hidden pt-[56.25%] w-full relative'>
            <iframe className='rounded-xl w-full h-full absolute top-0 bottom-0 left-0 right-0' allowFullScreen
                src={`https://www.youtube.com/embed/${videoId}?loop=1&color=white&iv_load_policy=3&playlist=${videoId}`} >
            </iframe>
        </div>
    );
};