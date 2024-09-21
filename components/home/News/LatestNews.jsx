import Image from "next/image";
import News1 from '../../../public/news1.png'
import ArrowRight from '../../../public/icons/ArrowRight.png'
import CalenderIcon from '../../../public/icons/Calendar.png'
import ChatsIcon from '../../../public/icons/Chats.png'

const LatestNews = () => {

    return (
        <section className=''>
            <div className="mx-auto max-w-[1140px]">
                <div className="text-center inter">
                    <p className="font-[700] text-[48px] leading-[56px] text-[#333333] mb-[8px]">
                        Latest news & Blog
                    </p>
                    <p className="text-[#828282] text-[16px] font-[400] leading-[24px] mb-[56px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
                        Varius sed pharetra dictum neque massa congue
                    </p>
                </div>

                <div className="flex gap-[24px] justify-center mt-[50px] roboto">

                    <div className="w-[424px] shadow-xl">
                        <Image
                            className="px-[16px] w-full mt-[-19px] mb-[24px]"
                            width={392}
                            height={323}
                            src={News1}
                            alt={'thumbnail'}
                        />
                        <div className="px-[24px]">
                            <div className="flex gap-[16px]">
                                <div className="flex items-center gap-[10px] mb-[16px]">
                                    <Image
                                        width={24}
                                        height={24}
                                        src={CalenderIcon}
                                        alt={'CalenderIcon'}
                                    />
                                    <p className="text-[#333333] font-[400]">July 24, 2024</p>
                                </div>
                                <div className="flex items-center gap-[10px] mb-[16px]">
                                    <Image
                                        width={24}
                                        height={24}
                                        src={ChatsIcon}
                                        alt={'CalenderIcon'}
                                    />
                                    <p className="text-[#333333] font-[400] text-[16px]">Comments (03)</p>
                                </div>
                            </div>
                            <p className="text-[#333333] font-[700] text-[20px] mb-[8px]">Chocolate Truffle Cake With
                                Honey Flavor</p>
                            <p className='font-[400] text-[16px] mb-[16px]'>Lorem ipsum dolor sit amet, consectetur elit. Non mi sed etiam a id at ultricies neque.Tempus,poten diam ac integer id tellus est.</p>
                            <button className="text-[14px] font-[400] flex items-center gap-[10px] mb-[24px]">Read more
                                <Image
                                    width={20}
                                    height={20}
                                    src={ArrowRight}
                                    alt={'ArrowRight'}
                                />
                            </button>
                        </div>
                    </div>


                </div>
            </div>

        </section>
    );
};

export default LatestNews;