import { VscChevronRight } from "react-icons/vsc"
import { useLocation } from "react-router-dom"
function Header() {
  const location = useLocation().pathname;
  return (
    <div id="wishlist-section" className="w-full 2xl:p-[70px] xl:p-[65px] lg:p-[40px] md:p-[35px] sm:p-[30px] p-[20px] 2xl:py-[45px] xl:py-[40px] lg:py-[35px] md:py-[30px] sm:py-[25px] py-[25px]">
    <div id="location-header" className="flex items-center w-full 2xl:gap-[10px] xl:gap-[9px] lg:gap-[8px] md:gap-[7px] sm:gap-[6px] gap-[5px]">
    <p className="font-[DM Sans] font-[500] 2xl:text-[23.9px] xl:text-[21px] lg:text-[20px] md:text-[18px] sm:text-[16px] text-[12px] 2xl:leading-[31.12px] xl:leading-[28px] lg:leading-[25px] md:leading-[22px] sm:leading-[20px] leading-[18px] text-left text-[#807D7E]" >Home</p>
    <VscChevronRight size={'16px'} color="#807D7E"/>
    <p className="font-[DM Sans] font-[500] 2xl:text-[23.9px] xl:text-[21px] lg:text-[20px] md:text-[18px] sm:text-[16px] text-[12px] 2xl:leading-[31.12px] xl:leading-[28px] lg:leading-[25px] md:leading-[22px] sm:leading-[20px] leading-[18px] text-[#807D7E] text-left"  >My Account</p>
    <VscChevronRight size={'16px'} color="#807D7E"/>
    <p className="font-[DM Sans] font-[500] 2xl:text-[23.9px] xl:text-[21px] lg:text-[20px] md:text-[18px] sm:text-[16px] text-[12px] 2xl:leading-[31.12px] xl:leading-[28px] lg:leading-[25px] md:leading-[22px] sm:leading-[20px] leading-[18px] text-left" >{location == '/' ? 'My Orders' : location == '/empty-wishlist' ? 'wishlist' : location == '/order-details' ? 'Order Details' : 'My Orders'}</p>
</div>
</div>
  )
}

export default Header
