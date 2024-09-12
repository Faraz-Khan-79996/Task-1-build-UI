import React from "react";
import truck from "./images/truck.png";
import pizza from "./images/pizza.png";
import pizzaCover from "./images/pizzaCover.png";
import pizzaComplete from "./images/pizzaComplete.png";

function HeroSection() {
    return (
        <>
            <section className="container mx-auto">
                <header className="flex flex-col md:flex-row justify-between items-end w-full h-[116px] relative z-10">
                    <div className="ml-[100px] hidden md:block z-10">
                        <img src={truck} alt="Truck" />
                    </div>
                    <div className="flex justify-end">
                        <button
                            href="#_"
                            className="inline-flex mr-2 md:mr-10 text-sm items-center justify-center h-[42px] w-[122px] px-10 py-0 mb-10 mt-4 md:mt-0 font-semibold text-center text-nowrap text-white no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-white border-solid rounded-full cursor-pointer select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline"
                        >
                            Get in Touch
                        </button>
                    </div>
                </header>

                <div className="flex flex-col-reverse relative top-[-116px] z-0 lg:flex-row justify-between">
                    {/* Text Section */}
                    <div className="w-full lg:w-[500px] flex flex-col space-y-8 items-center justify-center px-5 lg:ml-40">
                        <div className="w-full text-center lg:text-left">
                            <h1 className="font-sans font-bold text-[32px] sm:text-[42px] md:text-[52px] lg:text-[62px] leading-[40px] sm:leading-[50px] md:leading-[60px] lg:leading-[69px] text-primary">
                                Discover the <br />
                                <span className="text-orange">
                                    Best
                                </span> Food <br /> and Drinks
                            </h1>
                        </div>
                        <p className="lg:text-start font-primary text-secondary_dark w-full mt-3 md:mt-5 text-sm sm:text-base text-center">
                            Naturally made Healthcare Products for the <br />{" "}
                            better care & support of your body.
                        </p>
                        <div className="w-full mt-3 md:mt-4 text-center lg:text-left">
                            <button className="inline-block px-4 py-2 font-primary text-white bg-orange rounded-full hover:bg-orange">
                                Explore Now
                            </button>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="relative w-full lg:w-auto mb-10 lg:mb-0 flex justify-end">
                        <img
                            src={pizzaComplete}
                            className="w-full sm:w-[500px] md:w-[600px] lg:w-[735px] h-auto"
                            alt="Pizza"
                        />
                        {/* <img
                            src={pizza}
                            className="w-full sm:w-[500px] md:w-[600px] lg:w-[735px] h-auto"
                            alt="Pizza"
                        />
                        <img
                            src={pizzaCover}
                            className="absolute top-0 left-0  w-full sm:w-[520px] sm:left-[220px] md:w-[640px] md:-left-[-240px] lg:left-0 lg:w-[752px] h-auto"
                            alt="Pizza Cover"
                        /> */}
                    </div>
                </div>
            </section>
        </>
    );
}

export default HeroSection;
