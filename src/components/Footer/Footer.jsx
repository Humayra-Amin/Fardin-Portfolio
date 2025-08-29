import React from 'react';
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { FaBehance, FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className="footer flex flex-col items-center justify-center bg-[#251C31] text-base-content p-10">

                {/* Logo */}
                <Link to='/' className="flex items-center justify-center">
                    <img
                        src={logo}
                        alt="logo"
                        className="w-[40px] h-[40px] lg:w-[60px] lg:h-[65px] md:w-[100px] md:h-[80px]"
                    />
                </Link>

                {/* Social Icons */}
                <div className="flex space-x-6 text-white text-2xl">
                    <a href="https://www.behance.net/fardinfarabi1" target="_blank" rel="noopener noreferrer">
                        <FaBehance className="hover:text-blue-400 transition-colors duration-300" />
                    </a>
                    <a href="https://www.linkedin.com/in/fardin-farabi-84b1462a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="hover:text-blue-600 transition-colors duration-300" />
                    </a>
                    <a href="https://www.facebook.com/share/1F8jSfpUuh/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="hover:text-blue-600 transition-colors duration-300" />
                    </a>
                </div>

                {/* Copyright */}
                <aside className="text-white text-center text-sm">
                    <p>
                        Copyright © {new Date().getFullYear()} -
                        All rights reserved by <span className="font-semibold">Fardin</span>
                    </p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;
