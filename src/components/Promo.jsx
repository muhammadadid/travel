const Promo = () => {
    return(
        <div class="flex-1 flex flex-col items-start justify-start gap-[100px] max-w-full mq800:gap-[50px] mq450:gap-[25px]">
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
        </div>
    )
}

export default Promo