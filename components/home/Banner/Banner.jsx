'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import BannerInformation from "./BannerInformation";
import BannerDish from "./BannerDish";



const Banner = () => {
    const [selectedDish, setSelectedDish] = useState(0);
    const [isWrongClicked, setIsWrongClicked] = useState(false);

    useEffect(() => {
        let timer;
        if (isWrongClicked) {
            timer = setTimeout(() => {
                setIsWrongClicked(false);
            }, 1000);
        }
        // return () => clearTimeout(timer);
    }, [isWrongClicked]);

    function selectDish(dishNum) {
        if (selectedDish + 1 === dishNum || selectedDish - 1 === dishNum) {
            setSelectedDish(dishNum);
            setIsWrongClicked(false);
        } else {
            setIsWrongClicked(true);
        }
    }

    return (
        <div
            className={`
                text-white relative overflow-hidden ease-in duration-500 rounded-b-[20px]
                ${selectedDish === 0 && 'bg-[#880808]'}
                ${selectedDish === 1 && 'bg-[#0A4669]'}
                ${selectedDish === 2 && 'bg-[#953553]'}
                ${selectedDish === 3 && 'bg-[#006666]'}
                `}
        >
            <nav className="pt-[50px] ml-[40px] z-20 relative">
                <Link
                    href="/"
                    className="font-[700] text-[32px] inter-bold"
                >RESTAURANT</Link>
            </nav>

            <div className="flex">
                <div
                    className={`
                        bg-[#A52A2A] w-[1079px] h-[1079px] rounded-full absolute z-10 top-[-360px] left-[-156.98px] ease-in duration-500 
                        ${selectedDish === 0 && ' bg-[#A52A2A]'}
                    ${selectedDish === 1 && 'bg-[#0A3659]'}
                    ${selectedDish === 2 && 'bg-[#A95C68]'}
                    ${selectedDish === 3 && 'bg-[#003333]'}
                        `}
                >
                </div>
                <BannerInformation
                    selectedDish={selectedDish}
                    selectDish={selectDish}
                    isWrongClicked={isWrongClicked}
                />
                <BannerDish selectedDish={selectedDish} />
            </div>

        </div>
    );
};

export default Banner;