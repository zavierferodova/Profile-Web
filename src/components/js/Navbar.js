import '../css/Navbar.css';

/* Handle NavbarScroll */
function navbarScroll() {
    const handleScroll = () => {
        window.addEventListener("scroll", () => {
            const navbar = document.querySelector('.navbar');
            const scrollMin = 50;
    
            if (document.body.scrollTop > scrollMin || document.documentElement.scrollTop > scrollMin)
                navbar.classList.add("scrolled");
            else
                navbar.classList.remove("scrolled");
        });
    };

    document.addEventListener("DOMContentLoaded", handleScroll);
}

function Navbar() {
    return(
        <div className="navbar" onLoad={navbarScroll()}>
            <div className="wrapper">
                <div className="logo">Portfolio</div>
                <div className="right-nav-button">
                    <a href="#about" className="nav-btn">About</a>
                    <a href="#technology" className="nav-btn">Technology</a>
                    <a href="#certificates" className="nav-btn">Certificates</a>
                    <a href="#projects" className="nav-btn">Projects</a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;