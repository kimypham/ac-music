import { PropsWithChildren } from 'react';
import { FormattedHour, GameSoundtrackLabel, GameSoundtrackValue } from '../../common';
import { useTime } from '../../hooks';
import { getHour, getSettingsFromLocalStorage } from '../../common/service';

export const MainText = () => {
    const time: Date = useTime();
    const timeString: string = time.toLocaleTimeString(['en-AU'], { timeStyle: 'short' }).split(' ').join('');
    const hour: FormattedHour = getHour(time);

    const getLabelFromValue = (value: GameSoundtrackValue): GameSoundtrackLabel => {
        const valueToLabelMap = {
            [GameSoundtrackValue.Original]: GameSoundtrackLabel.Original,
            [GameSoundtrackValue.WWCF]: GameSoundtrackLabel.WWCF,
            [GameSoundtrackValue.NL]: GameSoundtrackLabel.NL,
            [GameSoundtrackValue.NH]: GameSoundtrackLabel.NH,
            [GameSoundtrackValue.Random]: GameSoundtrackLabel.Random,
        };

        return valueToLabelMap[value];
    };

    const soundtrackValue: GameSoundtrackValue = getSettingsFromLocalStorage().gameSoundtrack;
    const soundtrack: GameSoundtrackLabel = getLabelFromValue(soundtrackValue);


    const HighlightText = ({ children }: PropsWithChildren) => {
        return <div className="text-lm-text-blue dark:text-dm-text-green inline">
            {children}
        </div>
    }

    return (
        <p className="font-extrabold leading-loose">
            It's currently <HighlightText>{timeString}</HighlightText> and <HighlightText>cloudy</HighlightText>!<br />
            Now playing: <HighlightText>{hour} AC: {soundtrack} Soundtrack</HighlightText>
        </p>
    )
}