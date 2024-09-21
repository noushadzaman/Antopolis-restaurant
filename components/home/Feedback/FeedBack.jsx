'use client';

import Image from "next/image";
import Customer1 from "../../../public/customer.png";
import Chef from "../../../public/chef.png";
import { useState } from "react";
import { motion } from 'framer-motion';

const reviews = [
    {
        id: 1,
        name: "Alice Johnson",
        designation: "Food Blogger",
        imageUrl: "https://example.com/images/alice.jpg",
        review: "I had an amazing experience at your restaurant! The food was simply delicious, and I loved the freshness of the ingredients. Each dish was packed with flavor, and the portion sizes were just right. The service was prompt, and the staff was warm and welcoming. I highly recommend your place to anyone looking for a great dining experience!"
    },
    {
        id: 2,
        name: "Mark Smith",
        designation: "Restaurant Critic",
        imageUrl: "https://example.com/images/mark.jpg",
        review: "Dining at your restaurant was a delightful experience! The menu offered a wonderful variety of dishes, each crafted with care. The flavors were vibrant, and the presentation was beautiful. The staff was attentive and friendly, making the atmosphere even more enjoyable. I left with a full belly and a smile, eager to return for more!"
    },
    {
        id: 3,
        name: "Sara Lee",
        designation: "Chef",
        imageUrl: "https://example.com/images/sara.jpg",
        review: "I recently visited your restaurant and was thoroughly impressed! The dishes I tried were bursting with flavor and showcased the freshest ingredients. The attention to detail in the presentation was remarkable. The service was outstanding, with staff who were attentive and genuinely friendly. I’ll definitely be back to explore more of your menu!"
    },
    {
        id: 4,
        name: "John Doe",
        designation: "Local Guide",
        imageUrl: "https://example.com/images/john.jpg",
        review: "My dining experience at your restaurant was fantastic! The food was not only delicious but also beautifully presented. Each bite was a treat, and I appreciated the generous portion sizes. The staff was incredibly friendly, making me feel right at home. I can’t recommend your place enough; I look forward to my next visit!"
    },
    {
        id: 5,
        name: "Emily Davis",
        designation: "Food Enthusiast",
        imageUrl: "https://example.com/images/emily.jpg",
        review: "I had the pleasure of dining at your restaurant recently, and it was wonderful! Every dish was flavorful and well-prepared, showcasing quality ingredients. The service was quick, and the staff was warm and inviting, enhancing the overall experience. I left feeling satisfied and excited to return for another meal. Keep up the great work!"
    },
    {
        id: 6,
        name: "Chris Brown",
        designation: "Travel Blogger",
        imageUrl: "https://example.com/images/chris.jpg",
        review: "What a lovely experience at your restaurant! The food was absolutely delightful, bursting with fresh flavors. Each dish was a highlight, and the portion sizes were perfect. The service was efficient and attentive, with staff who truly cared about their guests. I’m already looking forward to my next visit and trying more dishes!"
    }
];

const FeedBack = () => {
    const [selectedReview, setSelectedReview] = useState(0);

    return (
        <div className="nunito flex flex-col-reverse md:flex-row items-center justify-center max-w-[1200px] mx-auto px-[17px] md:px-[0] gap-[65px] md:gap-[105px] mb-[30px] md:mb-[0]">
            <div className="md:w-[50%]">
                <h3 className="font-[700] leading-[36px] md:leading-[60px] text-[30px] md:text-[50px] text-[#000000]">Customer
                    <span className="text-[#AD1519]">Feedback</span>
                </h3>
                <motion.div
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
                    <p className="text-[#3D3D3D] font-[400] text-[14px] md:text-[25px] leading-[18.2px] md:leading-[32.5px] ">{reviews[selectedReview].review}</p>
                    <div className="flex justify-between items-center">
                        <div className="flex gap-[18px] pt-[34px]">
                            <Image
                                src={Customer1}
                                className="rounded-full border border-black"
                                height={74} width={74}
                                alt={'profile picture'}
                            />
                            <div className="flex flex-col gap-[4px]">
                                <p
                                    className="font-[700] text-[24px]"
                                >{reviews[selectedReview].name}</p>
                                <p
                                    className="font-[500] text-[18px]"
                                >{reviews[selectedReview].designation}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-[9px]">
                            {
                                Array(reviews.length).fill(null).map((_, index) => (
                                    <div
                                        key={index}
                                        onClick={() => setSelectedReview(index)}
                                        className={`rounded-full w-[18px] h-[18px] border border-[#A52A2A] cursor-pointer ${selectedReview === index && 'bg-[#A52A2A]'}`}
                                    ></div>
                                ))
                            }
                        </div>
                    </div>
                </motion.div>
            </div>

            <motion.div
                className="md:w-[50%] z-20"
                initial={{ opacity: 0, y: 450 }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 0.6
                    }
                }}
                viewport={{ once: true }}
            >
                <div>
                    <Image
                        src={Chef}
                        className=""
                        height={589} width={590}
                        alt={'profile picture'}
                    />
                </div>
            </motion.div>
        </div>
    );
};

export default FeedBack;