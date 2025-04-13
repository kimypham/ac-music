import { IWeatherProps, mapWeatherCode, mapWeatherCondition, WeatherVariantValue } from '../../common';
import { MainText, Video, VideoSettings } from '../../components';
import { useLocation, useTime, useWeather } from '../../hooks';

export const Main = () => {
    const time: Date = useTime();
    const location: IWeatherProps | undefined = useLocation();
    const weatherResponse = useWeather(time, location);
    const weatherString: string | undefined = weatherResponse ? mapWeatherCode(weatherResponse.weatherCode) : undefined;
    const chosenRealWeather: WeatherVariantValue | undefined = weatherString ? mapWeatherCondition(weatherString) : undefined;

    return (
        <div className="flex font-bold font-open-sans text-lm-brown text-center dark:text-dm-white self-center my-auto w-full h-full">
            <div className="bg-[#FFF9F5] dark:bg-dm-bg-green w-full h-full lg:rounded-[30px] content-center place-content-evenly">
                <div className='mt-[24px] mx-[12px]'>
                    <MainText time={time} weatherString={weatherString} chosenRealWeather={chosenRealWeather} />
                </div>
                <div className="flex flex-col lg:flex-row place-content-evenly items-center mb-[24px] lg:mx-[24px]">
                    <div className="w-11/12 md:w-3/4 lg:w-1/2 h-full my-[24px]">
                        <Video time={time} chosenRealWeather={chosenRealWeather} />
                        {/* <VideoControls /> */}
                    </div>
                    <div className='px-[24px] pb-[24px] lg:pb-0 w-full lg:w-auto overflow-hidden'>
                        <VideoSettings location={location} />
                    </div>
                </div>
            </div>
        </div>
    );
};
