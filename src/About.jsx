import React from "react";
import AboutImage from "./images/about/about.png";

function About() {
    return (
        <section className="text-gray-700 flex items-center h-[517px] md:h-auto body-font bg-slate-100 my-24  px-32">
            <div className="container mx-auto flex flex-col md:flex-row px-5 items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded hidden md:block"
                        alt="hero"
                        src={AboutImage}
                    />
                </div>

                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-8 md:mb-4 font-bold text-primary">
                        About Us
                    </h1>
                    <p className="mb-8  w-[447px] text-secondary_dark leading-7">
                        Lorem Ipsum is simply dummy text of the printing <br className="block md:hidden"/> and
                        typesetting industry. Lorem Ipsum has been the<br className="block md:hidden"/>
                        industry's standard dummy text ever since the 1500s,<br className="block md:hidden"/>
                        when an unknown printer took a galley of type and<br className="block md:hidden"/>
                        scrambled it to make a type specimen book. it has<br className="block md:hidden"/>
                        survived not only five centuries.
                    </p>
                    <div className="flex justify-center">
                        <button class=" inline-block px-5 py-2 mt-2 md:mt-0 mx-auto text-white bg-orange rounded-full hover:bg-orange md:mx-0">
                            Explore Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
