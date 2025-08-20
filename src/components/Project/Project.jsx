import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay, Pagination } from 'swiper/modules';

import project1 from '../../assets/images/project1.jpg';
import project2 from '../../assets/images/project2.jpg';
import project3 from '../../assets/images/project3.jpg';
import project4 from '../../assets/images/project4.jpg';
import project5 from '../../assets/images/project5.jpg';
import project6 from '../../assets/images/project6.jpg';
import project8 from '../../assets/images/project8.jpg';

const Project = () => {
    const projects = [
        {
            title: "Agency Landing Page",
            description: "A modern and visually engaging landing page designed for creative agencies, featuring a sleek layout, smooth interactions, and a professional aesthetic to attract clients effectively.",
            image: project1,
            link: "https://www.behance.net/gallery/232476519/Agency-Landing-Page"
        },
        {
            title: "Contact Dashboard",
            description: "An intuitive and user-friendly dashboard that simplifies contact management, offering an organized interface with essential tools for tracking, editing, and managing users efficiently.",
            image: project2,
            link: "https://www.behance.net/gallery/232472791/Contact-Dashboard"
        },
        {
            title: "Vapeshop Landing Page",
            description: "A bold and stylish landing page crafted for a vape store, designed with product highlights, modern typography, and clean visuals to improve brand identity and customer engagement.",
            image: project3,
            link: "https://www.behance.net/gallery/209897577/Vapeshop-Landing-Page"
        },
        {
            title: "Furniture Landing Page",
            description: "A minimal yet elegant furniture store landing page that focuses on showcasing products with high-quality visuals, smooth navigation, and a warm aesthetic to enhance customer trust.",
            image: project4,
            link: "https://www.behance.net/gallery/209896509/Furniture-Landing-Page"
        },
        {
            title: "Turf Easy App UX Case Study",
            description: "A complete UX case study of Turf Easy, an app designed for sports turf booking. The project highlights user research, wireframes, and design solutions to improve accessibility and usability.",
            image: project5,
            link: "https://www.behance.net/gallery/219584351/Turf-Easy-App-UX-Case-Study"
        },
        {
            title: "POOKIE App UX Case Study",
            description: "An in-depth UX case study for the POOKIE app, focusing on problem-solving through user research, wireframes, and interactive prototypes to deliver a smooth and engaging experience.",
            image: project6,
            link: "https://www.behance.net/gallery/207863975/POOKIE-app-UX-case-study"
        },
        {
            title: "Hotel Resort Landing Page",
            description: "A luxury-inspired landing page for a resort and hotel, featuring elegant visuals, an inviting color palette, and user-friendly design to create an attractive digital presence for travelers.",
            image: project8,
            link: "https://www.behance.net/gallery/209372263/Hotel-Resort-Landing-Page"
        }

    ];

    return (
        <div className="bg-[#251C31] py-10">
            <h2 className="text-center text-3xl lg:text-4xl font-bold text-white mb-20 federant">My Projects</h2>

            <div className="w-11/12 mx-auto shadow-[0_0_50px_15px_rgba(168,85,247,0.7)] rounded-xl">
                <Swiper
                    modules={[Autoplay, Pagination]}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    spaceBetween={20}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1280: { slidesPerView: 4 },
                    }}
                    loop={true}
                >
                    {projects.map((project, index) => (
                        <SwiperSlide key={index}>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative block h-[400px] rounded-lg overflow-hidden group shadow-lg"
                            >
                                {/* Project Image */}
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition duration-500 group-hover:opacity-40"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 opacity-0 group-hover:opacity-100 transition duration-500">
                                    <h2 className="text-2xl font-bold text-white drop-shadow-lg">{project.title}</h2>
                                    <p className="text-gray-200 mt-2 drop-shadow-lg">{project.description}</p>
                                </div>
                            </a>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Project;
