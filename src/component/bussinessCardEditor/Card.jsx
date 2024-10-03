import { Link } from "react-router-dom";
import InputOption from "./InputOption";
import { useLocation } from "react-router-dom";
function Card() {
    const location = useLocation().pathname;
    const path = "Home / "+location.substring(1,location.length)
    const image = useLocation().state;
  return (
    <div className="grid w-full place-content-center h-full lg:p-[4rem] p-[2rem] lg:grid-cols-2 grid-cols-1  gap-[40px]">
      <div id="bussiness-card" className="grid w-full place-content-center">
        <img src={image} className="w-[100%]" alt="" />
      </div>
      <div id="editor" className="flex flex-col gap-[1rem] w-full">
        <div id="title">{path}</div>
        <div id="heading" className="text-[3.2rem] font-[600]">Agri & Farming Business Card</div>
        <form action="http://localhost:3000/api/v1" className="w-full flex flex-col gap-[.5rem] p-[2rem] text-[1.2rem] font-[600]" method="POST" id="form">
               <div id="input-1" className="grid w-full grid-cols-2" >
                    <label htmlFor="paper-stock">Paper Stock</label>
                    <InputOption 
                    optionsList={['Choose an options' , 'Premium']}
                    name={'paperstock'}
                    />
               </div>
               <div id="input-2" className="grid w-full grid-cols-2 " >
                    <label htmlFor="size">Size</label>
                    <InputOption 
                        optionsList={['Choose an options' , '3.5x2']}
                        name={'Sizes'}
                    />
               </div>
               <div id="input-3" className="grid w-full grid-cols-2 " >
                    <label htmlFor="Coating">Coating</label>
                    <InputOption 
                        optionsList={['Choose an options' , 'Matte/Dull Finish' , 'Uncoated (14 pt. Cover Only)' , 'UV Both Side' , 'UV Front Only']}
                        name={'Coating'}
                    />
               </div>
               <div id="input-4" className="grid w-full grid-cols-2 " >
                    <label htmlFor="Corner">Corner</label>
                    <InputOption 
                        optionsList={['Choose on options' , 'Rounded' , 'Standard']}
                        name={'Corner'}
                    />
               </div>
               <div id="input-5" className="grid w-full grid-cols-2 " >
                    <label htmlFor="quantity">Quantity</label>
                    <InputOption 
                        optionsList={['choose an options' , 1000 , 120, 150, 2000, 23000]}
                        name={'quantity'}
                    />
               </div>
               <div id="input-6" className="grid w-full grid-cols-2 " >
                    <label htmlFor="sets">Sets</label>
                    <InputOption 
                        optionsList={['Choose an options' , 1 , 2]}
                        name={'Sets'}
                    />
               </div>
        </form>

        <div id="btn-section" className="flex gap-[2rem] ">
            <div id="quantity" className="">
                <input className="w-[100px] border-[.5px] border-[#00000031]" type="number" />
            </div>
            <div id="btn-1">
                <p className="text-[1rem] font-[600] px-[1.4rem] py-[.6rem] border-[1px]  rounded-[5px] bg-lime-600 hover:bg-indigo-800 hover:cursor-pointer text-white whitespace-nowrap" >Add to Cart</p>
            </div>
            
            <Link  to="/canva-editor" id="canva-editor">
                <p className="text-[1rem] font-[600] px-[1.4rem] py-[.6rem] border-[1px] rounded-[5px] bg-lime-600 hover:bg-indigo-800 hover:cursor-pointer text-white whitespace-nowrap" >Open Oscar Editor</p>
            </Link>
        </div>
        <div id="des">
            <p className="py-[1rem] text-[1rem] font-[500]">SKU N/A
            Categories Agri & Farming, Business Card</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
