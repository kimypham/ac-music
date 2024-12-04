import { PropsWithChildren } from 'react';
import { FormattedHour, GameSoundtrackLabel, GameSoundtrackValue } from '../../common';
import { getHour, getSettingsFromLocalStorage, getSoundtrackLabelFromValue } from '../../common/service';
import { useTime } from '../../hooks';

export const MainText = () => {
    const time: Date = useTime();
    const timeString: string = time.toLocaleTimeString(['en-AU'], { timeStyle: 'short' }).split(' ').join('');
    const hour: FormattedHour = getHour(time);

    const soundtrackValue: GameSoundtrackValue = getSettingsFromLocalStorage().gameSoundtrack;
    const soundtrack: GameSoundtrackLabel = getSoundtrackLabelFromValue(soundtrackValue);


    const HighlightText = ({ children }: PropsWithChildren) => {
        return <p className="text-lm-text-blue dark:text-dm-text-green inline">
            {children}
        </p>
    }

    // return (
    //     <p className="font-extrabold leading-loose">
    //         It's currently <HighlightText>{timeString}</HighlightText> and <HighlightText>cloudy</HighlightText>!<br />
    //         Now playing: <HighlightText>{hour} AC: {soundtrack} Soundtrack</HighlightText>
    //     </p>
    // )
    return (
        <div className="font-extrabold leading-loose text-[20px] lg:text-[32px]">
            It's currently <HighlightText>{timeString}</HighlightText>!<br />
            Now playing: <HighlightText>{hour} AC: {soundtrack} Soundtrack</HighlightText>
        </div>
    )
}