import React from "react";
import AboutImage from "./images/about/about.png";

function About() {
    return (
        <section className="text-gray-700 flex items-center h-[517px] md:h-auto body-font bg-slate-100 my-0 md:my-24 px-32" aria-labelledby="about-heading">
            <div className="container mx-auto flex flex-col md:flex-row px-5 items-center">
                <figure className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded hidden md:block"
                        alt="Illustration representing our company"
                        src={AboutImage}
                    />
                </figure>

                <article className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h2 id="about-heading" className="title-font font-primary sm:text-4xl text-3xl mb-8 md:mb-4 font-bold text-primary">
                        About Us
                    </h2>
                    <p className="mb-8 w-[300px] sm:w-[447px] font-primary text-secondary_dark leading-7">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. it has
                        survived not only five centuries.
                    </p>
                    <div className="flex justify-center">
                        <a href="#explore" className="font-primary inline-block px-5 py-2 mt-2 md:mt-0 mx-auto text-white bg-orange rounded-full hover:bg-orange md:mx-0">
                            Explore Now
                        </a>
                    </div>
                </article>
            </div>
        </section>
    );
}

export default About;
