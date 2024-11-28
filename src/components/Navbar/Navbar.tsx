import { Link } from "react-router-dom";

export const Navbar = () => (
    <nav className="flex px-[96px] py-[24px] font-black text-[20px] z-20">
        <h1 className="w-full"><Link to="/">AC Hourly Music</Link></h1>
        <Link to="/about" className="link text-[20px]">About</Link>
        {/* TODO: Maybe only show settings on mobile view
            <NavbarSettings /> */}
    </nav>
);