import { CiHeart } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { MdOutlineLockClock } from "react-icons/md";
import { PiSignOutFill } from "react-icons/pi";
import { NavLink } from "react-router-dom";

function SideMenu() {
  const navHander = (status) => {
    if (status) return " bg-[#807d7e14] border-l-[3px] border-[#8A33FD] ";
  };
  return (
    <div id="menu-main" className="w-full">
      <div id="header-menu" className="w-full">
        <h1 className="font-[DM Sans] font-[700] 2xl:tracking-[2.1px] xl:tracking-[1.8px] lg:tracking-[1.6px] md:tracking-[1.4px] sm:tracking-[1.2px] tracking-[1px] 2xl:text-[37.18px] xl:text-[35px] lg:text-[32px] md:text-[30px] sm:text-[28px] text-[25px] 2xl:leading-[44.49px] xl:leading-[40px] lg:leading-[35px] md:leading-[30px] sm:leading-[25px] leading-[20px] relative text-left before:w-[10px] before:bg-[#8A33FD] before:h-[80%] before:left-[-5%] before:top-[50%] before:translate-y-[-50%] left-[5%] before:absolute before:rounded-[10px]">
          Hello Jhanvi
        </h1>
        <p className="font-[DM Sans] font-[700] 2xl:text-[18.59px] xl:text-[17px] lg:text-[16px] md:text-[15px] sm:text-[14px] text-[13px] text-left 2xl:leading-[44.49px] xl:leading-[40px] lg:leading-[36px] md:leading-[32px] sm:leading-[28px] leading-[25px] 2xl:tracking-[2.1px] xl:tracking-[1.8px] lg:tracking-[1.6px] md:tracking-[1.4px] sm:tracking-[1.2px] tracking-[1px] text-[#807D7E]">
          Welcome to your Account
        </p>
      </div>
      <div
        id="menu"
        className="flex flex-col 2xl:mt-[40px] xl:mt-[36px] lg:mt-[32px] md:mt-[30px] sm:mt-[27px] mt-[25px] gap-[20px]"
      >
        <NavLink
          to={"/"}
          className={(status) =>
            navHander(status.isActive) +
            "2xl:w-[391px] xl:w-[360px] sm:w-[250px] w-[250px]  md:w-[full] h-[58px] flex items-center gap-[15px] px-[40px]"
          }
        >
          <div id="icon">
            <MdOutlineLockClock size={"22px"} color="#807D7E" />
          </div>
          <div
            className="font-[DM Sans] font-[700] text-left 2xl:leading-[31.12px] xl:leading-[28px] lg:leading-[25px] md:leading-[22px] sm:leading-[18px] leading-[15px] 2xl:text-[23.9px] xl:text-[21px] lg:text-[19px] md:text-[17px] sm:text-[16px] text-[14px] text-[#807D7E]"
            id="para"
          >
            My Orders
          </div>
        </NavLink>
        <NavLink
          to={"/empty-wishlist"}
          className={(status) =>
            navHander(status.isActive) +
            "2xl:w-[391px] xl:w-[360px] sm:w-[250px] w-[250px]  md:w-[full] h-[58px] flex items-center gap-[15px] px-[40px]"
          }
        >
          <div id="icon">
            <CiHeart size={"30px"} color="#807D7E" />
          </div>
          <div
            className="font-[DM Sans] font-[700] text-left 2xl:leading-[31.12px] xl:leading-[28px] lg:leading-[25px] md:leading-[22px] sm:leading-[18px] leading-[15px] 2xl:text-[23.9px] xl:text-[21px] lg:text-[19px] md:text-[17px] sm:text-[16px] text-[14px] text-[#807D7E] "
            id="para"
          >
            Wishlist
          </div>
        </NavLink>
        <NavLink
          to={"/my-info"}
          className={(status) =>
            navHander(status.isActive) +
            "2xl:w-[391px] xl:w-[360px] sm:w-[250px] w-[250px]  md:w-[full] h-[58px] flex items-center gap-[15px] px-[40px]"
          }
        >
          <div id="icon">
            <GoPerson size={"22px"} color="#807D7E" />
          </div>
          <div
            className="font-[DM Sans] font-[700] text-left 2xl:leading-[31.12px] xl:leading-[28px] lg:leading-[25px] md:leading-[22px] sm:leading-[18px] leading-[15px] 2xl:text-[23.9px] xl:text-[21px] lg:text-[19px] md:text-[17px] sm:text-[16px] text-[14px] text-[#807D7E]"
            id="para"
          >
            My Info
          </div>
        </NavLink>

        <NavLink
          to={"/sign-out"}
          className={(status) =>
            navHander(status.isActive) +
            "2xl:w-[391px] xl:w-[360px] sm:w-[250px] w-[250px]  md:w-[full] h-[58px] flex items-center gap-[15px] px-[40px]"
          }
        >
          <div id="icon">
            <PiSignOutFill size={"22px"} color="#807D7E" />
          </div>
          <div
            className="font-[DM Sans] font-[700] text-left 2xl:leading-[31.12px] xl:leading-[28px] lg:leading-[25px] md:leading-[22px] sm:leading-[18px] leading-[15px] 2xl:text-[23.9px] xl:text-[21px] lg:text-[19px] md:text-[17px] sm:text-[16px] text-[14px] text-[#807D7E]"
            id="para"
          >
            Sign Out
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default SideMenu;
