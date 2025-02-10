import ThemeToggle from "./ToggleLightDark"

const HeaderBar = () => {
    const style = "p-5 justify-center transform transition-all duration-500 ease-in-out hover:scale-110 hover:text-blue-500"
    return (
        <>
            <header className="p-3 fixed w-full top-2">
                <nav className="container mx-auto flex justify-center">
                    <ul className="flex gap-2 pt-1">
                        <li><a href="/" className={`${style}`}>Home</a></li>
                        <li><a href="/projects" className={`${style}`}>Projects</a></li>
                        <li><a href="/contact" className={`${style}`}>Contact</a></li>
                    </ul>
                    <ThemeToggle/>
                </nav>
            </header>
        </>
    )
}

export default HeaderBar;