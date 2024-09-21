import Image from "next/image";
import Dish1 from "../../../public/dish1.png";
import Star from "../../../public/icons/star.png";

const BestSellingDishes = () => {
    const bestSellingDishes = [
        {
            id: 1,
            name: "Salad",
            price: 12.99,
            imageUrl: Dish1,
            rating: 5
        },
        {
            id: 2,
            name: "Spaghetti",
            price: 15.49,
            imageUrl: Dish1,
            rating: 4
        },
        {
            id: 3,
            name: "Beef Burger",
            price: 10.99,
            imageUrl: Dish1,
            rating: 5
        },
        {
            id: 4,
            name: "Margherita ",
            price: 9.99,
            imageUrl: Dish1,
            rating: 4
        },
        {
            id: 5,
            name: "Chicken ",
            price: 8.99,
            imageUrl: Dish1,
            rating: 5
        },
        {
            id: 6,
            name: "Buddha",
            price: 11.99,
            imageUrl: Dish1,
            rating: 4
        }
    ];


    return (
        <div className="nunito mb-[27px] md:mb-[153px]">
            <div className="md:w-[60%] mx-auto text-center mb-[28px] md:mb-[68px] px-[17px]">
                <h4 className="text-[#1F1F1F] font-[700] text-[30px] md:text-[55px] mb-[18px] leading-[36px] md:leading-[66px]">Our best Seller Dishes</h4>
                <p className="text-[#5C5C5C] font-[400] text-[16px] md:text-[25px] leading-[19.2px] md:leading-[30px] ">Our fresh garden salad is a light and refreshing option. It features a mix of crisp lettuce, juicy tomatoe all tossed in your  choice of dressing.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-[27px] md:gap-[64px] place-items-center w-[85%] mx-auto">

                {
                    bestSellingDishes.map(d =>
                        <div
                            key={d.id}
                            className="shadow-md rounded-b-[7.08px] md:rounded-b-[18px] w-[164px] md:w-[417px] h-[191.14px] md:h-[486px]">
                            <Image
                                className="w-[164px] md:w-[417px] h-[116px] md:h-[297px]"
                                src={d.imageUrl} height={297} width={417} alt=""
                            />
                            <div className="pt-[12.73px] md:pt-[30px] pb-[19.44px] md:pb-[48px] px-[7.87px] md:px-[20px] space-y-[10.23px] md:space-y-[26px]">
                                <div className="flex gap-[26px] items-center justify-between">
                                    <h2 className="text-[#000000] text-[12.19px] md:text-[31px] font-[500]">{d.name}</h2>
                                    <button
                                        className="bg-[#A52A2A] md:bg-[#F03328] font-[500] md:text-[20px] text-white py-[3.93px] md:py-[10px] px-[9.44px] md:px-[24px] rounded-[38px] text-[7.87px] shrink-0"
                                    >
                                        Buy Now
                                    </button>
                                </div>
                                <div className="flex gap-[26px] items-center justify-between">
                                    <div className="flex gap-[2.4px]">
                                        {
                                            Array(d.rating).fill(null).map((_, index) => (
                                                <Image
                                                    className="w-[9px] h-[9px] md:h-[19px] md:w-[19px]"
                                                    key={index}
                                                    src={Star}
                                                    alt="Star Rating"
                                                    width={19}
                                                    height={19}
                                                />
                                            ))
                                        }
                                    </div>
                                    <p className="text-[13.37px] md:text-[34px] font-[700]">${d.price}</p>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default BestSellingDishes;