import { Link } from "react-router-dom";

export const Navbar = () => (
    <nav className="flex py-[24px] px-[24px] font-black text-[16px] lg:text-[20px] z-20">
        <h1 className="w-full"><Link to="/">AC Hourly Music</Link></h1>
        <Link to="/about" className="link">About</Link>
        {/* TODO: Maybe only show settings on mobile view
            <NavbarSettings /> */}
    </nav>
);