import { MainText, Video, VideoControls } from '../../components';

export const Main = () => {
    return (
        <div className="flex px-[96px] font-bold font-open-sans text-[32px] text-lm-brown text-center dark:text-dm-white self-center my-auto w-full h-full">
            <div className="flex-col bg-[#FFF9F5] dark:bg-dm-bg-green w-full h-full rounded-[30px] justify-center content-center">
                <MainText />
                <div className="flex mt-[32px] justify-center">
                    <div>
                        <Video />
                        <VideoControls />
                    </div>
                </div>
            </div>
        </div>
    );
};
