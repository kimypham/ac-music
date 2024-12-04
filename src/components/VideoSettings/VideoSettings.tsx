import { ChangeEvent, useEffect, useState } from 'react';
import { createSearchParams, SetURLSearchParams, useNavigate, useSearchParams } from 'react-router-dom';
import { ISettings, LocalStorageKey } from '../../common';
import { GameSoundtrackList } from '../../common/constants';
import { RadioInputGroup } from '../RadioInputGroup';
import { VideoSettingsGroup } from '../VideoSettingsGroup';
import './VideoSettings.css';
import { getSettings } from './VideoSettings.service';

export const VideoSettings = () => {
    const [searchParams]: [URLSearchParams, SetURLSearchParams] = useSearchParams();

    const [settings, setSettings] = useState<ISettings>(getSettings(searchParams));
    const navigate = useNavigate();

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

        const newSettings: ISettings = { ...settings, [stateVariable]: value };
        setSettings(newSettings);

        navigate({
            search: createSearchParams({
                game: newSettings.gameSoundtrack,
                // weather: newSettings.weatherVariant,
                // rain: `${newSettings.rainSoundEffectOn}`,
                // thunder: `${newSettings.thunderSoundEffectOn}`
            }).toString()
        });
    };

    return (
        <div className='flex-col text-[16px] lg:text-[20px]'>
            <VideoSettingsGroup title='Change soundtrack'>
                <RadioInputGroup
                    name={LocalStorageKey.GameSoundtrack}
                    values={GameSoundtrackList}
                    selectedOption={settings.gameSoundtrack}
                    onChange={(changeEvent) => handleOptionChange({ changeEvent, stateVariable: LocalStorageKey.GameSoundtrack })}
                />
            </VideoSettingsGroup>

            {/* <VideoSettingsGroup title='Change weather variant'>
                <RadioInputGroup
                    name={LocalStorageKey.WeatherVariant}
                    values={WeatherVariantList}
                    selectedOption={settings.weatherVariant}
                    onChange={(changeEvent) => handleOptionChange({ changeEvent, stateVariable: LocalStorageKey.WeatherVariant })}
                />
            </VideoSettingsGroup> */}

            {/* <VideoSettingsGroup title='Sound effects'>
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
            </VideoSettingsGroup > */}
        </div >
    );
};
