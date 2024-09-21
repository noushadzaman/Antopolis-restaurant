import { concisePara } from "@/utils";
import { useState } from "react";

const BannerDescription = () => {
    const [showFull, setShowFull] = useState(false);
    const description = concisePara("Breakfast, often referred to as the ‘most important meal of the day’, provides essential nutrients to kick start our day. It includes a variety of foods, like fruits, cereals, dairy products, and proteins, that contribute to a balanced diet. Eating a healthy breakfast can improve concentration and performance, boost physical endurance, and lower cholesterol levels.");

    return (
        <>
            <div className="font-[400] text-[16px] leading-[19.36px] inter md:hidden">
                {
                    !showFull ?
                        <p>
                            {description.initial}
                        </p> :
                        <p>
                            {description.para}
                        </p>
                }
                <p
                    onClick={() => setShowFull(!showFull)}
                    className="underline cursor-pointer">
                    {
                        showFull ? 'Show less' : 'Show more'
                    }
                </p>
            </div>
            <p className="hidden md:block font-[700] text-[20px] leading-[24.2px] inter">Breakfast, often referred to as the ‘most important meal of the day’, provides essential nutrients to kick start our day. It includes a variety of foods, like fruits, cereals, dairy products, and proteins, that contribute to a balanced diet. Eating a healthy breakfast can improve concentration and performance, boost physical endurance, and lower cholesterol levels.</p>
        </>
    );
};

export default BannerDescription;