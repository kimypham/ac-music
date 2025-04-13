export const About = () => {
    return (
        <div className="flex font-bold font-open-sans text-lm-brown text-center dark:text-dm-white self-center my-auto w-full h-full">
            <div className="bg-[#FFF9F5] dark:bg-dm-bg-green w-full h-full lg:rounded-[30px] content-center place-content-evenly">
                <div className='mt-[24px] mx-[12px]'>
                    <h1 className="font-extrabold leading-loose text-[20px] lg:text-[32px]">About</h1>
                </div>
                <div className="place-content-evenly text-left mb-[24px] lg:mx-[24px] px-[24px] font-normal text-[16px] lg:text-[20px]">
                    <p>
                        Welcome to AC Hourly Music! 🌱<br />
                        Listen to soundtracks from the game series 'Animal Crossing' based off your current time and weather conditions.<br />
                    </p>
                    <br />

                    <h2 className="text-[24px] pb-4 font-bold">Features</h2>
                    <p>
                        <b>🎮 Choose your favourite game soundtrack</b><br />
                        Switch between iconic soundtracks from across the years of the game series. Updated whenever a new game comes out.
                    </p>
                    <br />

                    <p>
                        <b>⏰ Real time hourly tracks</b><br />
                        Each hour plays a different song, just like in the games! (So that's 24 possible tracks to listen to in a day!)<br />
                        Or if you prefer, you can also choose specific times to listen to as well.
                    </p>
                    <br />

                    <p>
                        <b>🌦️ Real time weather tracks</b><br />
                        Depending on your real weather, the tracks change too!<br />
                        Or if you prefer, you can also choose to stick to a specific weather variation to listen to as well.
                    </p>
                    <br />
                </div>
            </div>
        </div>
    );
};