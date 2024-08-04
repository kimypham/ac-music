import { GameSoundtrackLabel, GameSoundtrackValue, SoundEffectLabel, SoundEffectValue, WeatherVariantLabel, WeatherVariantValue } from './enums';
import { ISettings } from './interfaces';

export const GameSoundtrackList = [
    GameSoundtrackValue.Original,
    GameSoundtrackValue.WWCF,
    GameSoundtrackValue.NL,
    GameSoundtrackValue.NH,
    GameSoundtrackValue.Random
];

export const WeatherVariantList = [
    WeatherVariantValue.Real,
    WeatherVariantValue.Normal,
    WeatherVariantValue.Rainy,
    WeatherVariantValue.Snowy,
    WeatherVariantValue.Random
];

export const soundtrackValueMap: Record<GameSoundtrackValue, GameSoundtrackLabel> = {
    [GameSoundtrackValue.Original]: GameSoundtrackLabel.Original,
    [GameSoundtrackValue.WWCF]: GameSoundtrackLabel.WWCF,
    [GameSoundtrackValue.NL]: GameSoundtrackLabel.NL,
    [GameSoundtrackValue.NH]: GameSoundtrackLabel.NH,
    [GameSoundtrackValue.Random]: GameSoundtrackLabel.Random
};

export const weatherValueMap: Record<WeatherVariantValue, WeatherVariantLabel> = {
    [WeatherVariantValue.Real]: WeatherVariantLabel.Real,
    [WeatherVariantValue.Normal]: WeatherVariantLabel.Normal,
    [WeatherVariantValue.Rainy]: WeatherVariantLabel.Rainy,
    [WeatherVariantValue.Snowy]: WeatherVariantLabel.Snowy,
    [WeatherVariantValue.Random]: WeatherVariantLabel.Random
};

export const soundEffectValueMap: Record<SoundEffectValue, SoundEffectLabel> = {
    [SoundEffectValue.Rain]: SoundEffectLabel.Rain,
    [SoundEffectValue.Thunder]: SoundEffectLabel.Thunder
};

export const initialSettings: ISettings = {
    gameSoundtrack: GameSoundtrackValue.NH,
    weatherVariant: WeatherVariantValue.Real,
    rainSoundEffectOn: false,
    thunderSoundEffectOn: false
};