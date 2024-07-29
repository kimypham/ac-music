import { GameSoundtrackValue, WeatherVariantValue } from './enums';

export interface ISettings {
    gameSoundtrack: GameSoundtrackValue,
    weatherVariant: WeatherVariantValue,
    rainSoundEffectOn: boolean,
    thunderSoundEffectOn: boolean,
}
