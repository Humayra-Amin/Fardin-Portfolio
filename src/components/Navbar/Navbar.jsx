import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png'

const Navbar = () => {
    const links = <>
        <li><NavLink to="/" className={({ isActive }) => isActive ? 'underline underline-offset-8 decoration-[#dd96f7] decoration-2 decoration-wavy text-white' : 'text-white'}>Home</NavLink></li>
        <li><NavLink to="/project" className={({ isActive }) => isActive ? 'underline underline-offset-8 decoration-[#dd96f7] decoration-2 decoration-wavy text-white' : 'text-white'}>Project</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'underline underline-offset-8 decoration-[#dd96f7] decoration-2 decoration-wavy text-white' : 'text-white'}>Contact Me</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar bg-[#1A0B2E]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-white">
                            {links}
                        </ul>
                    </div>

                    <Link to='/' className="flex items-center ml-2 lg:ml-32">
                        <img src={logo} alt="logo" className="w-[40px] h-[40px] lg:w-[60px] lg:h-[65px] md:w-[100px] md:h-[80px] lg:ml-48" />
                    </Link>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-[18px] gap-12 text-white">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn bg-[#513279] border border-[#513279] rounded-3xl text-white lg:mr-56">Download CV</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;