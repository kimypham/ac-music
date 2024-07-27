import { GameSoundtrackValue, NHVideoId, NLVideoId, OriginalVideoId, WWCFVideoId } from './enums';

export type VideoId = OriginalVideoId | WWCFVideoId | NLVideoId | NHVideoId;
export type GameSoundtrackOption = GameSoundtrackValue.Original | GameSoundtrackValue.WWCF | GameSoundtrackValue.NL | GameSoundtrackValue.NH;