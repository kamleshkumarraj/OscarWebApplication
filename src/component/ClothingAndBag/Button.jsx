
function Button({label}) {
  return (
    <div className=" grid place-content-center rounded-[33px] 2xl:h-[70.13px] xl:h-[67px] lg:h-[65px] md:h-[62px] sm:h-[50px] h-[40px] 2xl:w-[150.44px] xl:w-[130px] lg:w-[100px] w-[90px] 2xl:text-[16.1px] xl:text-[15px] lg:text-[14px] md:text-[13px] sm:text-[12.5px] text-[12px] font-[700] 2xl:leading-[24.15px] xl:leading-[22px] lg:leading-[20px] md:leading-[18px] sm:leading-[15px] leading-[14px] text-left font-[poppins] bg-[#ffffff] hover:bg-slate-400 transition border-e-slate-50">
      <p className="2xl:px-[20px] xl:px-[19px] lg:px-[17px] md:px-[15px] sm:px-[14px] px-[13px] 2xl:py-[15px] xl:py-[14px] lg:py-[13px] md:py-[12px] sm:py-[11px] py-[10px] text-[#000]">{label}</p>
    </div>
  )
}

export default Button
