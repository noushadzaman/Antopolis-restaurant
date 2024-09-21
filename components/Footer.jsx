import Image from "next/image";
import { Input } from "./ui/input";
import SendIcon from '../public/icons/send.png'
import PinterestIcon from '../public/icons/pinterest.png'
import FacebookIcon from '../public/icons/facebook.png'
import YoutubeIcon from '../public/icons/youtube.png'
import InstagramIcon from '../public/icons/instagram.png'
import TwitterIcon from '../public/icons/twitter.png'
import MapPinIcon from '../public/icons/MapPin.png'
import PhoneIcon from '../public/icons/Phone.png'
import EnvelopeSimpleOpenIcon from '../public/icons/EnvelopeSimpleOpen.png'
import ClockIcon from '../public/icons/Clock.png'
import InstagramImg1 from '../public/insta-img-1.png'
import InstagramImg2 from '../public/insta-img-2.png'
import InstagramImg3 from '../public/insta-img-3.png'
import InstagramImg4 from '../public/insta-img-4.png'
import InstagramImg5 from '../public/insta-img-5.png'
import InstagramImg6 from '../public/insta-img-6.png'


const Footer = () => {
    return (
        <div className="bg-[#880808] text-[white] gap-[123px] inter pt-[117px]">
            <div className="flex flex-col md:flex-row max-w-[1200px] mx-auto justify-between gap-[46px] mb-[93px] px-[16px] md:px-0">
                {/* first column */}
                <div>
                    <p className="text-[32px] font-[700]">RESTAURANT</p>
                    <p className="font-[400] text-[18px] mt-[20px] mb-[24px]">
                        Subscribe our newsletter and
                        get discount 25%off
                    </p>
                    <div className="flex mb-[12px]">
                        <Input className="bg-white border-none rounded-[6px] h-[40px]" type="email" placeholder="Enter Your Email" />
                        <div className="h-[40px] w-[43px] bg-[#A52A2A] ml-[-5px] rounded-r-[6px] flex items-center justify-center">
                            <Image
                                className=""
                                width={19}
                                height={19}
                                src={SendIcon}
                                alt={'thumbnail'}
                            />
                        </div>
                    </div>
                    <div className="flex gap-[16px]">
                        <Image
                            width={24}
                            height={24}
                            src={PinterestIcon}
                            alt={'thumbnail'}
                        />
                        <Image
                            width={24}
                            height={24}
                            src={TwitterIcon}
                            alt={'thumbnail'}
                        />
                        <Image
                            width={24}
                            height={24}
                            src={FacebookIcon}
                            alt={'thumbnail'}
                        />
                        <Image
                            width={24}
                            height={24}
                            src={InstagramIcon}
                            alt={'thumbnail'}
                        />
                        <Image
                            width={24}
                            height={24}
                            src={YoutubeIcon}
                            alt={'thumbnail'}
                        />
                    </div>

                </div>

                {/* Second column */}
                <div>
                    <h3 className="font-[700] text-[20px] mb-[24px] text-[white] roboto">Contact Us</h3>
                    <div className="flex flex-col gap-[15px]">
                        <div className="font-400 flex items-center gap-[8px]">
                            <Image
                                width={24}
                                height={24}
                                src={MapPinIcon}
                                alt={'thumbnail'}
                            />
                            <p>3517 W. Gray St. Utica, Pennsylvania 57867</p>
                        </div>
                        <div className="font-400 flex items-center gap-[8px]">
                            <Image
                                width={24}
                                height={24}
                                src={PhoneIcon}
                                alt={'thumbnail'}
                            />
                            <p>(480) 555-0103</p>
                        </div>
                        <div className="font-400 flex items-center gap-[8px]">
                            <Image
                                width={24}
                                height={24}
                                src={EnvelopeSimpleOpenIcon}
                                alt={'thumbnail'}
                            />
                            <p>M.Alyaqout@4house.Co</p>
                        </div>
                        <div className="font-400 flex items-center gap-[8px]">
                            <Image
                                width={24}
                                height={24}
                                src={ClockIcon}
                                alt={'thumbnail'}
                            />
                            <p>Sun - Sat / 10:00 AM - 8:00 PM</p>
                        </div>

                    </div>
                </div>

                {/* third column */}
                <div>
                    <h3 className="font-[700] text-[white] text-[20px] mb-[24px] roboto">Links</h3>
                    <div className="flex md:flex-col gap-[16px]">
                        <p className="font-400">About us</p>
                        <p className="font-400">Contact Us</p>
                        <p className="font-400">Our Menu</p>
                        <p className="font-400">Team</p>
                        <p className="font-400">FAQ</p>
                    </div>
                </div>


                {/* four column */}
                <div className="hidden md:block">
                    <h3 className="font-[700] text-[white] text-[20px] mb-[30px]">Instagram Gallery</h3>
                    <div className="grid grid-cols-3 gap-[4px]">
                        <Image
                            width={109}
                            height={109}
                            src={InstagramImg1}
                            alt={'thumbnail'}
                        />
                        <Image
                            width={109}
                            height={109}
                            src={InstagramImg2}
                            alt={'thumbnail'}
                        />
                        <Image
                            width={109}
                            height={109}
                            src={InstagramImg3}
                            alt={'thumbnail'}
                        />
                        <Image
                            width={109}
                            height={109}
                            src={InstagramImg4}
                            alt={'thumbnail'}
                        />
                        <Image
                            width={109}
                            height={109}
                            src={InstagramImg5}
                            alt={'thumbnail'}
                        />
                        <Image
                            width={109}
                            height={109}
                            src={InstagramImg6}
                            alt={'thumbnail'}
                        />
                    </div>
                </div>

            </div>
            <div className="bg-[#A52A2A] roboto py-[22px]">
                <div className=" max-w-[1200px] mx-auto flex justify-center items-center md:justify-between ">
                    <p className="text-[16px] font-[400] text-white">Copyright © 2024. All rights reserved </p>
                    <div className="gap-[49px] hidden md:flex">
                        <p className="text-[16px] font-[400] text-white">Privacy Policy</p>
                        <p className="text-[16px] font-[400] text-white">Term of Use</p>
                        <p className="text-[16px] font-[400] text-white">Partner</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;