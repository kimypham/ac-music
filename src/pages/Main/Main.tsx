import { Clock } from "./Clock";

export const Main = () => {
    return (
        <div className="flex px-[96px] font-bold text-[32px] self-center my-auto">
            {/* <div className='bg-[#85BFF5] dark:bg-[#093157] h-4/6 w-full fixed top-0 left-0 z-0 rounded-b-[200px]' /> */}

            <div className="z-10 flex-col text-center">
                <Clock />

                <div className="flex text-[36px] justify-center">
                    <div className='mr-[30px]'>Mostly Clear, 17°</div>
                    <div className=''>L: 15° H: 20°</div>
                </div>

                <div className='font-black text-[48px] text-lm-text-dark-blue bg-lm-white dark:bg-dm-black py-[35px] w-[80vw] rounded-[90px] shadow mt-[44px]'>
                    <h2 className='dark:text-dm-text-light-blue'>Now playing...</h2>
                    <h2 className='text-lm-text-blue dark:text-lm-text-dark-blue'>2PM - AC: NH Soundtrack</h2>
                    <h2 className='dark:text-lm-text-dark-blue text-[26px]'>*Audio controls go here*</h2>
                </div>
            </div>

        </div>
    );
};