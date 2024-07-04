const Activity = () => {
    return (
        <section class="self-stretch flex flex-row items-start justify-start pt-0 px-8 pb-[182.5px] box-border max-w-full text-left text-45xl text-gray font-playfair-display mq800:pb-[77px] mq800:box-border mq1125:pb-[119px] mq1125:box-border">
        <div class="flex-1 flex flex-col items-start justify-start gap-[100px] max-w-full mq800:gap-[50px] mq450:gap-[25px]">
          <div class="self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full">
            <h1 class="m-0 w-[1172px] relative text-inherit font-normal font-inherit inline-block max-w-full mq800:text-32xl mq450:text-19xl">
              Destination Gallery
            </h1>
            <div class="self-stretch flex flex-col items-start justify-start max-w-full text-5xl text-slategray font-rubik">
              <div class="w-[286px] h-[3px] relative box-border border-t-[3px] border-solid border-coral-100"></div>
              <div class="self-stretch flex flex-row flex-wrap items-start justify-start gap-[32px] max-w-full mt-[-3px] mq800:gap-[16px]">
                <div class="flex-1 flex flex-col items-start justify-start pt-8 px-0 pb-0 box-border min-w-[762px] max-w-full mq1125:min-w-full">
                  <div class="self-stretch relative mq450:text-lgi">
                    Our photo gallery on trip
                  </div>
                </div>
                <div class="w-[172px] flex flex-row items-start justify-between gap-[20px]">
                  <img
                    class="self-stretch w-[66px] rounded-xl max-h-full object-contain min-h-[60px]"
                    loading="lazy"
                    alt=""
                    src="/public/chevrondown-7@2x.png"
                  />

                  <img
                    class="self-stretch w-[66px] rounded-xl max-h-full object-contain min-h-[60px]"
                    loading="lazy"
                    alt=""
                    src="/public/chevrondown-8@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="self-stretch flex flex-row flex-wrap items-end justify-center gap-[32px] mq800:gap-[16px]">
            <img
              class="h-[469px] flex-1 rounded-7xl max-w-[320px] overflow-hidden object-cover min-w-[294px]"
              loading="lazy"
              alt=""
              src="/public/image-container-7@2x.png"
            />

            <div class="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-10 box-border min-w-[294px] max-w-[320px] min-h-[509px]">
              <img
                class="self-stretch h-[468px] rounded-7xl max-w-full overflow-hidden shrink-0 object-cover"
                loading="lazy"
                alt=""
                src="/public/colblock-1@2x.png"
              />
            </div>
            <img
              class="h-[469px] flex-1 rounded-7xl max-w-[320px] overflow-hidden object-cover min-w-[294px]"
              loading="lazy"
              alt=""
              src="/public/image-container-8@2x.png"
            />

            <img
              class="h-[469px] flex-1 rounded-7xl max-w-[320px] overflow-hidden object-cover min-w-[294px]"
              loading="lazy"
              alt=""
              src="/public/image-container-9@2x.png"
            />
          </div>
        </div>
      </section>
    )
}
export default Activity