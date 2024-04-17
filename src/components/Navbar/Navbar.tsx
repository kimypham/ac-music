import { Settings } from './Settings';

export const Navbar = () => (
    <nav className="flex px-[96px] py-[38px] font-black text-[32px]">
        <h1 className="w-full"><a href="/">AC Hourly Music</a></h1>

        <div className="flex justify-end gap-[61px] self-center overflow-hidden w-full">
            <a href="/about" className="link text-[24px]">About</a>
            <Settings />
        </div>
    </nav>
);