import { ChangeEvent } from 'react';
import { SoundEffectValue, getSoundEffectLabelFromValue } from '../../common';

interface IToggleProps {
    value: SoundEffectValue;
    selectedOption: boolean;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Toggle = ({ value, selectedOption, onChange }: IToggleProps) => {
    return (
        <div className='flex items-center'>
            <p>{getSoundEffectLabelFromValue(value)}</p>
            <label className="toggle">
                <input type="checkbox" name="soundEffects" id={value} checked={selectedOption} onChange={onChange} />
                <span className="toggleCircle" />
            </label>
        </div>
    );
}