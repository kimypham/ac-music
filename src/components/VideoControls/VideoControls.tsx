import { useTheme } from '../../hooks/useTheme';
import './VideoControls.css';

export const VideoControls = () => {
    const theme = useTheme();

    return (
        <div className="flex w-full mt-[6px]">
            <button className="px-[45px] h-[50px] mr-[10px] rounded-xl hover:bg-lm-hover-white dark:hover:bg-dm-bg-dark-green ease-out duration-300">
                <img src={`/${theme}/play.svg`} className="bg-white h-4/5" />
            </button>
            <img src={`/${theme}/volume/volume-medium.svg`} className='h-[40px] mr-[10px] m-auto'></img>
            <div className="flex w-full mr-[30px] m-auto">
                <input type="range" min="0" max="100" />
            </div>
        </div>
    )
}
