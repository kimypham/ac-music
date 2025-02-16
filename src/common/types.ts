import { GameSoundtrackValue, WeatherVariantValue } from './enums';

export type GameSoundtrackOption = GameSoundtrackValue.Original | GameSoundtrackValue.WWCF | GameSoundtrackValue.NL | GameSoundtrackValue.NH;
export type WeatherVariantOption = WeatherVariantValue.Normal | WeatherVariantValue.Rainy | WeatherVariantValue.Snowy;