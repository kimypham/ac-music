import { VolumeControl } from '..';
import { useTheme } from '../../hooks';

export const VideoControls = () => {
    const theme = useTheme();

    return (
        <div className="flex w-full mt-[6px]">
            <button className="px-[45px] h-[50px] mr-[10px] rounded-xl hover:bg-lm-hover-white dark:hover:bg-dm-button-hover ease-out duration-300">
                <img src={`/${theme}/play.svg`} className="bg-white h-4/5" />
            </button>
            <div className='flex w-full mr-[30px]'>
                <VolumeControl />
            </div>
        </div>
    )
}
