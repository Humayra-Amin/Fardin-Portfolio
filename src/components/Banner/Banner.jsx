import React from "react";
import profile from '../../assets/images/propic.png'

const Banner = () => {
    return (
        <div className="bg-[#251C31] text-white min-h-screen flex flex-col items-center justify-center px-6">

            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 max-w-5xl w-full">

                {/* Left Section */}
                <div className="flex flex-col items-center lg:items-start">
                    <img src={profile} className="w-40 h-40 lg:w-48 lg:h-56 rounded-full shadow-[0_0_80px_20px_rgba(168,85,247,0.7)]"/>
                    <p className="text-sm text-gray-300 mt-6">
                        Hello! I am{" "}
                        <span className="text-purple-400 font-semibold">
                            Fardin Farabi Chowdhury
                        </span>
                    </p>
                </div>

                {/* Right Section */}
                <div className="text-center lg:text-left">
                    <p className="text-gray-400 text-xl">A Designer who</p>
                    <h1 className="text-3xl sm:text-4xl font-bold mt-2">
                        Believes good design is invisible <br />
                        but {" "}
                        <span className="text-purple-400 underline decoration-purple-500">
                            unforgettable
                        </span>
                        ...
                    </h1>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="text-center mt-10 max-w-3xl">
                <h2 className="text-2xl sm:text-3xl font-bold">
                    I'm a UI & UX Designer.|
                </h2>
                <p className="mt-2 text-gray-300">
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-400 hover:underline"
                    >
                    </a>
                </p>

                <p className="text-gray-400 text-sm sm:text-base">
                    An aspiring UI/UX designer passionate about crafting simple, user-friendly, and visually appealing digital experiences. Eager to learn and grow while turning creative ideas into reality.
                </p>
            </div>
        </div>
    );
};

export default Banner;
