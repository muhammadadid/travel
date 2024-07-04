import Activity from "@/components/Activity";
import BackgroundSlider from "@/components/BackgroundSlider";
import Blog from "@/components/Blog";
import Category from "@/components/Category";
import Experience from "@/components/Experience";
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
        {/* <div class="flex-1 flex flex-col items-start justify-start gap-[100px] max-w-full mq800:gap-[50px] mq450:gap-[25px]">
          <div class="self-stretch flex flex-col items-start justify-start max-w-full">
            <div class="self-stretch flex flex-row items-end justify-between max-w-full gap-[20px] mq800:flex-wrap">
              <div class="w-[172px] flex flex-row items-start justify-start gap-[40px]">
                <img
                  class="self-stretch w-[66px] rounded-xl max-h-full overflow-hidden shrink-0 object-contain min-h-[60px]"
                  loading="lazy"
                  alt=""
                  src="/public/chevrondown-5@2x.png"
                />

                <img
                  class="self-stretch w-[66px] rounded-xl max-h-full overflow-hidden shrink-0 object-contain min-h-[60px]"
                  loading="lazy"
                  alt=""
                  src="/public/chevrondown-6@2x.png"
                />
              </div>
              <div class="w-[460px] flex flex-col items-start justify-start gap-[29px] max-w-full">
                <div class="self-stretch flex flex-row items-start justify-end max-w-full">
                  <div class="w-[369px] flex flex-col items-start justify-start gap-[20px] max-w-full">
                    <h1 class="m-0 relative text-inherit font-normal font-inherit mq800:text-32xl mq450:text-19xl">
                      Special Offer
                    </h1>
                    <div class="self-stretch flex flex-row items-start justify-end">
                      <div class="h-[3px] w-[244px] relative box-border border-t-[3px] border-solid border-coral-100"></div>
                    </div>
                  </div>
                </div>
                <div class="relative text-5xl font-rubik text-slategray mq450:text-lgi">
                  Check out our special offer and discounts
                </div>
              </div>
            </div>
          </div>
          <div class="self-stretch grid flex-row items-start justify-start gap-[32px] max-w-full grid-cols-[repeat(3,_minmax(328px,_1fr))] text-9xl text-slategray font-rubik mq800:gap-[16px] mq800:grid-cols-[minmax(328px,_1fr)] mq1125:justify-center mq1125:grid-cols-[repeat(2,_minmax(328px,_568px))]">
            <div class="flex flex-col items-start justify-start max-w-full">
              <img
                class="self-stretch h-[286px] rounded-t-7xl rounded-b-none max-w-full overflow-hidden shrink-0 object-cover"
                loading="lazy"
                alt=""
                src="/public/image-container@2x.png"
              />

              <div class="self-stretch rounded-t-none rounded-b-7xl bg-seashell flex flex-col items-start justify-start py-10 pr-0 pl-6 box-border gap-[22px] max-w-full">
                <div class="w-[449px] flex flex-col items-start justify-start gap-[8px] max-w-[109%] shrink-0 font-mulish">
                  <h3 class="m-0 self-stretch relative text-inherit font-normal font-inherit mq450:text-3xl">
                    Lisbon, Portugal
                  </h3>
                  <div class="flex flex-row items-start justify-start gap-[4px]">
                    <img
                      class="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                      loading="lazy"
                      alt=""
                      src="/public/star.svg"
                    />

                    <img
                      class="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                      loading="lazy"
                      alt=""
                      src="/public/star-1.svg"
                    />

                    <img
                      class="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                      loading="lazy"
                      alt=""
                      src="/public/star-2.svg"
                    />

                    <img
                      class="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                      alt=""
                      src="/public/star-3.svg"
                    />

                    <img
                      class="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                      alt=""
                      src="/public/star-4.svg"
                    />
                  </div>
                </div>
                <div class="w-[389.3px] relative text-lg text-gray inline-block max-w-full">
                  5 nights and 4 days in 5 star hotel, breakfast and lunch
                  included. Very popular during the renaissance. Passage and
                  going through the cites of the world in classical literature.
                </div>
                <div class="w-[389.3px] flex flex-row items-center justify-between max-w-full gap-[20px] text-xl mq450:flex-wrap">
                  <div class="flex flex-row items-center justify-start gap-[7px]">
                    <div class="relative inline-block min-w-[49px] mq450:text-base">
                      From
                    </div>
                    <div class="relative text-21xl text-coral-100 inline-block min-w-[105px] whitespace-nowrap mq800:text-13xl mq450:text-5xl">
                      €500
                    </div>
                  </div>
                  <button class="cursor-pointer [border:none] py-5 px-10 bg-coral-200 rounded-xl flex flex-row items-center justify-center hover:bg-firebrick-200">
                    <div class="relative text-xl uppercase font-rubik text-white text-left inline-block min-w-[79px] mq450:text-base">
                      Details
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div class="flex flex-col items-start justify-start max-w-full">
              <img
                class="self-stretch h-[286px] rounded-t-7xl rounded-b-none max-w-full overflow-hidden shrink-0 object-cover"
                loading="lazy"
                alt=""
                src="/public/image-container-1@2x.png"
              />

              <div class="self-stretch rounded-t-none rounded-b-7xl bg-seashell flex flex-col items-start justify-start py-10 pr-0 pl-6 box-border gap-[22px] max-w-full">
                <div class="w-[449px] flex flex-col items-start justify-start gap-[8px] max-w-[109%] shrink-0 font-mulish">
                  <h3 class="m-0 self-stretch relative text-inherit font-normal font-inherit mq450:text-3xl">
                    Athens, Greece
                  </h3>
                  <div class="flex flex-row items-start justify-start gap-[4px]">
                    <img
                      class="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                      alt=""
                      src="/public/star.svg"
                    />

                    <img
                      class="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                      alt=""
                      src="/public/star.svg"
                    />

                    <img
                      class="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                      alt=""
                      src="/public/star.svg"
                    />

                    <img
                      class="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                      alt=""
                      src="/public/star-8.svg"
                    />

                    <img
                      class="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                      alt=""
                      src="/public/star-9.svg"
                    />
                  </div>
                </div>
                <div class="w-[389.3px] relative text-lg text-gray inline-block max-w-full">
                  5 nights and 4 days in 5 star hotel, breakfast and lunch
                  included. Very popular during the renaissance. Passage and
                  going through the cites of the world in classical literature.
                </div>
                <div class="w-[389.3px] flex flex-row items-center justify-between py-0 px-0 box-border max-w-full gap-[20px] text-xl mq450:flex-wrap">
                  <div class="flex flex-row items-center justify-start gap-[8px]">
                    <div class="relative inline-block min-w-[49px] mq450:text-base">
                      From
                    </div>
                    <div class="relative text-21xl text-coral-100 inline-block min-w-[106px] whitespace-nowrap mq800:text-13xl mq450:text-5xl">
                      €800
                    </div>
                  </div>
                  <button class="cursor-pointer [border:none] py-5 px-10 bg-coral-200 rounded-xl flex flex-row items-center justify-center hover:bg-firebrick-200">
                    <div class="relative text-xl uppercase font-rubik text-white text-left inline-block min-w-[79px] mq450:text-base">
                      Details
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div class="flex flex-col items-start justify-start max-w-full">
              <img
                class="self-stretch h-[286px] rounded-t-7xl rounded-b-none max-w-full overflow-hidden shrink-0 object-cover"
                loading="lazy"
                alt=""
                src="/public/image-container-2@2x.png"
              />

              <div class="self-stretch rounded-t-none rounded-b-7xl bg-seashell flex flex-col items-start justify-start py-10 pr-0 pl-6 box-border gap-[22px] max-w-full">
                <div class="w-[449px] flex flex-col items-start justify-start gap-[8px] max-w-[109%] shrink-0 font-mulish">
                  <h3 class="m-0 self-stretch relative text-inherit font-normal font-inherit mq450:text-3xl">
                    Rome, Italy
                  </h3>
                  <div class="flex flex-row items-start justify-start gap-[4px]">
                    <img
                      class="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                      alt=""
                      src="/public/star.svg"
                    />

                    <img
                      class="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                      alt=""
                      src="/public/star.svg"
                    />

                    <img
                      class="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                      alt=""
                      src="/public/star.svg"
                    />

                    <img
                      class="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                      alt=""
                      src="/public/star-13.svg"
                    />

                    <img
                      class="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                      alt=""
                      src="/public/star-14.svg"
                    />
                  </div>
                </div>
                <div class="w-[389.3px] relative text-lg text-gray inline-block max-w-full">
                  5 nights and 4 days in 5 star hotel, breakfast and lunch
                  included. Very popular during the renaissance. Passage and
                  going through the cites of the world in classical literature.
                </div>
                <div class="w-[389.3px] flex flex-row items-center justify-between max-w-full gap-[20px] text-xl mq450:flex-wrap">
                  <div class="flex flex-row items-center justify-start gap-[8px]">
                    <div class="relative inline-block min-w-[49px] mq450:text-base">
                      From
                    </div>
                    <div class="relative text-21xl text-coral-100 inline-block min-w-[100px] whitespace-nowrap mq800:text-13xl mq450:text-5xl">
                      €750
                    </div>
                  </div>
                  <button class="cursor-pointer [border:none] py-5 px-10 bg-coral-200 rounded-xl flex flex-row items-center justify-center hover:bg-firebrick-200">
                    <div class="relative text-xl uppercase font-rubik text-white text-left inline-block min-w-[79px] mq450:text-base">
                      Details
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <Promo />
      </section>
      <section class="self-stretch flex flex-row items-start justify-start pt-0 px-8 pb-[148px] box-border max-w-full text-left text-45xl text-gray font-playfair-display mq800:pb-[62px] mq800:box-border mq1350:pb-24 mq1350:box-border">
        {/* <div class="flex-1 flex flex-col items-start justify-start gap-[100px] max-w-full mq800:gap-[50px] mq450:gap-[25px]">
          <div class="flex flex-col items-start justify-start gap-[29px] max-w-full">
            <div class="flex flex-col items-start justify-start gap-[20px]">
              <h1 class="m-0 relative text-inherit font-normal font-inherit mq800:text-32xl mq450:text-19xl">
                Our Blog
              </h1>
              <div class="w-[153px] h-[3px] relative box-border border-t-[3px] border-solid border-coral-100"></div>
            </div>
            <div class="relative text-5xl font-rubik text-slategray mq450:text-lgi">
              An insight the incredible experience in the world
            </div>
          </div>
          <div class="self-stretch flex flex-row flex-wrap items-center justify-start gap-[32px] max-w-full text-5xl font-rubik mq800:gap-[16px]">
            <img
              class="h-[802px] flex-1 rounded-7xl max-w-full overflow-hidden object-cover min-w-[437px] mq800:min-w-full"
              loading="lazy"
              alt=""
              src="/public/image-container-3@2x.png"
            />

            <div class="flex-1 flex flex-col items-start justify-start py-5 px-0 box-border gap-[24px] min-w-[437px] max-w-full mq800:min-w-full">
              <h1 class="m-0 self-stretch relative text-[54px] font-normal font-playfair-display mq800:text-[43px] mq450:text-13xl">
                <p class="m-0">Beautiful Italy</p>
                <p class="m-0">Let’s travel</p>
              </h1>
              <div class="self-stretch relative leading-[52px] mq450:text-lgi mq450:leading-[42px]">
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a complete account of the system and expound the actual
                teachings of the great explorer of the truth, the master-
                builder of human happiness. No one rejects, dislike, or avoids
                plasure itself, because it is pleasure, but because those who do
                not know how to pursue pleasure rationally encounter
                consequences that are extremly painful. Nor again is there
                anyone who loves or pursues.
              </div>
              <div class="self-stretch flex flex-row items-center justify-start py-0 pr-[507px] pl-0 gap-[20px] text-coral-100 mq800:pr-[253px] mq800:box-border mq450:pr-5 mq450:box-border">
                <div class="relative leading-[52px] inline-block min-w-[118px] mq450:text-lgi mq450:leading-[42px]">
                  Read More
                </div>
                <img
                  class="h-[14.7px] w-[27px] relative"
                  alt=""
                  src="/public/arrow-1-1.svg"
                />
              </div>
            </div>
          </div>
        </div> */}
        <Blog />
      </section>
      
      <Activity />
      <Experience />
      <section class="self-stretch flex flex-col items-start justify-start max-w-full text-left text-45xl text-slategray font-playfair-display">
        {/* <div class="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div class="w-[1262px] shadow-[0px_0px_4px_rgba(0,_0,_0,_0.3)] rounded-7xl bg-white flex flex-row items-start justify-between py-[60px] px-20 box-border max-w-full gap-[20px] z-[1] mq1350:flex-wrap mq1350:pl-10 mq1350:pr-10 mq1350:box-border">
            <h1 class="m-0 relative text-inherit font-normal font-inherit inline-block max-w-full mq800:text-32xl mq450:text-19xl">
              Our Newsletter
            </h1>
            <div class="w-[567px] flex flex-row items-end justify-start gap-[32px] min-w-[567px] max-w-full text-xl font-rubik mq800:flex-wrap mq800:gap-[16px] mq800:min-w-full mq1350:flex-1">
              <div class="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[242px] max-w-full">
                <div class="relative inline-block min-w-[51px] mq450:text-base">
                  Email
                </div>
                <div class="self-stretch rounded-xl bg-antiquewhite flex flex-row items-center justify-start py-6 px-[39px] whitespace-nowrap text-coral-100">
                  <div class="relative">Enter your email</div>
                </div>
              </div>
              <button class="cursor-pointer [border:none] py-[24.5px] px-[34px] bg-coral-100 rounded-xl flex flex-row items-center justify-center hover:bg-firebrick-100">
                <a class="[text-decoration:none] relative text-xl font-rubik text-white text-left inline-block min-w-[94px] mq450:text-base">
                  Subscribe
                </a>
              </button>
            </div>
          </div>
        </div> */}
        <Footer />
      </section>
    </div>
  );
};
export default Home;
