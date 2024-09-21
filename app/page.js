import AboutUs from "@/components/home/AboutUs/AboutUs";
import Banner from "@/components/home/Banner/Banner";
import BestSellingSection from "@/components/home/BestSellingDishes/BestSellingSection";
import ChooseUs from "@/components/home/ChooseUs/ChooseUs";
import FeedBack from "@/components/home/Feedback/FeedBack";
import LatestNews from "@/components/home/News/LatestNews";
import Partners from "@/components/home/Partners/Partners";
import TeamMember from "@/components/home/TeamMember/TeamMember";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Banner />
      <AboutUs />
      <ChooseUs />
      <BestSellingSection />
      <FeedBack />
      <TeamMember />
      <LatestNews />
      <Partners />
      <Footer />
    </>
  );
}
