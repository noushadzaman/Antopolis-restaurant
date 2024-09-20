import Image from "next/image";
import BikeIcon from '../../../public/icons/01.png'
import SampleDish from '../../../public/about-us.png'

const ChooseUs = () => {
    
    return (
        <section className="flex items-center gap-[84px] max-w-[1200px] mx-auto nunito mt-[66px] mb-[103px]">
            <div className="max-w-[574px]">
                <Image height={600} width={600} className="rounded-[29px]" src={SampleDish} alt="" />
            </div>
            <div className="md:w-[55%]">
                <h3 className="text-[#2D2D2D] font-[700] text-[50px] mb-[35px] leading-[60px] ">Why People Choose us?</h3>
                <div className="flex flex-col gap-[41px]">
                    <div className="flex gap-[26px] items-center rounded-[18px] p-[18px] shadow-md">
                        <div className="shrink-0">
                            <Image height={500} width={500} className="max-h-[44px] w-auto" src={BikeIcon} alt="" />
                        </div>
                        <div className="flex flex-col gap-[8px]">
                            <p className="font-[600] text-[#000000] text-[31px] leading-[37.2px]">Convenient and Reliable</p>
                            <p className="font-[500] text-[#404040] text-[20px] leading-[26px]">Whether you dine in, take out, or order delivery, our service is convenient, fast, and reliable, making mealtime hassle-free.</p>
                        </div>
                    </div>
                    <div className="flex gap-[26px] items-center rounded-[18px] p-[18px] shadow-md">
                        <div className="p-[22px] shrink-0 shadow-md rounded-full">
                            <Image height={500} width={500} className="h-[44px] w-auto" src={BikeIcon} alt="" />
                        </div>
                        <div className="flex flex-col gap-[8px]">
                            <p className="font-[600] text-[#000000] text-[31px] leading-[37.2px]">Variety of Options</p>
                            <p className="font-[500] text-[#404040] text-[20px] leading-[26px]">From hearty meals to light snacks, we offer a wide range of options to suit every taste and craving.</p>
                        </div>
                    </div>
                    <div className="flex gap-[26px] items-center rounded-[18px] p-[18px] shadow-md">
                        <div className="p-[22px] shrink-0 shadow-md rounded-full">
                            <Image height={500} width={500} className="h-[44px] w-auto" src={BikeIcon} alt="" />
                        </div>
                        <div className="flex flex-col gap-[8px]">
                            <p className="font-[600] text-[#000000] text-[31px] leading-[37.2px]">Eat Burger</p>
                            <p className="font-[500] text-[#404040] text-[20px] leading-[26px]">Our burgers are grilled to perfection, with juicy patties and flavorful toppings that make every bite a delicious experience.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChooseUs;