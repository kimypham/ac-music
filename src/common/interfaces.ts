import { GameSoundtrackValue, GameTime, WeatherVariantValue } from './enums';

export interface ISettings {
    gameSoundtrack: GameSoundtrackValue,
    weatherVariant: WeatherVariantValue,
    gameTime: GameTime,
    rainSoundEffectOn: boolean,
    thunderSoundEffectOn: boolean
}
