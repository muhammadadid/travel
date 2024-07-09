const FormPromo = ({ promo }) => {
  return (
    <div class="flex flex-col items-start justify-start max-w-full">
      <img
        class="self-stretch h-[286px] rounded-t-7xl rounded-b-none max-w-full overflow-hidden shrink-0 object-cover"
        loading="lazy"
        alt=""
        src={promo.imageUrl}
      />

      <div class="self-stretch rounded-t-none rounded-b-7xl bg-seashell flex flex-col items-start justify-start py-10 pr-0 pl-6 box-border gap-[22px] max-w-full bg-darkslateblue">
        <div class="w-[449px] flex flex-col items-start justify-start gap-[8px] max-w-[109%] shrink-0 font-mulish">
          <h3 class="m-0 self-stretch relative text-inherit font-normal font-inherit mq450:text-3xl">
            {promo.title}
          </h3>
        </div>
        <div class="w-[389.3px] relative text-lg text-white inline-block max-w-full ">
          {promo.description}
        </div>
        <div class="w-[389.3px] flex flex-row items-center justify-between max-w-full gap-[20px] text-xl mq450:flex-wrap">
          <div class="flex flex-row items-center justify-start gap-[7px]">
            <div class="relative inline-block min-w-[49px] mq450:text-base">
              Promo
            </div>
            <div class="relative text-21xl text-yellowgreen-100 inline-block min-w-[105px] whitespace-nowrap mq800:text-13xl mq450:text-5xl ">
              Rp.{promo.promo_discount_price}
            </div>
          </div>
          <button class="cursor-pointer [border:none] py-5 px-10 bg-coral-200 rounded-xl flex flex-row items-center justify-center hover:bg-firebrick-200 bg-greenyellow">
            <div class="relative text-xl uppercase font-rubik text-black text-left inline-block min-w-[79px] mq450:text-base">
              Details
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
export default FormPromo;
