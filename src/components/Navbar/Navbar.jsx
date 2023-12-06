import { Link } from 'react-scroll'
const Navbar = () => {
    const navlinks = <>
        <li><Link  to="/" spy={true} smooth={true}   offset={50} duration={500}>Home</Link></li>
        <li><Link to="about" spy={true} smooth={true}   offset={-30} duration={500}>About</Link></li>
        <li><Link to="touch" spy={true} smooth={true}   offset={0} duration={500}>Contact</Link></li>
        <li><Link to="projects" spy={true} smooth={true}   offset={-30} duration={500}>Project</Link></li>
        <li><Link to="services" spy={true} smooth={true}   offset={-30} duration={500}>Services</Link></li>
        <li><Link>Blog</Link></li>
    </>
    return (
        <div id='nav'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navlinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-2xl uppercase ">Sakib Mia</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navlinks}
                    </ul>
                </div>
                <div className="navbar-end hidden lg:block md:block">
                    <Link to='https://drive.google.com/u/0/uc?id=1msaGOBK7O7u5vJXPt95h4Qqc2rMj151W&export=download'>
                        <button className="bg-[#7865ff] px-6 py-2 rounded text-white">Download Resume</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;