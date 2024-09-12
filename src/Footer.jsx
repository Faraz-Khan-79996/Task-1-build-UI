import React from "react";
import truck from "./images/truck.png";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa"; // Import react-icons

const Footer = () => {
    return (
        <footer className="bg-gray-100 px-12 md:pt-20 pt-10 pb-20">
            <div className="container mx-auto px-4 flex flex-col items-start  md:flex-row justify-between  space-y-8 md:space-y-0">
                {/* Logo Section */}
                <div className="flex justify-center md:flex space-x-4 w-full md:w-auto">
                    {/* Replace the src with your logo */}
                    <img
                        src={truck}
                        alt="Food Truck"
                        className="w-[161px] h-[125px] mt-8"
                    />
                    {/* <h2 className="text-lg font-semibold">FOOD TRUCK</h2> */}
                </div>

                {/* Contact Information */}
                <div className="flex flex-col items-start  md:text-left">
                    <h3 className="text-lg font-bold text-primary">
                        Contact Us
                    </h3>
                    <p className="text-secondary mt-2">
                        Lorem Ipsum Pvt Ltd.
                        <br className="md:block hidden" />
                        5/1, Magalton Road,
                        <br className="md:block hidden" />
                        Phartosh Gate near YTM Market, XYZ-343434
                    </p>
                    <p className="text-secondary mt-4">example2020@gmail.com</p>
                    <p className="text-secondary mt-4">(904) 443-0343</p>
                </div>

                {/* More Links */}
                <div className="text-start md:text-left">
                    <ul className="space-y-6">
                        <h3 className="text-lg font-bold text-primary">
                            More
                        </h3>
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
                </div>

                {/* Social Links */}
                <div className="text-center hidden md:block md:flex flex-col md:text-left mr-10">
                    <h3 className="text-lg font-bold text-primary">
                        Social Links
                    </h3>
                    <div className="flex justify-center md:justify-start space-x-8 mt-2">
                        {/* Instagram */}
                        <a
                            href="https://www.instagram.com"
                            className="text-secondary hover:text-blue-600"
                        >
                            <FaInstagram className="text-2xl" />
                        </a>
                        {/* Twitter */}
                        <a
                            href="https://www.twitter.com"
                            className="text-secondary hover:text-blue-600"
                        >
                            <FaTwitter className="text-2xl" />
                        </a>
                        {/* Facebook */}
                        <a
                            href="https://www.facebook.com"
                            className="text-secondary hover:text-blue-600"
                        >
                            <FaFacebook className="text-2xl" />
                        </a>
                    </div>
                    <div className="mt-28 relative right-10 text-secondary">
                        © 2022 Food Truck Example
                    </div>
                </div>
                <div className="md:hidden w-full">
                    <div className="text-center">© 2022 Food Truck Example</div>
                    <div className="flex justify-center md:justify-start space-x-8 mt-4">
                        {/* Instagram */}
                        <a
                            href="https://www.instagram.com"
                            className="text-secondary hover:text-blue-600"
                        >
                            <FaInstagram className="text-2xl" />
                        </a>
                        {/* Twitter */}
                        <a
                            href="https://www.twitter.com"
                            className="text-secondary hover:text-blue-600"
                        >
                            <FaTwitter className="text-2xl" />
                        </a>
                        {/* Facebook */}
                        <a
                            href="https://www.facebook.com"
                            className="text-secondary hover:text-blue-600"
                        >
                            <FaFacebook className="text-2xl" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            {/* <div className="text-center mt-8">
        <p className="text-gray-500">© 2022 Food Truck Example</p>
      </div> */}
        </footer>
    );
};

export default Footer;
