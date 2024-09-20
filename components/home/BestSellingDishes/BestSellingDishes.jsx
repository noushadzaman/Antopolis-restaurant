import Image from "next/image";
import Dish1 from "../../../public/dish1.png";
import Star from "../../../public/icons/star.png";

const BestSellingDishes = () => {
    const rating = 5;
    const price = 230;

    return (
        <div className="nunito">
            <h4>Our best Seller Dishes</h4>
            <p>Our fresh garden salad is a light and refreshing option. It features a mix of crisp lettuce, juicy tomatoe all tossed in your  choice of dressing.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {
                    <div className="shadow-md rounded-b-[18px] w-[417px]">
                        <Image src={Dish1} height={297} width={417} alt="" />
                        <div className="pt-[30px] pb-[48px] px-[20px] space-y-[26px]">
                            <div className="flex gap-[26px] items-center justify-between">
                                <h2 className="text-[#000000] text-[31px] font-[500]">Breakfast Food</h2>
                                <button
                                    className="bg-[#F03328] font-[500] text-[20px] text-white py-[10px] px-[24px] rounded-[38px]"
                                >
                                    Buy Now
                                </button>
                            </div>
                            <div className="flex gap-[26px] items-center justify-between">
                                <div className="flex gap-[2.4px]">
                                    {
                                        Array(rating).fill(null).map((_, index) => (
                                            <Image
                                                className=""
                                                key={index}
                                                src={Star}
                                                alt="Star Rating"
                                                width={19}
                                                height={19}
                                            />
                                        ))
                                    }
                                </div>
                                <p className="text-[34px] font-[700]">${price}</p>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default BestSellingDishes;