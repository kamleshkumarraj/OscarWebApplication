import { HiArrowLongRight } from "react-icons/hi2";

function BestesellerCard({ img, label_1, label_2, className }) {
  return (
    <div className={`flex flex-col 2xl:gap-[20px] xl:gap-[18px] lg:gap-[16px] md:gap-[15px] sm:gap-[14px] gap-[12px] bg-white rounded-lg p-4 shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105 ${className}`} id="best-seller-card">
      <div id="img-section" className="w-full">
        <img 
          src={img} 
          alt={label_1} 
          className="w-[400px] h-[500px]  object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-120 hover:opacity-90" 
        />
      </div>
      <div id="detail" className="flex items-center justify-between w-full px-[20px]">
        <div id="text">
          <p className="font-poppins font-semibold text-left text-xl text-gray-800 mb-2">
            {label_1}
          </p>
          <p className="font-poppins font-medium text-gray-500 text-sm">
            {label_2}
          </p>
        </div>
        <div id="icon" className="flex items-center">
          <HiArrowLongRight size="25px" color="#7F7F7F" />
        </div>
      </div>
    </div>
  );
}

export default BestesellerCard;
