import './VideoSettings.css';
import { useEffect, ChangeEvent } from 'react';
import { useState } from 'react';
import { ISettings, LocalStorageKey, SoundEffectLabel, SoundEffectValue } from '../../common';
import { VideoSettingsGroup } from '../VideoSettingsGroup';
import { RadioInputGroup } from '../RadioInputGroup';
import { Toggle } from '../Toggle';
import { VolumeControl } from '../VolumeControl';
import { getSettingsFromLocalStorage } from '../../common/service';
import { GameSoundtrackList, WeatherVariantList } from '../../common/constants';

export const VideoSettings = () => {
    const [settings, setSettings] = useState<ISettings>(getSettingsFromLocalStorage);

    useEffect(() => {
        localStorage.setItem(LocalStorageKey.Object, JSON.stringify(settings));
    }, [settings]);

    interface IHandleOptionChangeProps {
        changeEvent: ChangeEvent<HTMLInputElement>;
        stateVariable: LocalStorageKey;
    };

    const handleOptionChange = ({ changeEvent, stateVariable }: IHandleOptionChangeProps): void => {
        const isCheckboxChanged: boolean = stateVariable == LocalStorageKey.RainSoundEffectOn || stateVariable == LocalStorageKey.ThunderSoundEffectOn;
        const value: string | boolean = isCheckboxChanged ? changeEvent.target.checked : changeEvent.target.value;

        const newObject: ISettings = { ...settings, [stateVariable]: value };
        setSettings(newObject);
    };

    return (
        <div className='flex-col text-[20px]'>
            <VideoSettingsGroup title='Change soundtrack'>
                <RadioInputGroup
                    name={LocalStorageKey.GameSoundtrack}
                    values={GameSoundtrackList}
                    selectedOption={settings.gameSoundtrack}
                    onChange={(changeEvent) => handleOptionChange({ changeEvent, stateVariable: LocalStorageKey.GameSoundtrack })}
                />
            </VideoSettingsGroup>

            <VideoSettingsGroup title='Change weather variant'>
                <RadioInputGroup
                    name={LocalStorageKey.WeatherVariant}
                    values={WeatherVariantList}
                    selectedOption={settings.weatherVariant}
                    onChange={(changeEvent) => handleOptionChange({ changeEvent, stateVariable: LocalStorageKey.WeatherVariant })}
                />
            </VideoSettingsGroup>

            <VideoSettingsGroup title='Sound effects'>
                <div className='flex-col'>
                    <div className='flex gap-[50px]'>
                        <Toggle
                            value={SoundEffectValue.Rain}
                            selectedOption={settings.rainSoundEffectOn}
                            onChange={(changeEvent) => handleOptionChange({ changeEvent: changeEvent, stateVariable: LocalStorageKey.RainSoundEffectOn })}
                        />
                        <Toggle
                            value={SoundEffectValue.Thunder}
                            selectedOption={settings.thunderSoundEffectOn}
                            onChange={(changeEvent) => handleOptionChange({ changeEvent: changeEvent, stateVariable: LocalStorageKey.ThunderSoundEffectOn })}
                        />
                    </div>
                    <div className='flex mt-[8px]'>
                        <VolumeControl />
                    </div>
                </div>
            </VideoSettingsGroup >
        </div >
    );
};
