import React from "react";

const SideBar = ({ toggleSidebar }) => {
  return (
    <div className="fixed mt-[-1px] bg-yellowgreen-200 flex flex-col items-start justify-start pt-10 pb-[451px] pr-[92px] pl-8 gap-[56px] mq450:gap-[28px] mq450:pt-5 mq450:pr-5 mq450:pb-[190px] mq450:box-border mq825:pt-[26px] mq825:pb-[293px] mq825:box-border">
      <button
        className="absolute z-20 bg-yellowgreen-200 top-4 right-4"
        onClick={toggleSidebar}
      >
        <img src="/images/logo.png" alt="Close" className="w-12 h-12" />
      </button>
      <div className="flex flex-row items-center justify-start">
        <b className="relative tracking-[0.15px] leading-[150%] font-bold inline-block min-w-[116px] mq450:text-base mq450:leading-[24px]">
          Infinity Travel
        </b>
      </div>
      <div className="flex flex-col items-start justify-start gap-[64px] text-base text-white">
        <nav className="m-0 flex flex-col items-start justify-start gap-[40px] text-left text-base text-white font-body-1-regular">
          <div className="flex flex-row items-center justify-start gap-[15px] text-white">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              loading="lazy"
              alt=""
              src="/src/assets/icon/dash.png"
            ></img>

            <b className="relative tracking-[0.5px] leading-[150%] font-semibold inline-block min-w-[90px]">
              User
            </b>
          </div>
          <div className="flex flex-row items-center justify-start gap-[16px]">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              loading="lazy"
              alt=""
              src="/src/assets/icon/user.png"
            ></img>

            <div className="relative tracking-[0.5px] leading-[150%] inline-block min-w-[45px] text-white">
              Banner
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[15px]">
            <img
              className="h-6 w-6 relative min-h-[24px]"
              loading="lazy"
              alt=""
              src="/src/assets/icon/document.png"
            ></img>

            <div className="relative tracking-[0.5px] leading-[150%] inline-block min-w-[91px]">
              Promo
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[15px]">
            <img
              className="h-6 w-6 relative min-h-[24px]"
              loading="lazy"
              alt=""
              src="/src/assets/icon/gallery.png"
            ></img>

            <div className="relative tracking-[0.5px] leading-[150%] inline-block min-w-[56px]">
              Category
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[16px]">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              loading="lazy"
              alt=""
              src="/src/assets/icon/herarcy.png"
            ></img>

            <div className="relative tracking-[0.5px] leading-[150%] inline-block min-w-[77px]">
              Activty
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default SideBar;
