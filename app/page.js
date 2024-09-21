import AboutUs from "@/components/home/AboutUs/AboutUs";
import Banner from "@/components/home/Banner/Banner";
import ChooseUs from "@/components/home/ChooseUs/ChooseUs";
import FeedBack from "@/components/home/Feedback/FeedBack";
import LatestNews from "@/components/home/News/LatestNews";
import Partners from "@/components/home/Partners/Partners";
import TeamMember from "@/components/home/TeamMember/TeamMember";
import Footer from "@/components/Footer";
import BestSellingDishes from "@/components/home/BestSellingDishes/BestSellingDishes";
import Features from "@/components/home/Features/Features";
import MembersCarousel from "@/components/home/TeamMember/MembersCarousel";


import Member1 from '../public/member1.png'
const members = [
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
export default function Home() {
  return (
    <>
      <Banner />
      <AboutUs />
      <ChooseUs />
      <BestSellingDishes />
      <FeedBack />
      <TeamMember />
      {/* <MembersCarousel members={members}/> */}
      <Features />
      <LatestNews />
      <Partners />
      <Footer />
    </>
  );
}
