'use client';

import Image from "next/image";
import Member1 from '../../../public/member1.png'
import BG from '../../../public/team-member-bg.png'
import MembersCarousel from "./MembersCarousel";

const slides = [
    {
        id: 0,
        name: 'Mark Henry',
        university: 'Northeastern University, Boston',
        image: Member1,
    },
    {
        id: 1,
        name: 'Lucky Helen',
        university: 'Northeastern University, Boston',
        image: Member1,
    },
    {
        id: 2,
        name: 'Moon Henry',
        university: 'Northeastern University, Boston',
        image: Member1,
    },
    {
        id: 3,
        name: 'Tom Monrow',
        university: 'Northeastern University, Boston',
        image: Member1,
    },
    {
        id: 4,
        name: 'Lucky Helen',
        university: 'Northeastern University, Boston',
        image: Member1,
    }
];

const TeamMember = () => {

    return (
        <div className="relative mb-[361px]">
            <div className="h-[460px]">
                <Image
                    width={1600}
                    height={300}
                    src={BG}
                    alt="Background"
                    className="absolute inset-0 object-cover w-full h-[460px] "
                />
                <div className="absolute inset-0 bg-[#AD1519D9] pt-[120px] bg-opacity-15 flex justify-center ">
                    <div className="text-center text-[white] relative">
                        <p className="font-[700] text-[48px] leading-[56px]">
                            Team Member
                        </p>
                        <p className="text-[white] text-[16px] font-[400] mt-[8px] leading-[24px]">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor <br />incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>
            </div>

            <MembersCarousel members={slides} />
        </div>
    );
};

export default TeamMember;