import Image from "next/image";
import BannerDish1 from '../../../public/banner-dish-one.png'
import BannerDish2 from '../../../public/banner-dish-two.png'
import BannerDish3 from '../../../public/banner-dish-three.png'
import BannerDish4 from '../../../public/banner-dish-four.png'
import SearchBar from "./SearchBar";
import BannerDescription from "./BannerDecription";
import MobileCarousel from "./MobileCarousel";

const BannerInformation = ({ selectedDish, setSelectedDish, selectDish, isWrongClicked }) => {
    const fourDishes = [
        { dish: 0, dishImg: BannerDish1 },
        { dish: 1, dishImg: BannerDish2 },
        { dish: 2, dishImg: BannerDish3 },
        { dish: 3, dishImg: BannerDish4 },
    ];

    return (
        <div className="md:max-w-[50%] pt-[76px] md:pt-[153px] md:pl-[88px] md:pb-[122px] z-10 px-[49px] md:px-[0]">
            <h2 className="font-[400] text-[45px] md:text-[96px] leading-[57.51px] md:leading-[122.69px] sanchez-regular">BREAKFAST</h2>
            <BannerDescription />
            <MobileCarousel selectedDish={selectedDish} setSelectedDish={setSelectedDish} />
            <div className="flex gap-[20px] pb-[124px] md:pb-[102px] pt-[70px] md:pt-[10px] relative">
                {
                    fourDishes.map(d => <div
                        key={dish}
                        onClick={() => {
                            if (window.innerWidth >= 768) { // Prevent click for mobile view (below 768px width)
                                selectDish(d.dish);
                            }
                        }}
                        className="flex flex-col gap-4 justify-between relative"
                    >
                        <Image src={d.dishImg} width={176} height={284} alt={'Dish picture'} />
                        {/* Selected dish indicator */}
                        <div className={`${selectedDish === d.dish ? 'bg-white' : 'bg-transparent'} h-[4px]  rounded-xl ease-in duration-300`}>
                        </div>
                        {/* Warning div */}
                        {/* if selected div is -1 or +1 then 0(This div) */}
                        {
                            <div className={`
                            border-4 border-sky-500 h-[100%] w-[100%] ease-in duration-300 transform transition-all absolute
                            ${(isWrongClicked && (selectedDish + 1 === d.dish || selectedDish - 1 === d.dish)) ? 'opacity-100' : 'opacity-0'}
                            `}>
                                <div className="bg-sky-100 z-40 top-0 right-0 h-[100%] w-[100%] opacity-30">
                                </div>
                            </div>
                        }
                    </div>)
                }
            </div>
            <SearchBar />
        </div>
    );
};

export default BannerInformation;