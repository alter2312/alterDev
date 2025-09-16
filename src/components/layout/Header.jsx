export function Header(){
    const NavLink = ({ href, children }) => (
        <a href={href} className="text-neutral-100 nav-link transition font-bold relative group">
            {children}
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-violet-700 transition-all duration-300 group-hover:w-full"></span>
        </a>
    );

    return (
        <header className="h-15 w-screen text-neutral-900 flex items-center justify-center gap-7 bg-neutral-800 ">
            <nav className="flex gap-7">
                <NavLink href="#home">Home</NavLink>
                <NavLink href="#about">About</NavLink>
                <NavLink href="#projects">Projects</NavLink>
                <NavLink href="#contact">Contact</NavLink>
            </nav>
        </header>
    );
}