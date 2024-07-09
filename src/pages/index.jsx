import Activity from "@/components/Activity";
import BackgroundSlider from "@/components/BackgroundSlider";
import Blog from "@/components/Blog";
import Category from "@/components/Category";
import Footer from "@/components/Footer";

import Promo from "@/components/Promo";


const Home = () => {
  
  return (
    <div class="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start gap-[134px] leading-[normal] tracking-[normal] mq800:gap-[67px] mq450:gap-[33px]">
      {/* <section class="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-1.5 box-border max-w-full text-left text-[84px] text-white font-playfair-display"> */}
        <BackgroundSlider />
      {/* </section> */}
      <section class="self-stretch flex flex-row items-start justify-start pt-0 px-8 pb-[148px] box-border max-w-full text-left text-45xl text-gray font-playfair-display mq800:pb-[62px] mq800:box-border mq1125:pb-24 mq1125:box-border">
        <Category Category={Category}/>
      </section>
      <section class="self-stretch flex flex-row items-start justify-start pt-0 px-8 pb-[156px] box-border max-w-full text-left text-45xl text-gray font-playfair-display mq800:pb-[66px] mq800:box-border mq1125:pb-[101px] mq1125:box-border">
        <Promo />
      </section>
      <section class="self-stretch flex flex-row items-start justify-start pt-0 px-8 pb-[148px] box-border max-w-full text-left text-45xl text-gray font-playfair-display mq800:pb-[62px] mq800:box-border mq1350:pb-24 mq1350:box-border">
        <Blog />
      </section>
      <Activity />
      <section class="self-stretch flex flex-col items-start justify-start max-w-full text-left text-45xl text-slategray font-playfair-display">
        <Footer />
      </section>
    </div>
  );
};
export default Home;
