import design_img_1 from '../../assets/ClothingAndBag/collection-img-1.svg'
import design_img_2 from '../../assets/ClothingAndBag/collection-img-2.svg'
import design_img_3 from '../../assets/ClothingAndBag/collection-img-3.svg'
import design_img_4 from '../../assets/ClothingAndBag/collection-img-4.svg'
import design_img_5 from '../../assets/ClothingAndBag/collection-img-5.svg'
import design_img_6 from '../../assets/ClothingAndBag/collection-img-6.svg'
import design_img_7 from '../../assets/ClothingAndBag/collection-img-7.svg'
import design_img_8 from '../../assets/ClothingAndBag/collection-img-8.svg'
import CollectionCard from './CollectionCard'

function CollectionSection() {
    const imgArr = [design_img_1, design_img_2, design_img_3, design_img_4, design_img_5, design_img_6, design_img_7, design_img_8];
    const label_1Arr = ['New Arrivals', 'No Minimum Order Quantity','100% Cotton T-shirts','Soccer Kits','Basketball Kits','Custom Work Uniforms','Our Bestsellers','Express Shipping'];
    const label_2Arr = ['5 days turnaround', '5 days turnaround', '5 days turnaround', '5 days turnaround', '5 days turnaround', '5 days turnaround', '5 days turnaround', '5 days turnaround'];

    return (
        <section id="design-section" className="w-full text-[#000000] 2xl:mt-[40px] xl:mt-[35px] lg:mt-[30px] md:mt-[25px] sm:mt-[20px] mt-[20px] 2xl:px-[70px] xl:px-[50px] px-[20px] text-center">
            <header id="heading" className="mb-[30px]">
                <h1 id="main-heading" className="font-[poppins] 2xl:text-[42px] xl:text-[40px] lg:text-[38px] sm:text-[35px] text-[30px] leading-[50px] font-[600] tracking-[2px] text-center">
                    Can’t-Miss Collections
                </h1>
                <h3 id="sub-heading" className="font-[poppins] 2xl:text-[18px] xl:text-[16px] lg:text-[15px] sm:text-[14px] text-[13px] font-[500] leading-[22px] mt-[10px] tracking-[1.2px] text-center">
                    From daily wear to travel bags, we’ve got you covered.
                </h3>
            </header>
            <section id="product-section" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px]">
                {imgArr.map((img, idx) => (
                    <CollectionCard key={idx} img={img} label_1={label_1Arr[idx]} label_2={label_2Arr[idx]} />
                ))}
            </section>
        </section>
    );
}

export default CollectionSection;