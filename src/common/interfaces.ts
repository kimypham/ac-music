import { GameSoundtrackLabel, GameSoundtrackValue, SoundEffectLabel, SoundEffectValue, WeatherVariantLabel, WeatherVariantValue } from './enums';

export interface ISettings {
    gameSoundtrack: GameSoundtrackValue,
    weatherVariant: WeatherVariantValue,
    rainSoundEffectOn: boolean,
    thunderSoundEffectOn: boolean,
}

export interface IValueLabel {
    value: GameSoundtrackValue | WeatherVariantValue | SoundEffectValue,
    label: GameSoundtrackLabel | WeatherVariantLabel | SoundEffectLabel
}