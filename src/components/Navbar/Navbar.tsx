export const Navbar = () => (
    <nav className="flex px-[96px] py-[24px] font-black text-[20px] z-20">
        <h1 className="w-full"><a href="/">AC Hourly Music</a></h1>
        <a href="/about" className="link text-[20px]">About</a>
        {/* TODO: Maybe only show settings on mobile view
            <NavbarSettings /> */}
    </nav>
);