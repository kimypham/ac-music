import { MainText, Video, VideoControls, VideoSettings } from '../../components';

export const Main = () => {
    return (
        <div className="flex px-[96px] font-bold font-open-sans text-[32px] text-lm-brown text-center dark:text-dm-white self-center my-auto w-full h-full">
            <div className="flex-col bg-[#FFF9F5] dark:bg-dm-bg-green w-full h-full rounded-[30px] justify-center content-center">
                <MainText />
                <div className="flex mt-[32px] place-content-evenly">
                    <div>
                        <Video />
                        <VideoControls />
                    </div>
                    <VideoSettings />
                </div>
            </div>
        </div>
    );
};
