import { ChangeEvent, Fragment } from 'react';
import { GameSoundtrackLabel, GameSoundtrackValue, IWeatherProps, LocalStorageKey, WeatherVariantLabel, WeatherVariantValue } from '../../common';
import { getSoundtrackLabelFromValue, getWeatherLabelFromValue } from '../../common/service';

interface IInputGroupProps {
    name: LocalStorageKey;
    values: GameSoundtrackValue[] | WeatherVariantValue[];
    selectedOption: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    location?: IWeatherProps | undefined
}

export const RadioInputGroup = ({ name, values, selectedOption, onChange, location }: IInputGroupProps) => {
    const isGameSoundtrackValue = (value: GameSoundtrackValue | WeatherVariantValue): value is GameSoundtrackValue => {
        return Object.values(GameSoundtrackValue).includes(value as GameSoundtrackValue);
    };

    return (
        <>
            {values.map((value) => {
                const label: GameSoundtrackLabel | WeatherVariantLabel = isGameSoundtrackValue(value) ? getSoundtrackLabelFromValue(value) : getWeatherLabelFromValue(value);
                const shouldBeDisabled: boolean = false;

                return (
                    <Fragment key={value}>
                        <input type='radio' name={name} id={value} value={value} checked={selectedOption == value} onChange={onChange} disabled={shouldBeDisabled} />
                        <label role='radio' className={shouldBeDisabled ? 'radio tooltip disabled' : 'radio tooltip'} htmlFor={value}>
                            {label}
                            {shouldBeDisabled && <span className="tooltiptext font-normal text-[10px]">To play soundtracks based on real/live weather conditions, please enable location.</span>}
                        </label>
                    </Fragment>
                );
            })}
        </>
    );
};