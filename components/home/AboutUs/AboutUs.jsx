'use client';

import Image from "next/image";
import DishIcon from '../../../public/icons/Simplification.png'
import { Play } from "lucide-react";
import { motion } from 'framer-motion';

const AboutUs = () => {

    return (
        <div className="md:flex gap-[132px] max-w-[1200px] mx-auto md:my-[99px] px-[17px] md:px-0 md:pt-[40px] pb-[67px] pt-[40px]">
            <motion.div
                className="poppins md:w-[50%]"
                initial={{ opacity: 0, x: -200 }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: {
                        duration: 0.6
                    }
                }}
                viewport={{ once: true }}
            >
                <div>
                    <h3 className="text-[#A52A2A] text-[18px] font-[600]">PIZZA DELIVERY</h3>
                    <h2 className="text-[#231900] text-[30px] md:text-[55px] font-[600] leading-[82.5px]">Get Started Today!</h2>
                    <div className="bg-[#A52A2A] h-[5px] w-[12%] my-[16px]"></div>
                    <p className="text-[16px] md:text-[26px] font-[600] mb-[16px] leading-[24px]">Everything you need to build an amazing food restaurant responsive website.</p>
                    <p className="font-[400] text-[14px] md:text-[17px] mb-[41px] leading-[21px]">Hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis.</p>
                    <div className="flex gap-[30px]">
                        <div className="flex flex-col">
                            <Image className="w-[55px] md:w-[100px] h-[55px] md:h-[100px] mt-[16px] mb-[19px]" src={DishIcon} height={300} width={300} alt="Dish Icon" />
                            <p className="font-[600] text-[20px]">Food Order</p>
                            <p className="font-[400] text-[17px]">Food is the necessity of life. It provides nutrition, sustenance growth to human body.</p>
                        </div>
                        <div className="flex flex-col">
                            <Image className="w-[55px] md:w-[100px] h-[55px] md:h-[100px] mt-[16px] mb-[19px]" src={DishIcon} height={300} width={300} alt="Dish Icon" />
                            <p className="font-[600] text-[10px] md:text-[20px]">Promote Restaurant</p>
                            <p className="font-[400] text-[8px] md:text-[17px]">Food can be classified into cereals, pulses, nuts and oilseeds, vegetable</p>
                        </div>
                    </div>
                </div>
            </motion.div>

            <motion.div
                className="md:w-[50%] pt-[71px]"
                initial={{ opacity: 0, x: 200 }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: {
                        duration: 0.6
                    }
                }}
                viewport={{ once: true }}
            >
                <div>
                    <div className="flex items-end">
                        <h3 className="text-[#A52A2A] text-[18px] font-[400] miniver leading-[26px]">About us</h3>
                        <div className="bg-[#A52A2A] h-[1px] w-[34px]"></div>
                    </div>
                    <p className="text-[#333333] leading-[45px] font-[700] text-[30px] md:text-[48px] mt-[8px] mb-[32px] roboto">
                        Food is an important
                        part Of a balanced Diet
                    </p>
                    <p className="text-[#4F4F4F] text-[14px] md:text-[16px] font-[400] roboto leading-[21px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis  vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
                    </p>
                    <div className="flex gap-[14px] mt-[33px] items-center">
                        <button
                            className="bg-[#880808] hover:bg-[#A52A2A] text-white text-[18px] font-[700] py-[16px] px-[48px] rounded-[6px] inter"
                        >Show more</button>
                        <div className="flex gap-[13px] items-center cursor-pointer">
                            <div className="bg-[#880808] hover:bg-[#195A00] p-[18px] rounded-full">
                                <Play className="w-[24px] h-[24px]" color="#ffffff" />
                            </div>
                            <p className="inter font-[700] text-[#333333]">Watch video</p>
                        </div>
                    </div>
                </div>
            </motion.div>



        </div>
    );
};

export default AboutUs;