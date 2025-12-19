import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
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
            description: "Modern landing page for creative agencies with clean layout and smooth UX.",
            image: project1,
            link: "https://www.behance.net/gallery/232476519/Agency-Landing-Page"
        },
        {
            title: "Contact Dashboard",
            description: "User-friendly dashboard for managing and organizing contacts efficiently.",
            image: project2,
            link: "https://www.behance.net/gallery/232472791/Contact-Dashboard"
        },
        {
            title: "Vapeshop Landing Page",
            description: "Bold landing page design focused on branding and product highlights.",
            image: project3,
            link: "https://www.behance.net/gallery/209897577/Vapeshop-Landing-Page"
        },
        {
            title: "Furniture Landing Page",
            description: "Minimal furniture website showcasing products with elegance and clarity.",
            image: project4,
            link: "https://www.behance.net/gallery/209896509/Furniture-Landing-Page"
        },
        {
            title: "Turf Easy UX Case Study",
            description: "UX case study covering research, wireframes, and usability improvements.",
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
        <div className="bg-[#251C31] py-16">
            <h2 className="text-center text-3xl lg:text-4xl font-bold text-white mb-14 federant">
                My Projects
            </h2>

            <div className="w-11/12 mx-auto">
                <Swiper
                    modules={[Autoplay, Pagination]}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    pagination={{ clickable: true, el: ".swiper-pagination" }}
                    spaceBetween={24}
                    slidesPerView={1}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1280: { slidesPerView: 4 },
                    }}
                    loop
                    className="pb-0"
                >
                    {projects.map((project, index) => (
                        <SwiperSlide key={index}>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block h-[380px] rounded-xl overflow-hidden
                           bg-[#1d1526]
                           border border-white/10
                           hover:border-purple-500/40
                           transition-all duration-300"
                            >
                                {/* Image */}
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="h-48 w-full object-cover"
                                />

                                {/* Content */}
                                <div className="p-5">
                                    <h3 className="text-lg font-semibold text-white mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-gray-300 leading-relaxed">
                                        {project.description}
                                    </p>
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
