const CustomCard = ({ title, description, image }) => {
    return (
        <div className="max-w-xs mx-auto sm:max-w-sm w-[271px]  md:w-[381px] md:h-[554px] rounded-2xl overflow-hidden border border-gray-200 p-4 md:pb-0">
            <img
                className="w-full h-[200px]  p-2 object-cover rounded-3xl"
                src={image}
                alt={title}
            />
            <div className="p-4 pt-0 mt-8 md:pb-0">
                <h2 className="font-bold text-xl text-center md:text-start text-primary mb-2">
                    {title}
                </h2>
                <p className="text-secondary_dark md:hidden text-start md:text-start text-[12px] md:text-sm leading-7 mb-4">
                    {description.long}
                </p>
                <p className="text-secondary_dark hidden md:block text-start md:text-start text-[15px] leading-7 mb-4">
                    {description.short}
                </p>
                <div className="flex justify-center md:justify-start">
                    <button className="bg-transparent border-2 w-[118px] h-7 md:w-[131px] md:h-[42px] flex items-center justify-center border-primary text-primary px-4 py-2 mt-4 rounded-full hover:bg-primary hover:text-white transition duration-300">
                        Read More
                    </button>
                </div>
            </div>
        </div>
    );
};

// width: 381px;
// height: 554px;

// width: 271px;
// height: 484px;

export default CustomCard;
