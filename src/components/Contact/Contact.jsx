import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="min-h-screen bg-[#251C31] flex items-center justify-center px-6 py-12">
            <div className="w-full max-w-6xl grid md:grid-cols-2 gap-10">

                {/* Left Side - Info */}
                <div className="text-white space-y-6">
                    <h2 className="text-4xl font-bold text-purple-500">Get in Touch</h2>
                    <p className="text-gray-300 text-lg">
                        I’d love to hear from you! Whether you have a question, a project idea,
                        or just want to say hello, feel free to drop me a message.
                        I’ll get back to you as soon as possible.
                    </p>

                    <div className="space-y-4 mt-6">
                        <div className="flex items-center space-x-4">
                            <FaEnvelope className="text-purple-500 text-xl" />
                            <span className="text-gray-300">fardinfarabi1998@gmail.com</span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <FaPhoneAlt className="text-purple-500 text-xl" />
                            <span className="text-gray-300">+8801878131404</span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <FaMapMarkerAlt className="text-purple-500 text-xl" />
                            <span className="text-gray-300">Chittagong, Bangladesh</span>
                        </div>
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="bg-white rounded-2xl shadow-[0_0_50px_15px_rgba(168,85,247,0.7)] p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6 federant">
                        Send Me a Message
                    </h3>
                    <form className="space-y-4 mozilla">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="input input-bordered w-full"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="input input-bordered w-full"
                        />
                        <textarea
                            placeholder="Your Message"
                            className="textarea textarea-bordered w-full h-32"
                        ></textarea>
                        <button className="btn bg-[#513279] border border-[#513279] text-white w-full text-lg shadow-md hover:scale-105 transition-transform duration-200">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
