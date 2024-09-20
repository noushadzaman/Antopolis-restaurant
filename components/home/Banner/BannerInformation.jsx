import Image from "next/image";
import BannerDish1 from '../../../public/banner-dish-one.png'
import BannerDish2 from '../../../public/banner-dish-two.png'
import BannerDish3 from '../../../public/banner-dish-three.png'
import BannerDish4 from '../../../public/banner-dish-four.png'
import SearchBar from "./SearchBar";

const BannerInformation = ({ selectedDish, selectDish, isWrongClicked }) => {

    return (
        <div className="md:max-w-[50%] pt-[153px] pl-[88px] pb-[122px] z-10">
            <h2 className="font-[400] text-[96px] leading-[122.69px] sanchez-regular">BREAKFAST</h2>
            <p className="font-[700] text-[20px] leading-[24.2px] inter-bold">Breakfast, often referred to as the ‘most important meal of the day’, provides essential nutrients to kick start our day. It includes a variety of foods, like fruits, cereals, dairy products, and proteins, that contribute to a balanced diet. Eating a healthy breakfast can improve concentration and performance, boost physical endurance, and lower cholesterol levels.</p>
            <div className="flex gap-[20px] pb-[100px] pt-[10px] relative">

                <div
                    onClick={() => selectDish(0)}
                    className="flex flex-col gap-4 justify-between relative"
                >
                    <Image src={BannerDish1} width={176} height={284} alt={'Dish picture'} />
                    {/* Selected dish indicator */}
                    <div className={`${selectedDish === 0 ? 'bg-white' : 'bg-transparent'} h-[4px]  rounded-xl ease-in duration-300`}>
                    </div>
                    {/* Warning div */}
                    {/* if selected div is -1 or +1 then 0(This div) */}
                    {
                        <div className={`
                        border-4 border-sky-500 h-[100%] w-[100%] ease-in duration-300 transform transition-all absolute
                        ${(isWrongClicked && (selectedDish + 1 === 0 || selectedDish - 1 === 0)) ? 'opacity-100' : 'opacity-0'}
                        `}>
                            <div className="bg-sky-100 z-40 top-0 right-0 h-[100%] w-[100%] opacity-30">
                            </div>
                        </div>
                    }
                </div>

                <div
                    onClick={() => selectDish(1)}
                    className="flex flex-col gap-4 justify-between relative"
                >
                    <Image src={BannerDish2} width={176} height={284} alt={'Dish picture'} />
                    {/* Selected dish indicator */}
                    <div className={`${selectedDish === 1 ? 'bg-white' : 'bg-transparent'} h-[4px] rounded-xl ease-in duration-300`}>
                    </div>
                    {/* Warning div */}
                    {/* if selected div is -1 or +1 then 1(This div) */}
                    {
                        <div className={`
                            border-4 border-sky-500 h-[100%] w-[100%] ease-in duration-300 transform transition-all absolute
                            ${(isWrongClicked && (selectedDish + 1 === 1 || selectedDish - 1 === 1)) ? 'opacity-100' : 'opacity-0'}
                            `}>
                            <div className="bg-sky-100 z-40 top-0 right-0 h-[100%] w-[100%] opacity-30">
                            </div>
                        </div>
                    }
                </div>

                <div
                    onClick={() => selectDish(2)}
                    className="flex flex-col gap-4 justify-between relative"
                >
                    <Image src={BannerDish3} width={176} height={284} alt={'Dish picture'} />
                    {/* Selected dish indicator */}
                    <div className={`${selectedDish === 2 ? 'bg-white' : 'bg-transparent'} h-[4px] rounded-xl ease-in duration-300`}>
                    </div>
                    {/* Warning div */}
                    {/* if selected div is -1 or +1 then 2(This div) */}
                    {
                        <div className={`
                            border-4 border-sky-500 h-[100%] w-[100%] ease-in duration-300 transform transition-all absolute
                            ${(isWrongClicked && (selectedDish + 1 === 2 || selectedDish - 1 === 2)) ? 'opacity-100' : 'opacity-0'}
                            `}>
                            <div className="bg-sky-100 z-40 top-0 right-0 h-[100%] w-[100%] opacity-30">
                            </div>
                        </div>
                    }
                </div>

                <div
                    onClick={() => selectDish(3)}
                    className="flex flex-col gap-4 justify-between relative"
                >
                    <Image src={BannerDish4} width={176} height={284} alt={'Dish picture'} />
                    {/* Selected dish indicator */}
                    <div className={`${selectedDish === 3 ? 'bg-white' : 'bg-transparent'} h-[4px] rounded-xl ease-in duration-300`}>
                    </div>
                    {/* Warning div */}
                    {/* if selected div is -1 or +1 then 3(This div) */}
                    {
                        <div className={`
                            border-4 border-sky-500 h-[100%] w-[100%] ease-in duration-300 transform transition-all absolute
                            ${(isWrongClicked && (selectedDish + 1 === 3 || selectedDish - 1 === 3)) ? 'opacity-100' : 'opacity-0'}
                            `}>
                            <div className="bg-sky-100 z-40 top-0 right-0 h-[100%] w-[100%] opacity-30">
                            </div>
                        </div>
                    }
                </div>

            </div>
            <SearchBar />
        </div>
    );
};

export default BannerInformation;