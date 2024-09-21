import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import {
    Card,
    CardContent,
} from "@/components/ui/card"
import Image from "next/image";

const MembersCarousel = ({ members }) => {

    return (
        <>
            <div className="mt-[-192px] gap-[24px] absolute mx-auto">
                <Carousel className="max-w-[1250px] mx-auto">
                    <CarouselContent>
                        {members.map((s, idx) => (
                            <CarouselItem
                                className={`h-[310px] w-[312px] basis-1/2 lg:basis-1/4 mr-[24px]`}
                                key={idx}
                            >
                                <CardContent
                                    className={`h-[310px] w-[312px] border-none`}
                                >
                                    <div
                                    >
                                        <Image
                                            className=""
                                            width={1600}
                                            height={310}
                                            src={s.image}
                                            alt="profile"
                                        />
                                        <div className="flex flex-col items-center justify-center my-[16px] gap-[4px]">
                                            <p className="font-[700] text-[20px] text-[#4F4F4F]">{s.name}</p>
                                            <p className="font-[400] text-[16px] text-[#828282]">{s.university}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel >
            </div >
        </>
    );
};

export default MembersCarousel;