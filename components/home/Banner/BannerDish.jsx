import BannerDish1 from '../../../public/banner-dish-one.png'
import BannerDish2 from '../../../public/banner-dish-two.png'
import BannerDish3 from '../../../public/banner-dish-three.png'
import BannerDish4 from '../../../public/banner-dish-four.png'
import Image from 'next/image';

const BannerDish = ({ selectedDish }) => {

    return (
        <>
            <div
                className={`
                   w-[437.61px] md:w-[1312.52px] h-[437.61px] md:h-[1282.4px] rounded-full absolute z-0 top-[478px] md:top-[400px] right-[-150px] md:right-[-656px] flex items-center justify-center gap-[200px] ease-in duration-500 
                    ${selectedDish === 0 && 'rotate-[0deg] bg-[#A52A2A] '}
                    ${selectedDish === 1 && 'rotate-[90deg] bg-[#0A3659]'}
                    ${selectedDish === 2 && 'rotate-[180deg] bg-[#A95C68]'}
                    ${selectedDish === 3 && 'rotate-[270deg] bg-[#003333]'}
                    `}
            >
                <div className="hidden md:flex flex-col gap-[200px] shrink-0">
                    <Image
                        className="h-[627px] w-auto shrink-0"
                        src={BannerDish1}
                        width={176}
                        height={284}
                        alt={"Dish picture"}
                    />
                    <Image
                        className="h-[627px] w-auto shrink-0"
                        src={BannerDish2}
                        width={176}
                        height={284}
                        alt={"Dish picture"}
                    />

                </div>

                <div className="hidden md:flex flex-col gap-[200px] shrink-0">
                    <Image
                        className="h-[627px] w-auto shrink-0"
                        src={BannerDish4}
                        width={176}
                        height={284}
                        alt={"Dish picture"}
                    />
                    <Image
                        className="h-[627px] w-auto shrink-0"
                        src={BannerDish3}
                        width={176}
                        height={284}
                        alt={"Dish picture"}
                    />
                </div>

            </div>
        </>
    );
};

export default BannerDish;