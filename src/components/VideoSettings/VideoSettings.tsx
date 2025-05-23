import { ChangeEvent, useEffect, useState } from 'react';
import { createSearchParams, SetURLSearchParams, useNavigate, useSearchParams } from 'react-router-dom';
import { GameSoundtrackValue, ISettings, isRandomWeather, IWeatherProps, LocalStorageKey, WeatherVariantValue } from '../../common';
import { GameSoundtrackList, WeatherVariantList } from '../../common/constants';
import { RadioInputGroup } from '../RadioInputGroup';
import { VideoSettingsGroup } from '../VideoSettingsGroup';
import './VideoSettings.css';
import { getRandomWeatherVariantValue, getSettings } from './VideoSettings.service';

interface IVideoSettingsProps {
    location: IWeatherProps | undefined
};

export const VideoSettings = ({ location }: IVideoSettingsProps) => {
    const [searchParams]: [URLSearchParams, SetURLSearchParams] = useSearchParams();
    const navigate = useNavigate();

    const [settings, setSettings] = useState<ISettings>(getSettings(searchParams));
    const { gameSoundtrack, weatherVariant, gameTime }: ISettings = settings;

    useEffect(() => {
        localStorage.setItem(LocalStorageKey.Object, JSON.stringify(settings));
    }, [settings]);

    const setWeatherVariant = (selectedWeather: WeatherVariantValue) => {
        const newSettings: ISettings = { ...settings, [LocalStorageKey.WeatherVariant]: selectedWeather };
        setSettings(newSettings);
    };

    const navigateWithSettings = ({ game, time, weather }: { game: GameSoundtrackValue, time: string, weather: WeatherVariantValue }) => {
        navigate({
            search: createSearchParams({
                game,
                time,
                weather,
                // rain: `${newSettings.rainSoundEffectOn}`,
                // thunder: `${newSettings.thunderSoundEffectOn}`
            }).toString()
        });
    };

    interface IHandleRadioOptionChangeProps {
        changeEvent: ChangeEvent<HTMLInputElement>;
        stateVariable: LocalStorageKey;
    };

    const handleRadioOptionChange = ({ changeEvent, stateVariable }: IHandleRadioOptionChangeProps): void => {
        const isCheckboxChanged: boolean = stateVariable == LocalStorageKey.RainSoundEffectOn || stateVariable == LocalStorageKey.ThunderSoundEffectOn;
        const value: string | boolean = isCheckboxChanged ? changeEvent.target.checked : changeEvent.target.value;

        const newSettings: ISettings = { ...settings, [stateVariable]: value };
        const { weatherVariant } = newSettings;
        setSettings(newSettings);

        navigateWithSettings({
            game: gameSoundtrack,
            time: `${gameTime}`,
            weather: weatherVariant
        });
    };

    interface IHandleDropdownOptionChangeProps {
        changeEvent: ChangeEvent<HTMLSelectElement>;
        stateVariable: LocalStorageKey;
    };

    const handleDropdownOptionChange = ({ changeEvent, stateVariable }: IHandleDropdownOptionChangeProps): void => {
        const newSettings: ISettings = { ...settings, [stateVariable]: changeEvent.target.value };
        const { gameSoundtrack, gameTime, weatherVariant } = newSettings;
        setSettings(newSettings);

        navigateWithSettings({
            game: gameSoundtrack,
            time: `${gameTime}`,
            weather: weatherVariant
        });
    };

    useEffect(() => {
        if (weatherVariant === WeatherVariantValue.Random) {
            const randomWeatherValue: WeatherVariantValue = getRandomWeatherVariantValue();
            setWeatherVariant(randomWeatherValue);

            navigateWithSettings({
                game: gameSoundtrack,
                time: `${gameTime}`,
                weather: WeatherVariantValue.Random
            });
        };
    }, [weatherVariant]);

    useEffect(() => {
        if (!location && weatherVariant === WeatherVariantValue.Real) {
            setWeatherVariant(WeatherVariantValue.Normal);

            navigateWithSettings({
                game: gameSoundtrack,
                time: `${gameTime}`,
                weather: WeatherVariantValue.Normal
            });
        }

    }, [location]);

    return (
        <div className='flex-col text-[16px] lg:text-[20px]'>
            <VideoSettingsGroup title='Change soundtrack'>
                <RadioInputGroup
                    name={LocalStorageKey.GameSoundtrack}
                    values={GameSoundtrackList}
                    selectedOption={gameSoundtrack}
                    onChange={(changeEvent) => handleRadioOptionChange({ changeEvent, stateVariable: LocalStorageKey.GameSoundtrack })}
                />
            </VideoSettingsGroup>

            <VideoSettingsGroup title='Change weather variant'>
                <RadioInputGroup
                    name={LocalStorageKey.WeatherVariant}
                    values={WeatherVariantList}
                    selectedOption={isRandomWeather(weatherVariant) ? WeatherVariantValue.Random : weatherVariant}
                    onChange={(changeEvent) => handleRadioOptionChange({ changeEvent, stateVariable: LocalStorageKey.WeatherVariant })}
                    location={location}
                />
            </VideoSettingsGroup>

            <VideoSettingsGroup title='Change hour'>
                <select name="gameTime" id="gameTime" defaultValue={gameTime} onChange={(changeEvent) => handleDropdownOptionChange({ changeEvent, stateVariable: LocalStorageKey.GameTime })}>
                    <option value="current">Use Current</option>
                    <option value="1AM">1am</option>
                    <option value="2AM">2am</option>
                    <option value="3AM">3am</option>
                    <option value="4AM">4am</option>
                    <option value="5AM">5am</option>
                    <option value="6AM">6am</option>
                    <option value="7AM">7am</option>
                    <option value="8AM">8am</option>
                    <option value="9AM">9am</option>
                    <option value="10AM">10am</option>
                    <option value="11AM">11am</option>
                    <option value="12PM">12pm</option>
                    <option value="1PM">1pm</option>
                    <option value="2PM">2pm</option>
                    <option value="3PM">3pm</option>
                    <option value="4PM">4pm</option>
                    <option value="5PM">5pm</option>
                    <option value="6PM">6pm</option>
                    <option value="7PM">7pm</option>
                    <option value="8PM">8pm</option>
                    <option value="9PM">9pm</option>
                    <option value="10PM">10pm</option>
                    <option value="11PM">11pm</option>
                    <option value="12AM">12am</option>
                </select>
            </VideoSettingsGroup>

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
