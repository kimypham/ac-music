import { ChangeEvent } from 'react';
import { IValueLabel, LocalStorageKey } from '../../common';

interface IInputGroupProps {
    name: LocalStorageKey;
    valuesLabels: IValueLabel[];
    selectedOption: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const RadioInputGroup = ({ name, valuesLabels, selectedOption, onChange }: IInputGroupProps) => (
    <>
        {valuesLabels.map(({ value, label }) => (
            <>
                <input type='radio' name={name} id={value} value={value} checked={selectedOption == value} onChange={onChange} />
                <label role='radio' className='radio' htmlFor={value}>
                    {label}
                </label>
            </>
        )
        )}
    </>
);