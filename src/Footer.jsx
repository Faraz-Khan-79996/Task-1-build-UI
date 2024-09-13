import React from "react";
import truck from "./images/truck.png";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa"; // Import react-icons

const Footer = () => {
    return (
        <footer className="bg-gray-100 px-12 md:pt-20 pt-10 pb-20">
            <div className="container mx-auto px-4 flex flex-col items-start md:flex-row justify-between space-y-8 md:space-y-0">
                {/* Logo Section */}
                <div className="flex justify-center md:flex space-x-4 w-full md:w-auto">
                    <img
                        src={truck}
                        alt="Food Truck Logo"
                        className="w-[161px] h-[125px] mt-8"
                    />
                </div>

                {/* Contact Information */}
                <address className="flex flex-col items-start md:text-left not-italic">
                    <h2 className="text-lg font-bold text-primary">
                        Contact Us
                    </h2>
                    <p className="text-secondary mt-2">
                        Lorem Ipsum Pvt Ltd.<br className="md:block hidden" />
                        5/1, Magalton Road,<br className="md:block hidden" />
                        Phartosh Gate near YTM Market, XYZ-343434
                    </p>
                    <a href="mailto:example2020@gmail.com" className="text-secondary mt-4">example2020@gmail.com</a>
                    <a href="tel:+19044430343" className="text-secondary mt-4">(904) 443-0343</a>
                </address>

                {/* More Links */}
                <nav className="text-start md:text-left">
                    <h2 className="text-lg font-bold text-primary mb-6">
                        More
                    </h2>
                    <ul className="space-y-6">
                        <li>
                            <a
                                href="#about"
                                className="text-secondary hover:text-blue-600"
                            >
                                About Us
                            </a>
                        </li>
                        <li>
                            <a
                                href="#products"
                                className="text-secondary hover:text-blue-600"
                            >
                                Products
                            </a>
                        </li>
                        <li>
                            <a
                                href="#career"
                                className="text-secondary hover:text-blue-600"
                            >
                                Career
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className="text-secondary hover:text-blue-600"
                            >
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </nav>

                {/* Social Links */}
                <div className="text-center hidden md:flex flex-col md:text-left mr-10">
                    <h2 className="text-lg font-bold text-primary">
                        Social Links
                    </h2>
                    <nav className="flex justify-center md:justify-start space-x-8 mt-2">
                        <a
                            href="https://www.instagram.com"
                            className="text-secondary hover:text-blue-600"
                            aria-label="Instagram"
                        >
                            <FaInstagram className="text-2xl" />
                        </a>
                        <a
                            href="https://www.twitter.com"
                            className="text-secondary hover:text-blue-600"
                            aria-label="Twitter"
                        >
                            <FaTwitter className="text-2xl" />
                        </a>
                        <a
                            href="https://www.facebook.com"
                            className="text-secondary hover:text-blue-600"
                            aria-label="Facebook"
                        >
                            <FaFacebook className="text-2xl" />
                        </a>
                    </nav>
                    <p className="mt-28 relative right-10 text-secondary">
                        © 2022 Food Truck Example
                    </p>
                </div>
                <div className="md:hidden w-full">
                    <p className="text-center text-secondary">© 2022 Food Truck Example</p>
                    <nav className="flex justify-center md:justify-start space-x-8 mt-4">
                        <a
                            href="https://www.instagram.com"
                            className="text-secondary hover:text-blue-600"
                            aria-label="Instagram"
                        >
                            <FaInstagram className="text-2xl" />
                        </a>
                        <a
                            href="https://www.twitter.com"
                            className="text-secondary hover:text-blue-600"
                            aria-label="Twitter"
                        >
                            <FaTwitter className="text-2xl" />
                        </a>
                        <a
                            href="https://www.facebook.com"
                            className="text-secondary hover:text-blue-600"
                            aria-label="Facebook"
                        >
                            <FaFacebook className="text-2xl" />
                        </a>
                    </nav>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
