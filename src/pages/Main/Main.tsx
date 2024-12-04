import { MainText, Video, VideoSettings } from '../../components';

export const Main = () => {
    return (
        <div className="flex font-bold font-open-sans text-lm-brown text-center dark:text-dm-white self-center my-auto w-full h-full">
            <div className="bg-[#FFF9F5] dark:bg-dm-bg-green w-full h-full lg:rounded-[30px] content-center place-content-evenly">
                <div className='mt-[24px] mx-[12px]'>
                    <MainText />
                </div>
                <div className="flex flex-col lg:flex-row place-content-evenly items-center lg:mx-[24px]">
                    <div className="w-11/12 md:w-3/4 lg:w-1/2 h-full my-[24px]">
                        <Video />
                        {/* <VideoControls /> */}
                    </div>
                    <div className='px-[24px] pb-[24px] lg:pb-0 w-full lg:w-auto overflow-hidden'>
                        <VideoSettings />
                    </div>
                </div>
            </div>
        </div>
    );
};
