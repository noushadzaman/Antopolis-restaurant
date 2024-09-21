import Image from 'next/image';
import Feature1 from '../../../public/icons/02.png'
import Feature2 from '../../../public/icons/3.png'
import Feature3 from '../../../public/icons/4.png'
import Feature4 from '../../../public/icons/5.png'

const Features = () => {
    const restaurantFeatures = [
        {
            img: Feature1,
            title: "Farm to Dining",
            detail: "Experience fresh, local ingredients sourced directly from farms."
        },
        {
            img: Feature2,
            title: "Craft Cocktails",
            detail: "Enjoy innovative cocktails made with premium spirits and herbs."
        },
        {
            img: Feature3,
            title: "Outdoor Patio",
            detail: "Dine al fresco on our patio, perfect for enjoying the outdoors."
        },
        {
            img: Feature4,
            title: "Live Music Events",
            detail: "Join us for live music that enhances your dining experience."
        }
    ];


    return (
        <div className="nunito text-center mb-[144px] max-w-[1200px] mx-auto">
            <h3 className="text-[#2D2D2D] font-[700] text-[50px] mb-[35px] leading-[60px]">How does it work</h3>
            <div className="grid grid-cols-2 md:flex gap-[24px] place-items-center">
                {
                    restaurantFeatures.map((r, idx) => <div
                        key={idx}
                        className="rounded-[20px] border border-[#D9D9D9] py-[22px] w-[162.99px] h-[176.12px] md:h-[330px] md:w-[307px] flex flex-col items-center justify-center px-[15px]"
                    >
                        <Image height={500} width={500} className="mt-[10px] h-[53.09px] md:h-[100px] w-auto mb-[10px] md:mb-[20px]" src={r.img} alt={r.title} />
                        <h4 className="font-[600] text-[15.82px] md:text-[30px] text-[#000000] leading-[18.98px] md:leading-[36px] mb-[8px] md:mb-[16px]">{r.title}</h4>
                        <p className="text-[#666666] leading-[12.65px] md:leading-[24px] text-[10.55px] md:text-[20px] font-[500] mb-[9px] md:mb-[18px]">{r.detail}</p>
                        <p className="leading-[12.65px] md:leading-[24px] font-[700] text-[10.55px] md:text-[20px] text-[#2D2D2D] hover:text-[#F03328] mb-[22px]">Learn More</p>
                    </div>)
                }

            </div>
        </div>
    );
};

export default Features;