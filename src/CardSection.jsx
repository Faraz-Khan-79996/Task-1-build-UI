import React, { useState } from "react";
import { motion } from "framer-motion";
import CustomCard from "./components/CustomCard";

import img1 from "./images/cards/img1.png";
import img2 from "./images/cards/img2.png";
import img3 from "./images/cards/img3.png";
import img4 from "./images/cards/img4.png";
import img5 from "./images/cards/img5.png";
import img6 from "./images/cards/img6.png";

const CardPagination = () => {
    const cards = [
        {
            id: 1,
            title: "Grilled Tomatoes at Home",
            description: {
                long: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley....",
                short: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
            },
            image: img1,
        },
        {
            id: 2,
            title: "Snacks for Travel",
            description: {
                long: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley....",
                short: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
            },
            image: img2,
        },
        {
            id: 3,
            title: "Post-workout Recipes",
            description: {
                long: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley....",
                short: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
            },
            image: img3,
        },
        {
            id: 4,
            title: "Healthy Salad Recipes",
            description: {
                long: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley....",
                short: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
            },
            image: img4,
        },
        {
            id: 5,
            title: "Evening Snacks",
            description: {
                long: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley....",
                short: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
            },
            image: img5,
        },
        {
            id: 6,
            title: "Quick Breakfast Ideas",
            description: {
                long: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley....",
                short: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
            },
            image: img6,
        },
    ];

    const [currentPage, setCurrentPage] = useState(0);
    const cardsPerPage = 3;

    const handleNext = () => {
        if (currentPage < Math.ceil(cards.length / cardsPerPage) - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevious = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    // Define the sliding animation
    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction) => ({
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
        }),
    };

    return (
        <section className="container mx-auto my-10" aria-label="Latest Articles">
            <div className="relative overflow-hidden">
                <motion.div
                    key={currentPage}
                    custom={currentPage}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 },
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 gap-y-10 justify-center max-w-[1225px] mx-auto"
                >
                    <header className="col-span-1 place-self-center md:place-self-start md:col-span-2 lg:col-span-3 ml-0 md:ml-3 gap-x-6">
                        <h2 className="md:text-[56px] text-2xl font-semibold text-primary md:mb-8 mb-0 lg:text-start text-center">
                            Latest Articles
                        </h2>
                    </header>
                    {cards
                        .slice(
                            currentPage * cardsPerPage,
                            (currentPage + 1) * cardsPerPage
                        )
                        .map((card) => (
                            <CustomCard key={card.id} {...card} />
                        ))}
                </motion.div>
            </div>

            <nav className="flex justify-center items-center space-x-4 mt-6 p-4" aria-label="Article pagination">
                <button
                    onClick={handlePrevious}
                    className={`${
                        currentPage === 0 ? "opacity-50 cursor-not-allowed" : ""
                    } bg-gray-300 px-3 py-1 rounded`}
                    disabled={currentPage === 0}
                    aria-label="Previous page"
                >
                    &lt; 
                </button>
                <p aria-live="polite" aria-atomic="true">
                     {currentPage + 1} / {Math.ceil(cards.length / cardsPerPage)}
                </p>
                <button
                    onClick={handleNext}
                    className={`${
                        currentPage ===
                        Math.ceil(cards.length / cardsPerPage) - 1
                            ? "opacity-50 cursor-not-allowed"
                            : ""
                    } bg-gray-300 px-3 py-1 rounded`}
                    disabled={
                        currentPage ===
                        Math.ceil(cards.length / cardsPerPage) - 1
                    }
                    aria-label="Next page"
                >
                    &gt;
                </button>
            </nav>
        </section>
    );
};

export default CardPagination;
