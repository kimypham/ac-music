import { useState } from 'react';
import { IoMdSettings } from 'react-icons/io';
import { NavbarSettingsModal } from '../NavbarSettingsModal';

export const NavbarSettings = () => {
    const [runOpenAnimation, setRunOpenAnimation] = useState(false);
    const [runCloseAnimation, setRunCloseAnimation] = useState(false);


    const onSettingsClick = (): void => {
        setRunOpenAnimation(!runOpenAnimation)
        setRunCloseAnimation(runOpenAnimation)
    }

    return (
        <div>
            <div className={`${runOpenAnimation && "animate-spin-right" || runCloseAnimation && "animate-spin-left"} hover:text-lm-hover dark:hover:text-lm-text-blue`}
                onClick={onSettingsClick}>
                <IoMdSettings size="45px" />
            </div>

            <NavbarSettingsModal isOpen={runOpenAnimation} />
        </div>
    );
};