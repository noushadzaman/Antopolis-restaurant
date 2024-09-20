import AboutUs from "@/components/home/AboutUs/AboutUs";
import Banner from "@/components/home/Banner/Banner";
import BestSellingSection from "@/components/home/BestSellingDishes/BestSellingSection";
import ChooseUs from "@/components/home/ChooseUs/ChooseUs";
import FeedBack from "@/components/home/Feedback/FeedBack";

export default function Home() {
  
  return (
    <>
      <Banner />
      <AboutUs />
      <ChooseUs />
      <BestSellingSection />
      <FeedBack />
    </>
  );
}
