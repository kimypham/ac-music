import { PropsWithChildren } from 'react';
import { FormattedHour } from '../../common';

interface IMainTextProps {
    time: Date,
    hour: FormattedHour
}

export const MainText = ({ time, hour }: IMainTextProps) => {
    const timeString: string = time.toLocaleTimeString(['en-AU'], { timeStyle: 'short' }).split(' ').join('');

    const HighlightText = ({ children }: PropsWithChildren) => {
        return <div className="text-lm-text-blue dark:text-dm-text-green inline">
            {children}
        </div>
    }

    return (
        <p className="font-extrabold leading-loose">
            It's currently <HighlightText>{timeString}</HighlightText> and <HighlightText>cloudy</HighlightText>!<br />
            Now playing: <HighlightText>{hour} AC: NH Soundtrack</HighlightText>
        </p>
    )
}