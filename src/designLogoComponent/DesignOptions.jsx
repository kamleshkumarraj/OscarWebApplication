import { MdOutlineArrowRightAlt } from "react-icons/md";
import logo_1 from "../assets/DesignAndLogoImg/logo-img-1.svg";
import logo_2 from "../assets/DesignAndLogoImg/logo-img-2.svg";
import logo_3 from "../assets/DesignAndLogoImg/logo-img-3.svg";
import logo_4 from "../assets/DesignAndLogoImg/logo-img-4.svg";
import logo_5 from "../assets/DesignAndLogoImg/logo-img-5.svg";
import logo_6 from "../assets/DesignAndLogoImg/logo-img-6.svg";

function DesignOptions() {
  const imgArr = [logo_1, logo_2, logo_3, logo_4, logo_5, logo_6];
  const labelArr = [
    "Folded Leaflet Design",
    "Letterhead Design",
    "Postcard Design",
    "Rectangle Banner Design",
    "Return Label Address Design",
    "Wedding Invitation Design",
  ];

  return (
    <div
      id="design-option-section"
      className="mt-[30px] w-full 2xl:px-[40px] xl:px-[30px] px-[20px]"
    >
      <header
        id="heading"
        className="flex flex-wrap items-center justify-between gap-[20px]"
      >
        <h1 className="font-[poppins] font-[400] pl-7 xl:leading-[80px] lg:leading-[75px] md:leading-[72px] sm:leading-[68px] leading-[50px] 2xl:leading-[84.36px] tracking-[2.96px] text-left 2xl:text-[56.24px] xl:text-[52px] lg:text-[49px] md:text-[37px] sm:text-[35px] text-[30px] text-[#333]">
          More Design Options
        </h1>
        <div id="sub-heading" className="flex items-center group">
          <h5 className="font-[poppins] font-[500] 2xl:leading-[22.2px] lg:tracking-[15px] 2xl:tracking-[2.96px] lg:text-[12px] sm:text-[11px] text-[10px] lg:leading-[17px] sm:leading-[14px] leading-[12px] 2xl:text-[14.8px] tracking-[1px] text-[#666] group-hover:text-[#FF7D04] transition-colors duration-300">
            See All Design Options
          </h5>
          <MdOutlineArrowRightAlt size={"14.8px"} className="ml-2 text-[#666] group-hover:text-[#FF7D04] transition-colors duration-300" />
        </div>
      </header>
      <div
        id="design-section"
        className="grid 2xl:grid-cols-6 gap-[40px] mt-[50px] xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1"
      >
        {imgArr.map((img, idx) => {
          return (
            <div
              key={idx}
              id="card"
              className="group hover:scale-100 transform transition-transform duration-300 ease-in-out"
            >
              <div
                className="2xl:w-[140px] lg:w-[130px] sm:w-[120px] w-[110px] 2xl:h-[140px] lg:h-[130px] sm:h-[120px] h-[110px] rounded-full bg-[#00000013] grid place-content-center mx-auto shadow-md group-hover:shadow-lg transition-shadow duration-300"
                id="img"
              >
                <img
                  className="2xl:w-[75px] lg:w-[65px] sm:w-[60px] w-[55px] rounded-full"
                  src={img}
                  alt="logo"
                />
              </div>
              <div id="para" className="mt-[20px]">
                <p className="font-[poppins] text-[14px] font-[500] leading-[20px] tracking-[1.5px] text-center text-[#333] group-hover:text-[#FF7D04] transition-colors duration-300">
                  {labelArr[idx]}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DesignOptions;
