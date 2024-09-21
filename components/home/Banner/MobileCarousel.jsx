import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import BannerDish1 from '../../../public/banner-dish-one.png'
import BannerDish2 from '../../../public/banner-dish-two.png'
import BannerDish3 from '../../../public/banner-dish-three.png'
import BannerDish4 from '../../../public/banner-dish-four.png'

const MobileCarousel = ({ selectedDish, setSelectedDish }) => {
    function nextDish() {
        if (selectedDish === 3) {
            return;
        }
        setSelectedDish(selectedDish + 1)
    }

    function prevDish() {
        if (selectedDish === 0) {
            return;
        }
        setSelectedDish(selectedDish - 1)
    }

    return (
        <>
            {/* second circle for mobile view */}
            <div className="md:hidden pt-[52px]">
                <Carousel>
                    <CarouselContent>
                        <CarouselItem>
                            <Image src={BannerDish1} height={265} width={500} alt="BannerDish1" />
                        </CarouselItem>
                        <CarouselItem>
                            <Image src={BannerDish2} height={265} width={500} alt="BannerDish1" />
                        </CarouselItem>
                        <CarouselItem>
                            <Image src={BannerDish3} height={265} width={500} alt="BannerDish1" />
                        </CarouselItem>
                        <CarouselItem>
                            <Image src={BannerDish4} height={265} width={500} alt="BannerDish1" />
                        </CarouselItem>
                    </CarouselContent>
                    <div
                        onClick={prevDish}
                    >
                        <CarouselPrevious
                            className={`h-[41px] w-[41px] ease-in duration-500 border-none
                        ${selectedDish === 0 && 'bg-[#F5878787]'} 
                ${selectedDish === 1 && 'bg-[#196E9FCC]'}
                ${selectedDish === 2 && 'bg-[#A95C68CC]'}
                ${selectedDish === 3 && 'bg-[#03929299]'}
                        `} />
                    </div>
                    <div
                        onClick={nextDish}
                    >
                        <CarouselNext
                            className={`h-[41px] w-[41px] ease-in duration-500 border-none
                         ${selectedDish === 0 && 'bg-[#F5878787]'}
                ${selectedDish === 1 && 'bg-[#196E9FCC]'}
                ${selectedDish === 2 && 'bg-[#A95C68CC]'}
                ${selectedDish === 3 && 'bg-[#03929299]'} 
                        `} />
                    </div>
                </Carousel>
            </div>
        </>
    );
};

export default MobileCarousel;