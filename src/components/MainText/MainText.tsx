import { PropsWithChildren } from 'react';
import { FormattedHour } from '../../common';
import { useTime } from '../../hooks';
import { getHour } from '../../common/service';

export const MainText = () => {
    const time: Date = useTime();
    const timeString: string = time.toLocaleTimeString(['en-AU'], { timeStyle: 'short' }).split(' ').join('');
    const hour: FormattedHour = getHour(time);

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