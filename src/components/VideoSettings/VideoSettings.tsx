import './VideoSettings.css';
import { PropsWithChildren } from 'react';
import { VolumeControl } from '..';

export const VideoSettings = () => {

    interface ISettingsGroupProps extends PropsWithChildren<{}> {
        title: string;
    };

    const SettingsGroup = ({ title, children }: ISettingsGroupProps) => {
        return (
            <div className='mb-[30px]'>
                <p>{title}</p>
                <div className="flex gap-[10px] text-[14px] mt-[14px] justify-center">
                    {children}
                </div>
            </div>
        )
    };

    return (
        <div className='flex-col text-[20px]'>
            <SettingsGroup title='Change soundtrack'>
                <input type="radio" name="gameSoundtrack" id="original" />
                <label role="radio" className="radio" htmlFor="original">
                    Original
                </label>
                <input type="radio" name="gameSoundtrack" id="ww/cf" />
                <label role="radio" className="radio" htmlFor="ww/cf">
                    WW/CF
                </label>
                <input type="radio" name="gameSoundtrack" id="nl" />
                <label role="radio" className="radio" htmlFor="nl">
                    NL
                </label>
                <input type="radio" name="gameSoundtrack" id="nh" defaultChecked />
                <label role="radio" className="radio" htmlFor="nh">
                    NH
                </label>
                <input type="radio" name="gameSoundtrack" id="gameSoundtrackRandom" />
                <label role="radio" className="radio" htmlFor="gameSoundtrackRandom">
                    Random
                </label>
            </SettingsGroup>

            <SettingsGroup title='Change weather variant'>
                <input type="radio" name="weatherVariant" id="real" defaultChecked />
                <label role="radio" className="radio" htmlFor="real">
                    Real
                </label>
                <input type="radio" name="weatherVariant" id="normal" />
                <label role="radio" className="radio" htmlFor="normal">
                    Normal
                </label>
                <input type="radio" name="weatherVariant" id="rainy" />
                <label role="radio" className="radio" htmlFor="rainy">
                    Rainy
                </label>
                <input type="radio" name="weatherVariant" id="snowy" />
                <label role="radio" className="radio" htmlFor="snowy">
                    Snowy
                </label>
                <input type="radio" name="weatherVariant" id="weatherVariantRandom" />
                <label role="radio" className="radio" htmlFor="weatherVariantRandom">
                    Random
                </label>
            </SettingsGroup>

            <SettingsGroup title='Sound effects'>
                <div className='flex-col'>
                    <div className='flex gap-[50px]'>
                        <div className='flex items-center'>
                            <p>Rain</p>
                            <label className="toggle">
                                <input type="checkbox" name="soundEffects" id="rain" />
                                <span className="toggleCircle" />
                            </label>
                        </div>
                        <div className='flex items-center'>
                            <p>Thunder</p>
                            <label className="toggle">
                                <input type="checkbox" name="soundEffects" id="thunder" />
                                <span className="toggleCircle" />
                            </label>
                        </div>
                    </div>
                    <div className='flex mt-[8px]'>
                        <VolumeControl />
                    </div>
                </div>
            </SettingsGroup >
        </div >
    );
};