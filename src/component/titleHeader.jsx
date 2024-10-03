import React from 'react'

const Titleheader = ({title,description,btn="see all",textcolor='#ffff'}) => {
    console.log("text color",textcolor);
  return (
    <div id="header" className="w-full flex lg:items-center gap-y-4 md:px-4 lg:justify-between flex-col lg:flex-row items-center text-center lg:text-start">
    <div  className=" ">
      <h1 style={{color:textcolor}} className={`flex justify-center items-center text-lg dm_sansFont font-normal sm:text-3xl 2xl:text-[39px] lg:leading-[3.207rem] tracking-[-.09866] leading-7`}>{title}</h1>
      {
        description && (
      <p className=" font-normal text-sm sm:text-base 2xl:text-lg  text-[#ffffff] lg:p-0">{description}</p>

        )
      }
    </div>
    <button style={{color:textcolor,}} className={`py-2 w-1/2 sm:w-auto leading-4 sm:leading-6 px-6 transition-all duration-200 ease-in hover:border-[#524BAD]  border-[0.099rem] font-[poppins] text-sm sm:text-base font-normal uppercase text-center`}>
      {btn}
    </button>
    </div>
  )
}



export default Titleheader