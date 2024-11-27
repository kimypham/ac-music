import { useEffect, useState } from 'react';
import { FormattedHour, GameSoundtrackValue, NHVideoId, NLVideoId, OriginalVideoId, WWCFVideoId } from '../../common';
import { getHour, getSettingsFromLocalStorage } from '../../common/service';
import { GameSoundtrackOption, VideoId } from '../../common/types';
import { useTime } from '../../hooks';

export const Video = () => {
    const [videoId, setVideoId] = useState<VideoId>();

    const soundtrack: GameSoundtrackValue = getSettingsFromLocalStorage().gameSoundtrack;
    const time: Date = useTime();
    const hour: FormattedHour = getHour(time);

    const getRandomSoundtrackVideoId = (hour: FormattedHour): VideoId => {
        const gameSoundtrackList: GameSoundtrackOption[] = [GameSoundtrackValue.Original, GameSoundtrackValue.WWCF, GameSoundtrackValue.NL, GameSoundtrackValue.NH];
        const randomNumber: number = Math.floor(Math.random() * gameSoundtrackList.length);

        const randomSoundtrack: GameSoundtrackOption = gameSoundtrackList[randomNumber];
        return getVideoId(randomSoundtrack, hour);
    };

    const getVideoId = (soundtrack: GameSoundtrackOption, hour: FormattedHour): VideoId => {
        switch (soundtrack) {
            case GameSoundtrackValue.Original:
                return OriginalVideoId[hour];
            case GameSoundtrackValue.WWCF:
                return WWCFVideoId[hour];
            case GameSoundtrackValue.NL:
                return NLVideoId[hour];
            case GameSoundtrackValue.NH:
                return NHVideoId[hour];
        }
    };

    useEffect(() => {
        setVideoId(soundtrack === GameSoundtrackValue.Random ? getRandomSoundtrackVideoId(hour) : getVideoId(soundtrack, hour));
    }, [soundtrack]);

    return (
        <iframe width="515" height="290" className='rounded-xl' allowFullScreen
            src={`https://www.youtube.com/embed/${videoId}?loop=1&color=white&iv_load_policy=3&playlist=${videoId}`} >
        </iframe>
    );
};