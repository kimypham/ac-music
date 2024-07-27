import { ChangeEvent } from 'react';
import { GameSoundtrackLabel, GameSoundtrackValue, LocalStorageKey, WeatherVariantLabel, WeatherVariantValue } from '../../common';
import { getSoundtrackLabelFromValue, getWeatherLabelFromValue } from '../../common/service';

interface IInputGroupProps {
    name: LocalStorageKey;
    values: GameSoundtrackValue[] | WeatherVariantValue[];
    selectedOption: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const RadioInputGroup = ({ name, values, selectedOption, onChange }: IInputGroupProps) => {
    const isGameSoundtrackValue = (value: GameSoundtrackValue | WeatherVariantValue): value is GameSoundtrackValue => {
        return Object.values(GameSoundtrackValue).includes(value as GameSoundtrackValue);
    };

    return (
        <>
            {values.map((value) => {
                const label: GameSoundtrackLabel | WeatherVariantLabel = isGameSoundtrackValue(value) ? getSoundtrackLabelFromValue(value) : getWeatherLabelFromValue(value);

                return (
                    <>
                        <input type='radio' name={name} id={value} value={value} checked={selectedOption == value} onChange={onChange} />
                        <label role='radio' className='radio' htmlFor={value}>
                            {label}
                        </label>
                    </>
                );
            })}
        </>
    );
};