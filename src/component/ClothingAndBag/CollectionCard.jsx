function CollectionCard({ img, label_1, label_2 }) {
    return (
        <div className="flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-lg p-[15px] bg-white rounded-lg">
            <div id="img-section" className="w-full mb-[20px]">
                <img className="w-full rounded-lg" src={img} alt={label_1} />
            </div>
            <div id="details" className="text-center">
                <p className="font-[poppins] text-[16px] font-[600] tracking-[1.5px] mb-[5px]">{label_1}</p>
                <p className="font-[poppins] text-[13px] font-[500] text-[#555] tracking-[1px]">{label_2}</p>
            </div>
        </div>
    );
}

export default CollectionCard;