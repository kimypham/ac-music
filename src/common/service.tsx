import { initialSettings, soundEffectValueMap, soundtrackValueMap, weatherValueMap } from './constants';
import { FormattedHour, GameSoundtrackLabel, GameSoundtrackValue, LocalStorageKey, SoundEffectLabel, SoundEffectValue, WeatherVariantLabel, WeatherVariantValue } from './enums';
import { ISettings } from './interfaces';

export const getHour = (time: Date): FormattedHour => {
    const currentHour: number = time.getHours();

    const isAm: boolean = currentHour <= 12;
    const hourString: string = isAm ? currentHour == 0 ? '12AM' : `${currentHour.toString()}AM` : `${(currentHour - 12).toString()}PM`;

    return FormattedHour[hourString as keyof typeof FormattedHour];
};

export const getSettingsFromLocalStorage = (): ISettings => {
    const localStorageItem: string | void = localStorage.getItem(LocalStorageKey.Object) ?? undefined;

    return JSON.parse((localStorageItem ?? JSON.stringify(initialSettings)));
};

export const getSoundtrackLabelFromValue = (value: GameSoundtrackValue): GameSoundtrackLabel => (soundtrackValueMap[value]);

export const getWeatherLabelFromValue = (value: WeatherVariantValue): WeatherVariantLabel => (weatherValueMap[value]);

export const getSoundEffectLabelFromValue = (value: SoundEffectValue): SoundEffectLabel => (soundEffectValueMap[value]);