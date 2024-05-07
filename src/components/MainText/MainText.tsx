import { PropsWithChildren } from 'react';

export const MainText = () => {
    const HighlightText = ({ children }: PropsWithChildren) => {
        return <div className="text-lm-text-blue dark:text-dm-text-green inline">
            {children}
        </div>
    }

    return (
        <p className="font-extrabold leading-loose">
            It's currently <HighlightText>2:12pm</HighlightText> and <HighlightText>cloudy</HighlightText>!<br />
            Now playing: <HighlightText>2PM AC: NH Soundtrack</HighlightText>
        </p>
    )
}