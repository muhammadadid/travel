const Footer = () => {
  return (
    <footer className="self-stretch bg-gray flex flex-row items-end justify-start py-[140px] px-8 box-border h-auto w-full mt-[-115px] text-left text-5xl text-white font-rubik mq800:pt-[140px] mq800:pb-[91px] mq800:box-border bg-gray-400">
      <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq1125:flex-wrap mq1125:justify-center">
        <div className="flex flex-col items-start justify-start gap-[16px] text-[14px]">
          <div className="flex flex-row items-start justify-start">
            <h1 className="relative text-5xl text-white font-rubik" >Infinity Travel</h1>
          </div>
          <div className="relative">
            Copyright © Infinity Travel 2024 All rights reserved
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[16px]">
          <div className="relative font-medium inline-block min-w-[64px] mq450:text-lgi">
            Menu
          </div>
          <div className="flex flex-col items-start justify-start gap-[12px] text-lg">
            <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[50px]">
              Home
            </a>
            <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[63px]">
              Explore
            </a>
            <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[50px]">
              Travel
            </a>
            <div className="relative inline-block min-w-[38px]">Blog</div>
            <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[59px]">
              Pricing
            </a>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[16px]">
          <div className="relative font-medium mq450:text-lgi">Information</div>
          <div className="flex flex-col items-start justify-start gap-[12px] text-lg">
            <div className="relative inline-block min-w-[106px]">Destinations</div>
            <div className="relative inline-block min-w-[77px]">Supports</div>
            <a className="[text-decoration:none] relative leading-[22px] text-[inherit] whitespace-nowrap">
              Terms & Conditions
            </a>
            <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[62px]">
              Privacy
            </a>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[16px]">
          <div className="relative font-medium mq450:text-lgi">Contact Info</div>
          <div className="flex flex-col items-start justify-start gap-[12px] text-lg">
            <div className="relative inline-block min-w-[113px] whitespace-nowrap">
              08756902345
            </div>
            <div className="relative whitespace-nowrap">info@infinity.com</div>
            <div className="relative">Surakarta, Jawa Tengah</div>
          </div>
        </div>
        <div className="w-52 flex flex-col items-start justify-start gap-[16px]">
          <div className="relative font-medium mq450:text-lgi">Follow us on</div>
          <div className=" flex flex-row items-center justify-between gap-[20px] bg">
            <img
              className="relative w-8 h-8 overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/images/facebook.png"
            />
            
            <img
              className="relative w-8 h-8 overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/images/instagram.png"
            />

            <img
              className="relative w-8 h-8 overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/images/twitter.png"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
