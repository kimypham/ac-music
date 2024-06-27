import { IValueLabel } from '../../common';
import { ChangeEvent } from 'react';

interface IToggleProps {
    valuesLabel: IValueLabel;
    selectedOption: boolean;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Toggle = ({ valuesLabel, selectedOption, onChange }: IToggleProps) => {
    return (
        <div className='flex items-center'>
            <p>{valuesLabel.label}</p>
            <label className="toggle">
                <input type="checkbox" name="soundEffects" id={valuesLabel.value} checked={selectedOption} onChange={onChange} />
                <span className="toggleCircle" />
            </label>
        </div>
    );
}