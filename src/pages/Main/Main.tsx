import { FormattedHour } from '../../common';
import { MainText, Video, VideoControls, VideoSettings } from '../../components';
import { useTime } from '../../hooks';
import { getHour } from './Main.service';

export const Main = () => {
    const time: Date = useTime();
    const hour: FormattedHour = getHour(time);

    return (
        <div className="flex px-[96px] font-bold font-open-sans text-[32px] text-lm-brown text-center dark:text-dm-white self-center my-auto w-full h-full">
            <div className="flex-col bg-[#FFF9F5] dark:bg-dm-bg-green w-full h-full rounded-[30px] justify-center content-center">
                <MainText time={time} hour={hour} />
                <div className="flex mt-[32px] place-content-evenly">
                    <div>
                        <Video hour={hour} />
                        <VideoControls />
                    </div>
                    <VideoSettings />
                </div>
            </div>
        </div>
    );
};
