import './VideoSettings.css';
import { useEffect, ChangeEvent } from 'react';
import { useState } from 'react';
import { GameSoundtrackLabel, GameSoundtrackValue, ISettings, LocalStorageKey, SoundEffectLabel, SoundEffectValue, WeatherVariantLabel, WeatherVariantValue } from '../../common';
import { VideoSettingsGroup } from '../VideoSettingsGroup';
import { RadioInputGroup } from '../RadioInputGroup';
import { Toggle } from '../Toggle';
import { VolumeControl } from '../VolumeControl';


const initialSettings: ISettings = {
    gameSoundtrack: 'NH',
    weatherVariant: 'real',
    rainSoundEffectOn: false,
    thunderSoundEffectOn: false
};

const getFromLocalStorage = (key: LocalStorageKey): string | void => {
    const localStorageValue: string | null = localStorage.getItem(key);

    if (localStorageValue) {
        return localStorageValue;
    };
};

export const VideoSettings = () => {
    const [settings, setSettings] = useState<ISettings>(JSON.parse((getFromLocalStorage(LocalStorageKey.Object) ?? JSON.stringify(initialSettings))) as ISettings);

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
                    valuesLabels={[
                        { value: GameSoundtrackValue.Original, label: GameSoundtrackLabel.Original },
                        { value: GameSoundtrackValue.WWCF, label: GameSoundtrackLabel.WWCF },
                        { value: GameSoundtrackValue.NL, label: GameSoundtrackLabel.NL },
                        { value: GameSoundtrackValue.NH, label: GameSoundtrackLabel.NH },
                        { value: GameSoundtrackValue.Random, label: GameSoundtrackLabel.Random }
                    ]}
                    selectedOption={settings.gameSoundtrack}
                    onChange={(changeEvent) => handleOptionChange({ changeEvent, stateVariable: LocalStorageKey.GameSoundtrack })}
                />
            </VideoSettingsGroup>

            <VideoSettingsGroup title='Change weather variant'>
                <RadioInputGroup
                    name={LocalStorageKey.WeatherVariant}
                    valuesLabels={[
                        { value: WeatherVariantValue.Real, label: WeatherVariantLabel.Real },
                        { value: WeatherVariantValue.Normal, label: WeatherVariantLabel.Normal },
                        { value: WeatherVariantValue.Rainy, label: WeatherVariantLabel.Rainy },
                        { value: WeatherVariantValue.Snowy, label: WeatherVariantLabel.Snowy },
                        { value: WeatherVariantValue.Random, label: WeatherVariantLabel.Random }
                    ]}
                    selectedOption={settings.weatherVariant}
                    onChange={(changeEvent) => handleOptionChange({ changeEvent, stateVariable: LocalStorageKey.WeatherVariant })}
                />
            </VideoSettingsGroup>

            <VideoSettingsGroup title='Sound effects'>
                <div className='flex-col'>
                    <div className='flex gap-[50px]'>
                        <Toggle
                            valuesLabel={{ value: SoundEffectValue.Rain, label: SoundEffectLabel.Rain }}
                            selectedOption={settings.rainSoundEffectOn}
                            onChange={(changeEvent) => handleOptionChange({ changeEvent: changeEvent, stateVariable: LocalStorageKey.RainSoundEffectOn })}
                        />
                        <Toggle
                            valuesLabel={{ value: SoundEffectValue.Thunder, label: SoundEffectLabel.Thunder }}
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
