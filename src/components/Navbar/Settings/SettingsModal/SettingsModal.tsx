export const SettingsModal = ({ isOpen }: { isOpen: boolean }) => (
    <div className={`${isOpen ? 'transition ease-in-out duration-[900ms] -translate-x-[0px]' : 'transition ease-out duration-[900ms] translate-x-[391px]'} absolute right-0 p-[32px] w-[391px] h-auto mt-[24px] rounded-l-[45px] rounded-br-[45px] bg-lm-white dark:bg-dm-black text-lm-text-dark-blue dark:text-dm-text-light-blue shadow`} >
        <div className="flex justify-center mb-[16px] text-[24px]">
            <p>Settings</p>
        </div>

        <div className="flex flex-col gap-[24px] text-[20px] accent-lm-text-dark-blue dark:accent-dm-text-light-blue">
            <div>
                <p className="mb-[8px]">Sound effects</p>
                <div className="font-bold">
                    <label><input type="checkbox" id="rainSoundOn" name="rainSoundOn" value="rainSoundOn" /> Play rain sound effects?</label>
                    <p>*Volume controls go here*</p>
                </div>
            </div>

            <div>
                <p className="mb-[8px]">Game soundtrack to play</p>
                <div className="font-bold">
                    <label><input type="radio" id="gameSoundtrack1" name="gameSoundtrack" value="Original" /> Original</label><br />
                    <label><input type="radio" id="gameSoundtrack2" name="gameSoundtrack" value="WW/CF" /> WW/CF</label><br />
                    <label><input type="radio" id="gameSoundtrack3" name="gameSoundtrack" value="NL" /> NL</label><br />
                    <label><input type="radio" id="gameSoundtrack4" name="gameSoundtrack" value="NH" defaultChecked /> NH</label>
                </div>
            </div>

            <div>
                <p className="mb-[8px]">Weather variant to use</p>
                <div className="font-bold">
                    <label><input type="radio" id="weatherVariant1" name="weatherVariant" value="weather" defaultChecked /> Use current weather</label><br />
                    <label><input type="radio" id="weatherVariant2" name="weatherVariant" value="normal" /> Always play normal variant</label><br />
                    <label><input type="radio" id="weatherVariant3" name="weatherVariant" value="rainy" /> Always play rainy variant</label><br />
                    <label><input type="radio" id="weatherVariant4" name="weatherVariant" value="snowy" /> Always play snowy variant</label><br />
                </div>
            </div>

            <div>
                <p>Theme</p>
                <div className="font-bold">
                    <label><input type="radio" id="theme1" name="theme" value="system" defaultChecked /> Use system default</label><br />
                    <label><input type="radio" id="theme2" name="theme" value="light" /> Light mode</label><br />
                    <label><input type="radio" id="theme3" name="theme" value="dark" /> Dark mode</label>
                </div>
            </div>
        </div>
    </div>
);