import { useTheme } from "../../hooks";
import './VolumeControl.css';

export const VolumeControl = () => {
    const theme = useTheme();
    return (
        <>
            <img src={`/${theme}/volume/volume-medium.svg`} className='h-[40px] m-auto'></img>
            <div className="flex w-full m-auto">
                <input type="range" min="0" max="100" />
            </div>
        </>
    )
}