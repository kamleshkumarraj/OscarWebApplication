import { CiHeart } from "react-icons/ci"
import { GoPerson } from "react-icons/go"
import { MdOutlineLockClock } from "react-icons/md"
import { PiSignOutFill } from "react-icons/pi"
import { VscChevronRight } from "react-icons/vsc"
import { NavLink, Outlet } from "react-router-dom"

function CommonHeader() {
  return (
    <div id="wishlist-section" className="w-full 2xl:p-[70px] xl:p-[65px] lg:p-[40px] md:p-[35px] sm:p-[30px] p-[20px] 2xl:py-[45px] xl:py-[40px] lg:py-[35px] md:py-[30px] sm:py-[25px] py-[25px]">
       
        <main id="main-section" className="grid md:grid-cols-3 grid-cols-1 2xl:mt-[60px] xl:mt-[55px] lg:mt-[50px] md:mt-[45px] sm:mt-[40px] mt-[30px] gap-[40px] ">
            
        </main>
    </div>
  )
}

export default CommonHeader
