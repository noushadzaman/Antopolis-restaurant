import Image from "next/image";
import Marquee from "react-fast-marquee";
import Partner1 from '../../../public/partner3.png'
import Partner2 from '../../../public/partner2.png'
import Partner3 from '../../../public/partner5.png'
import Partner4 from '../../../public/partner4.png'
import Partner5 from '../../../public/partner5.png'
import Partner6 from '../../../public/partner6.png'

const Partners = () => {
    const partners = [
        Partner1,
        Partner2,
        Partner3,
        Partner4,
        Partner5,
        Partner6
    ];

    return (
        <div className="text-center md:pt-[129px] pb-[87px] md:pb-[121px]">
            <h3 className="text-[#A52A2A] miniver text-[18px] font-[400] pb-[8px]">Partners & Clients</h3>
            <p className="text-[48px] font-[700] roboto text-[#333333] pb-[55px]  ">We work with the best pepole</p>
            <Marquee speed={150} pauseOnHover={true}>
                {
                    partners.map((p, index) => <Image
                        key={index}
                        className="md:h-[128px] h-[68px] w-auto mr-[72px]"
                        width={392}
                        height={323}
                        src={p}
                        alt={'thumbnail'}
                    />)
                }
            </Marquee>
        </div>
    );
};

export default Partners;