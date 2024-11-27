export const About = () => {
    return (
        <div className="flex px-[96px] font-open-sans text-[32px] text-lm-brown text-left dark:text-dm-white self-center my-auto w-full h-full">
            <div className="flex-col bg-[#FFF9F5] dark:bg-dm-bg-green w-full h-full rounded-[30px]">
                <h1 className="text-[32px] text-center py-4 font-bold">About</h1>
                <div className='flex-col text-[20px] px-8'>
                    <p>Welcome to AC Hourly Music! 🌱<br /><br />
                        Enjoy the calming and nostalgic tunes of AC without ever having to pick up your console. AC Hourly Music lets you listen to the game's hourly soundtracks based on your real time of day! Whether you're working, studying, or just relaxing, these cozy tunes will bring the magic of the game to your everyday life. Happy listening!</p><br />

                    <h2 className="text-[24px] pb-4 font-bold">Features</h2>
                    <p>⏰ <b>Real time hourly tracks</b><br />
                        Listen to each unique song for every hour of the day, just like in the games!</p><br />

                    <p>🎮 <b>Choose your favourite soundtrack</b><br />
                        Switch between iconic soundtracks from across the years of the game series</p><br />
                </div>
            </div>
        </div>
    );
};