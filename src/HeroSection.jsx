import React from "react";
import truck from "./images/truck.png";
import pizza from "./images/pizza.png";
import pizzaCover from "./images/pizzaCover.png";
import pizzaComplete from "./images/pizzaComplete.png";

function HeroSection() {
    return (
        <>
            {/* <section className="container mx-auto">
            <header className="flex flex-col md:flex-row justify-between w-full mt-[32px] z-10">
                <div className="ml-[100px]">
                    <img src={truck} alt="" srcset="" />
                </div>
                <div className="">
                    <button
                        href="#_"
                        className="inline-flex mr-10 lex items-center justify-center h-16 px-10 py-0 text-xl font-semibold text-center text-white no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-black border-solid rounded-full cursor-pointer select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline"
                    >
                        Get in Touch
                    </button>
                </div>
            </header>
            <div className="flex justify-between">
                <div className=" w-[500px]  flex  flex-col items-center justify-center ml-40">
                    <div className="w-full">
                        <h1 className="font-sans font-bold text-[62px] leading-[69px] text-primary">
                            Discover the <br />
                            <span className="text-orange">Best</span> Food{" "}
                            <br /> and Drinks
                        </h1>
                    </div>
                    <p className="text-start w-full mt-5">
                        Naturally made Healthcare Products for the <br /> better
                        care & support of your body.
                    </p>
                    <div className="w-full mt-4">
                        <button
                            className=" inline-block px-5 py-2 mx-auto text-white bg-orange rounded-full hover:bg-orange md:mx-0"
                        >
                            Explore Now
                        </button>
                    </div>
                </div>
                <div className="relative ">
                    <img
                        src={pizza}
                        className="w-[735px] h-[804px]"
                        alt=""
                        srcset=""
                    />
                    <img
                        src={pizzaCover}
                        className="absolute top-0 left-0 w-[752px] h-[839px]"
                        alt=""
                        srcset=""
                    />
                </div>
            </div>
            
        </section> */}
            <section className="relative">
                <header className="flex flex-col md:flex-row justify-between w-full mt-[32px] z-10 absolute top-0">
                    <div className="ml-[100px] hidden md:block">
                        <img src={truck} alt="Truck" />
                    </div>
                    <div className="flex justify-end">
                        <button
                            href="#_"
                            className="inline-flex mr-2 md:mr-10 items-center justify-center h-16 px-10 py-0 text-xl font-semibold text-center text-white no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-white border-solid rounded-full cursor-pointer select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline"
                        >
                            Get in Touch
                        </button>
                    </div>
                </header>

                <div className="flex flex-col-reverse  lg:flex-row justify-between">
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
                        <p className="lg:text-start text-secondary_dark w-full mt-3 md:mt-5 text-sm sm:text-base text-center">
                            Naturally made Healthcare Products for the <br />{" "}
                            better care & support of your body.
                        </p>
                        <div className="w-full mt-3 md:mt-4 text-center lg:text-left">
                            <button className="inline-block px-4 py-2 text-white bg-orange rounded-full hover:bg-orange">
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
