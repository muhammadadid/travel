import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "@/components/Navbar";

const PromoDetail = () => {
  const [promo, setPromo] = useState({});
  
  const getPromo = async () => {
    try {
      const response = await axios.get(
        `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/promo/${promo.id}`,
        {
          headers: {
            "Content-Type": "application/json",
            apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiI1Zjk2YjU4YS05MjRhLTRjOGYtOWE3Yi0wZGZlYjFmN2IwZTUiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MTk5MDg1NzZ9.ao6_vk2T5Ia3Ez9ezF-T9q0PKOGv7XaIvdh_guEf_os",
          },
        }
      );
      setPromo(response.data.data);
      console.log(response);
    } catch (error) {
      console.error(error.response);
    }
  };

  useEffect(() => {
    getPromo();
  }, []);
  return (
    <div>
      <Navbar />
      <form className="m-0 w-full relative pt-32 rounded-xl   flex flex-row items-start justify-start p-5 gap-[29px] leading-[normal] tracking-[normal] border-[1px]  mq1100:flex-wrap">
        <div className="w-[565px] flex flex-col items-start justify-start gap-[17px] min-w-[565px] max-w-full mq750:min-w-full mq1100:flex-1">
          <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-2.5 pr-[5px] pl-0 box-border max-w-full">
            <div 
            style={{ backgroundImage: `url(${promo.imageUrl})` }}
            className="flex-1 rounded-3xs flex flex-row items-start justify-between py-[226px] px-4 box-border bg-cover bg-no-repeat bg-[top] min-h-[582px] max-w-full gap-[20px] mq750:pt-[147px] mq750:pb-[147px] mq750:box-border mq450:flex-wrap">
            </div>
          </div>
        </div>
        <div className="w-[517px] flex flex-col items-start justify-start gap-[18px] min-w-[517px] max-w-full mq750:min-w-full mq1100:flex-1">
          <div className="w-[302px] flex flex-col items-start justify-start gap-[6px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[2px]">
              <h2 className="m-0 self-stretch relative text-5xl leading-[36px] font-bold font-body-14px-medium text-neutral-color-100 text-left mq450:text-[19px] mq450:leading-[29px]">
                {promo.title}
              </h2>
            </div>
            <b className="w-[248px] relative text-xl leading-[32px] flex font-body-14px-medium text-primary-color-dark-blue-80 text-left items-end mq450:text-base mq450:leading-[26px]">
              {promo.promo_discount_price}
            </b>
          </div>
          <div className="flex flex-col items-start self-stretch justify-start max-w-full">
            <div className="self-stretch box-border flex flex-row items-start justify-start pt-2 px-0 pb-1.5 max-w-full [row-gap:20px] border-b-[1px] border-solid border-neutral-color-10 mq450:flex-wrap">
              <div className="w-[194px] flex flex-row items-center justify-start pt-1 px-[9px] pb-0.5 box-border">
                <div className="relative text-sm leading-[20px] font-medium font-body-14px-medium text-neutral-color-60 text-left inline-block min-w-[29px]">
                  SKU
                </div>
              </div>
              <div className="flex-1 flex flex-row items-start justify-start pt-1 px-[11px] pb-0.5 box-border min-w-[70px] max-w-full">
                <div className="relative text-sm leading-[20px] font-medium font-body-14px-medium text-neutral-color-60 text-left inline-block min-w-[70px]">
                  : #1000078
                </div>
              </div>
            </div>
            <div className="self-stretch box-border flex flex-row items-start justify-start pt-2 px-0 pb-1.5 max-w-full [row-gap:20px] border-b-[1px] border-solid border-neutral-color-10 mq450:flex-wrap">
              <div className="w-[194px] flex flex-row items-center justify-start pt-1 px-[11px] pb-0.5 box-border">
                <div className="w-[49px] relative text-sm leading-[20px] font-medium font-body-14px-medium text-neutral-color-60 text-left flex items-end">
                  Gender
                </div>
              </div>
              <div className="flex-1 flex flex-row items-start justify-start pt-1 px-[11px] pb-0.5 box-border min-w-[55px] max-w-full">
                <div className="relative text-sm leading-[20px] font-medium font-body-14px-medium text-neutral-color-60 text-left inline-block min-w-[55px]">
                  : Female
                </div>
              </div>
            </div>
            <div className="self-stretch box-border flex flex-row items-start justify-start pt-2 px-0 pb-1.5 max-w-full [row-gap:20px] border-b-[1px] border-solid border-neutral-color-10 mq450:flex-wrap">
              <div className="w-[194px] flex flex-row items-center justify-start pt-1 px-[11px] pb-0.5 box-border">
                <div className="relative text-sm leading-[20px] font-medium font-body-14px-medium text-neutral-color-60 text-left inline-block min-w-[27px]">
                  Age
                </div>
              </div>
              <div className="flex-1 flex flex-row items-start justify-start pt-1 px-[11px] pb-0.5 box-border min-w-[65px] max-w-full">
                <div className="relative text-sm leading-[20px] font-medium font-body-14px-medium text-neutral-color-60 text-left inline-block min-w-[65px]">
                  : 2 Months
                </div>
              </div>
            </div>
            <div className="self-stretch box-border flex flex-row items-start justify-start pt-2 px-0 pb-1.5 max-w-full [row-gap:20px] border-b-[1px] border-solid border-neutral-color-10 mq450:flex-wrap">
              <div className="w-[194px] flex flex-row items-center justify-start pt-1 px-[11px] pb-0.5 box-border">
                <div className="relative text-sm leading-[20px] font-medium font-body-14px-medium text-neutral-color-60 text-left inline-block min-w-[26px]">
                  Size
                </div>
              </div>
              <div className="flex-1 flex flex-row items-start justify-start pt-1 px-[11px] pb-0.5 box-border min-w-[42px] max-w-full">
                <div className="relative text-sm leading-[20px] font-medium font-body-14px-medium text-neutral-color-60 text-left inline-block min-w-[42px]">
                  : Small
                </div>
              </div>
            </div>
            <div className="self-stretch box-border flex flex-row items-start justify-start pt-2 px-0 pb-1.5 max-w-full [row-gap:20px] border-b-[1px] border-solid border-neutral-color-10 mq450:flex-wrap">
              <div className="w-[194px] flex flex-row items-center justify-start pt-1 px-[11px] pb-0.5 box-border">
                <div className="relative text-sm leading-[20px] font-medium font-body-14px-medium text-neutral-color-60 text-left inline-block min-w-[35px]">
                  Color
                </div>
              </div>
              <div className="flex-1 flex flex-row items-start justify-start pt-1 px-[11px] pb-0.5 box-border min-w-[102px] max-w-full">
                <div className="relative text-sm leading-[20px] font-medium font-body-14px-medium text-neutral-color-60 text-left inline-block min-w-[102px]">
                  : Appricot & Tan
                </div>
              </div>
            </div>
            <div className="self-stretch box-border flex flex-row items-start justify-start pt-2 px-0 pb-1.5 max-w-full [row-gap:20px] border-b-[1px] border-solid border-neutral-color-10 mq450:flex-wrap">
              <div className="w-[194px] flex flex-row items-center justify-start pt-1 px-[11px] pb-0.5 box-border">
                <div className="w-[75px] relative text-sm leading-[20px] font-medium font-body-14px-medium text-neutral-color-60 text-left flex items-end">
                  Vaccinated
                </div>
              </div>
              <div className="flex-1 flex flex-row items-start justify-start pt-1 px-[11px] pb-0.5 box-border min-w-[30px] max-w-full">
                <div className="relative text-sm leading-[20px] font-medium font-body-14px-medium text-neutral-color-60 text-left inline-block min-w-[30px]">
                  : Yes
                </div>
              </div>
            </div>
            <div className="self-stretch box-border flex flex-row items-start justify-start pt-2 px-0 pb-1.5 max-w-full [row-gap:20px] border-b-[1px] border-solid border-neutral-color-10 mq450:flex-wrap">
              <div className="w-[194px] flex flex-row items-center justify-start pt-1 px-[11px] pb-0.5 box-border">
                <div className="relative text-sm leading-[20px] font-medium font-body-14px-medium text-neutral-color-60 text-left inline-block min-w-[71px]">
                  Dewormed
                </div>
              </div>
              <div className="flex-1 flex flex-row items-start justify-start pt-1 px-[11px] pb-0.5 box-border min-w-[30px] max-w-full">
                <div className="relative text-sm leading-[20px] font-medium font-body-14px-medium text-neutral-color-60 text-left inline-block min-w-[30px]">
                  : Yes
                </div>
              </div>
            </div>
            <div className="self-stretch box-border flex flex-row items-start justify-start pt-2 px-0 pb-1.5 max-w-full [row-gap:20px] border-b-[1px] border-solid border-neutral-color-10 mq450:flex-wrap">
              <div className="w-[194px] flex flex-row items-center justify-start pt-1 px-[11px] pb-0.5 box-border">
                <div className="relative text-sm leading-[20px] font-medium font-body-14px-medium text-neutral-color-60 text-left inline-block min-w-[29px]">
                  Cert
                </div>
              </div>
              <div className="flex-1 flex flex-row items-start justify-start pt-1 px-[9px] pb-0.5 box-border min-w-[73px] max-w-full">
                <div className="relative text-sm leading-[20px] font-medium font-body-14px-medium text-neutral-color-60 text-left inline-block min-w-[73px]">
                  : Yes (MKA)
                </div>
              </div>
            </div>
            <div className="self-stretch box-border flex flex-row items-start justify-start pt-2 px-0 pb-1.5 max-w-full [row-gap:20px] border-b-[1px] border-solid border-neutral-color-10 mq450:flex-wrap">
              <div className="w-[194px] flex flex-row items-center justify-start pt-1 px-[11px] pb-0.5 box-border">
                <div className="relative text-sm leading-[20px] font-medium font-body-14px-medium text-neutral-color-60 text-left inline-block min-w-[63px]">
                  Microchip
                </div>
              </div>
              <div className="flex-1 flex flex-row items-start justify-start pt-1 px-[11px] pb-0.5 box-border min-w-[30px] max-w-full">
                <div className="relative text-sm leading-[20px] font-medium font-body-14px-medium text-neutral-color-60 text-left inline-block min-w-[30px]">
                  : Yes
                </div>
              </div>
            </div>
            <div className="self-stretch box-border flex flex-row items-start justify-start pt-2 px-0 pb-1.5 max-w-full [row-gap:20px] border-b-[1px] border-solid border-neutral-color-10 mq450:flex-wrap">
              <div className="w-[194px] flex flex-row items-center justify-start pt-1 px-[11px] pb-0.5 box-border">
                <div className="relative text-sm leading-[20px] font-medium font-body-14px-medium text-neutral-color-60 text-left inline-block min-w-[57px]">
                  Location
                </div>
              </div>
              <div className="flex-1 flex flex-row items-start justify-start pt-1 px-[11px] pb-0.5 box-border min-w-[61px] max-w-full">
                <div className="relative text-sm leading-[20px] font-medium font-body-14px-medium text-neutral-color-60 text-left inline-block min-w-[61px]">
                  : Vietnam
                </div>
              </div>
            </div>
            <div className="self-stretch box-border flex flex-row items-start justify-start pt-2 px-0 pb-1.5 max-w-full [row-gap:20px] border-b-[1px] border-solid border-neutral-color-10 mq450:flex-wrap">
              <div className="w-[194px] flex flex-row items-center justify-start pt-1 px-[11px] pb-0.5 box-border">
                <div className="w-[99px] relative text-sm leading-[20px] font-medium font-body-14px-medium text-neutral-color-60 text-left flex items-end">
                  Published Date
                </div>
              </div>
              <div className="flex-1 flex flex-row items-start justify-start pt-1 px-[11px] pb-0.5 box-border min-w-[89px] max-w-full">
                <div className="relative text-sm leading-[20px] font-medium font-body-14px-medium text-neutral-color-60 text-left inline-block min-w-[89px]">
                  : 12-Oct-2022
                </div>
              </div>
            </div>
            <div className="self-stretch box-border flex flex-row items-start justify-start pt-2 px-0 pb-1.5 max-w-full [row-gap:20px] z-[1] border-b-[1px] border-solid border-neutral-color-10 mq450:flex-wrap">
              <div className="w-[194px] flex flex-row items-center justify-start pt-1 pb-0.5 pr-[38px] pl-[11px] box-border">
                <div className="flex-1 relative text-sm leading-[20px] font-medium font-body-14px-medium text-neutral-color-60 text-left">
                  Additional Information
                </div>
              </div>
              <div className="flex-1 flex flex-row items-start justify-start pt-1 px-[11px] pb-0.5 box-border min-w-[205px] max-w-full">
                <div className="relative text-sm leading-[20px] font-medium font-body-14px-medium text-neutral-color-60 text-left">
                  <p className="m-0">: Pure breed Shih Tzu.</p>
                  <p className="m-0 whitespace-pre-wrap">Good body structure.</p>
                  <p className="m-0 whitespace-pre-wrap">
                    With MKA cert and Microchip.
                  </p>
                  <p className="m-0 whitespace-pre-wrap">
                    Father from champion lineage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default PromoDetail;
