import Image from "next/image";
import News1 from '../../../public/news1.png'
import ArrowRight from '../../../public/icons/ArrowRight.png'
import CalenderIcon from '../../../public/icons/Calendar.png'
import ChatsIcon from '../../../public/icons/Chats.png'
const newsArray = [
    {
        date: "05 Jan 2022",
        comments: 10,
        title: "Exploring Global Cuisines",
        detail: "A deep dive into the flavors and ingredients of various international dishes.",
        imgUrl: News1
    },
    {
        date: "07 Sep 2022",
        comments: 7,
        title: "The Rise of Plant-Based Diets",
        detail: "An overview of how plant-based eating is changing the culinary landscape.",
        imgUrl: News1
    },
    {
        date: "03 Dec 2022",
        comments: 5,
        title: "Sustainable Eating Trends",
        detail: "Highlighting restaurants that focus on local sourcing and reducing waste.",
        imgUrl: News1
    }
];


const LatestNews = () => {

    return (
        <section>
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
                <div className="flex flex-col md:flex-row items-center gap-[24px]  justify-center mt-[50px] roboto">
                    {
                        newsArray.map((f, idx) => <div className="w-[424px] shadow-xl">
                            <Image
                                key={idx}
                                className="px-[16px] w-full mt-[-19px] mb-[24px]"
                                width={392}
                                height={323}
                                src={f.imgUrl}
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
                                        <p className="text-[#333333] font-[400]">{f.date}</p>
                                    </div>
                                    <div className="flex items-center gap-[10px] mb-[16px]">
                                        <Image
                                            width={24}
                                            height={24}
                                            src={ChatsIcon}
                                            alt={'CalenderIcon'}
                                        />
                                        <p className="text-[#333333] font-[400] text-[16px]">Comments ({f.comments})</p>
                                    </div>
                                </div>
                                <p className="text-[#333333] font-[700] text-[20px] mb-[8px]">{f.title}</p>
                                <p className='font-[400] text-[16px] mb-[16px]'>{f.detail}</p>
                                <button className="text-[14px] font-[400] flex items-center gap-[10px] mb-[24px]">Read more
                                    <Image
                                        width={20}
                                        height={20}
                                        src={ArrowRight}
                                        alt={'ArrowRight'}
                                    />
                                </button>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </section>
    );
};

export default LatestNews;