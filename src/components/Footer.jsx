const Footer = () => {
  return (
    <footer class="self-stretch bg-gray flex flex-row items-end justify-start py-[140px] px-8 box-border min-h-[577px] max-w-full mt-[-115px] text-left text-5xl text-white font-rubik mq800:pt-[140px] mq800:pb-[91px] mq800:box-border">
      <div class="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq1125:flex-wrap mq1125:justify-center">
        <div class="flex flex-col items-start justify-start gap-[16px] text-[14px]">
          <div class="flex flex-row items-start justify-start">
            <img
              class="h-[45.6px] w-[234px] relative"
              loading="lazy"
              alt=""
              src="/public/logo-1.svg"
            />
          </div>
          <div class="relative">
            Copyright © Travellian 2020 All rights reserved
          </div>
        </div>
        <div class="flex flex-col items-start justify-start gap-[16px]">
          <div class="relative font-medium inline-block min-w-[64px] mq450:text-lgi">
            Menu
          </div>
          <div class="flex flex-col items-start justify-start gap-[12px] text-lg">
            <a class="[text-decoration:none] relative text-[inherit] inline-block min-w-[50px]">
              Home
            </a>
            <a class="[text-decoration:none] relative text-[inherit] inline-block min-w-[63px]">
              Explore
            </a>
            <a class="[text-decoration:none] relative text-[inherit] inline-block min-w-[50px]">
              Travel
            </a>
            <div class="relative inline-block min-w-[38px]">Blog</div>
            <a class="[text-decoration:none] relative text-[inherit] inline-block min-w-[59px]">
              Pricing
            </a>
          </div>
        </div>
        <div class="flex flex-col items-start justify-start gap-[16px]">
          <div class="relative font-medium mq450:text-lgi">Information</div>
          <div class="flex flex-col items-start justify-start gap-[12px] text-lg">
            <div class="relative inline-block min-w-[106px]">Destinations</div>
            <div class="relative inline-block min-w-[77px]">Supports</div>
            <a class="[text-decoration:none] relative leading-[22px] text-[inherit] whitespace-nowrap">
              Terms & Conditions
            </a>
            <a class="[text-decoration:none] relative text-[inherit] inline-block min-w-[62px]">
              Privacy
            </a>
          </div>
        </div>
        <div class="flex flex-col items-start justify-start gap-[16px]">
          <div class="relative font-medium mq450:text-lgi">Contact Info</div>
          <div class="flex flex-col items-start justify-start gap-[12px] text-lg">
            <div class="relative inline-block min-w-[113px] whitespace-nowrap">
              +123 456 789
            </div>
            <div class="relative whitespace-nowrap">info@travellian.com</div>
            <div class="relative">1245, New Yourk, USA</div>
          </div>
        </div>
        <div class="w-52 flex flex-col items-start justify-start gap-[16px]">
          <div class="relative font-medium mq450:text-lgi">Follow us on</div>
          <div class="self-stretch flex flex-row items-center justify-between gap-[20px]">
            <img
              class="h-8 w-8 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/public/facebook-1.svg"
            />

            <img
              class="h-10 w-10 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/public/pinterest-1.svg"
            />

            <img
              class="h-8 w-8 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/public/instagram-1.svg"
            />

            <img
              class="h-8 w-8 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/public/twitter-1.svg"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
