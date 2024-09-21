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

export default function Home() {
  return (
    <>
      <Banner />
      <AboutUs />
      <ChooseUs />
      <BestSellingDishes />
      <FeedBack />
      <TeamMember />
      <Features />
      <LatestNews />
      <Partners />
      <Footer />
    </>
  );
}
