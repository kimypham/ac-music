import { PropsWithChildren } from 'react';
import { useTime } from '../../hooks';
import { getHourString } from './MainText.service';
import { FormattedHour } from '../../common';

export const MainText = () => {
    const time: Date = useTime();
    const hourString: FormattedHour = getHourString(time);
    const timeString: string = time.toLocaleTimeString(['en-AU'], { timeStyle: 'short' }).split(' ').join('');

    const HighlightText = ({ children }: PropsWithChildren) => {
        return <div className="text-lm-text-blue dark:text-dm-text-green inline">
            {children}
        </div>
    }

    return (
        <p className="font-extrabold leading-loose">
            It's currently <HighlightText>{timeString}</HighlightText> and <HighlightText>cloudy</HighlightText>!<br />
            Now playing: <HighlightText>{hourString} AC: NH Soundtrack</HighlightText>
        </p>
    )
}