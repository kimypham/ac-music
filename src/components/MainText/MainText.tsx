import { PropsWithChildren } from 'react';
import { FormattedHour, GameSoundtrackLabel, ISettings, WeatherVariantLabel, WeatherVariantValue } from '../../common';
import { getHour, getSettingsFromLocalStorage, getSoundtrackLabelFromValue, getWeatherLabelFromValue } from '../../common/service';

interface IMainTextProps {
    time: Date,
    weatherString: string | undefined,
    chosenRealWeather: WeatherVariantValue | undefined
};

export const MainText = ({ time, weatherString, chosenRealWeather }: IMainTextProps) => {
    const timeString: string = time.toLocaleTimeString(['en-AU'], { timeStyle: 'short' }).split(' ').join('');
    const hour: FormattedHour = getHour(time);

    const { gameSoundtrack, weatherVariant }: ISettings = getSettingsFromLocalStorage();
    const soundtrack: GameSoundtrackLabel = getSoundtrackLabelFromValue(gameSoundtrack);
    const weather: WeatherVariantLabel = getWeatherLabelFromValue(weatherVariant)

    const getWeatherString = (weatherLabel: WeatherVariantLabel, chosenRealWeather: WeatherVariantValue | undefined): string => {
        if (weatherLabel === WeatherVariantLabel.Real) {
            if (!chosenRealWeather || chosenRealWeather === WeatherVariantValue.Normal) {
                return '';
            } else {
                return `(${getWeatherLabelFromValue(chosenRealWeather)})`;
            };
        } else if (weatherLabel === WeatherVariantLabel.Normal) {
            return '';
        };
        return `(${weatherLabel})`;
    };


    const HighlightText = ({ children }: PropsWithChildren) => {
        return <p className="text-lm-text-blue dark:text-dm-text-green inline">
            {children}
        </p>
    };

    return (
        <div className="font-extrabold leading-loose text-[20px] lg:text-[32px]">
            It's currently <HighlightText>{timeString}</HighlightText>{weatherString && <> and <HighlightText>{weatherString}</HighlightText></>}!<br />
            Now playing: <HighlightText>{hour} AC: {soundtrack} Soundtrack {getWeatherString(weather, chosenRealWeather)}</HighlightText>
        </div>
    );
};