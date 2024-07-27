import { soundtrackValueMap, weatherValueMap } from './constants';
import { FormattedHour, GameSoundtrackLabel, GameSoundtrackValue, LocalStorageKey, WeatherVariantLabel, WeatherVariantValue } from './enums';
import { ISettings } from './interfaces';

export const getHour = (time: Date): FormattedHour => {
    const currentHour: number = time.getHours();

    const isAm: boolean = currentHour <= 12;
    const hourString: string = isAm ? currentHour == 0 ? '12AM' : `${currentHour.toString()}AM` : `${(currentHour - 12).toString()}PM`;

    return FormattedHour[hourString as keyof typeof FormattedHour];
};

export const getSettingsFromLocalStorage = (): ISettings => {
    const getFromLocalStorage = (key: LocalStorageKey): string | void => {
        return localStorage.getItem(key) ?? undefined;
    };

    const initialSettings: ISettings = {
        gameSoundtrack: GameSoundtrackValue.NH,
        weatherVariant: WeatherVariantValue.Real,
        rainSoundEffectOn: false,
        thunderSoundEffectOn: false
    };

    return JSON.parse((getFromLocalStorage(LocalStorageKey.Object) ?? JSON.stringify(initialSettings)));
};

export const getSoundtrackLabelFromValue = (value: GameSoundtrackValue): GameSoundtrackLabel => (soundtrackValueMap[value]);

export const getWeatherLabelFromValue = (value: WeatherVariantValue): WeatherVariantLabel => (weatherValueMap[value]);