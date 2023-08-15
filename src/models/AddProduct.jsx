import { Button } from "@material-tailwind/react";
import { IconButton, Tooltip, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { AiOutlineClear, AiFillCaretDown } from "react-icons/ai"
import { MdClear } from "react-icons/md"
import GetDeviceProp from "../test/getDeviceHeightWidth";


export default function AddProduct() {
    const [ open, setOpen ] = useState(false);
    const [ dropdownitem, setItem ] = useState('Menu1');

    return(
        <>
            <div className="md:w-64 pt-5 pb-5 pl-6 pr-6 bg-white rounded-xl">
                <div className="flex flex-row items-center">
                    <div className="grow">
                        <Typography variant='h5'>Add</Typography>
                    </div>
                    <Tooltip content="Clear Form" className="bg-red-600 h-7 text-xs">
                        <IconButton className="w-5 h-5 bg-transparent shadow-none"><AiOutlineClear className="w-5 h-5 fill-black"/></IconButton>
                    </Tooltip>
                    <Tooltip content="Exit Form" className="bg-red-600 h-7 text-xs">
                        <IconButton className="w-5 h-5 bg-transparent shadow-none"><MdClear className="w-5 h-5 fill-black"/></IconButton>
                    </Tooltip>
                </div>
                <div id="input-image">
                    <Typography className='font-bold text-opacity-40 text-black mt-[10px]'>Image</Typography>
                    <Button className="h-[50px] w-[60px] bg-white drop-shadow-md shadow-gray-200 hover:shadow-gray-200 hover:bg-gray-100 mr-2">
                        <div className="font-normal text-gray-700 text-2xl">+</div>
                    </Button>
                    <Button className="h-[50px] w-[60px] bg-white drop-shadow-md shadow-gray-200 hover:shadow-gray-200 hover:bg-gray-100 mr-2">
                        <div className="font-normal text-gray-700 text-2xl">+</div>
                    </Button>
                    <Button className="h-[50px] w-[60px] bg-white drop-shadow-md shadow-gray-200 hover:shadow-gray-200 hover:bg-gray-100">
                        <div className="font-normal text-gray-700 text-2xl">+</div>
                    </Button>
                </div>
                <div id="input-type" className="flex flex-row mt-[14px]">
                    <Typography className='font-bold text-opacity-40 text-black'>Type</Typography>
                    <div><button onClick={() => setOpen(!open)} className="self-center p-0 ml-4">
                        <div className="flex flex-row items-center">
                            {dropdownitem === 'Menu1' && <Typography variant="h6" className="text-black">Type 1</Typography>}
                            {dropdownitem === 'Menu2' && <Typography variant="h6" className="text-black">Type 2</Typography>}
                            {dropdownitem === 'Other' && <Typography variant="h6" className="text-black">Other</Typography>}
                            <AiFillCaretDown className="ml-1"/>
                        </div>
                    </button>
                    </div>
                {open && <div className="absolute mt-7 bg-[#f6f6f6] rounded-md divide-y-2 ml-[50px] drop-shadow-DashboardShadow">
                    <div className="flex flex-col h-16 w-20 items-start overflow-y-auto scrollbar-thumb-green-600 scrollbar-thin ">
                    <button onClick={() => {setItem('Menu1'); setOpen(false)}}>Type 1</button>
                    <button onClick={() => {setItem('Menu2'); setOpen(false)}}>Type 2</button>
                    <button onClick={() => {setItem('Other'); setOpen(false)}}>Other</button></div>
                </div>}
                </div>
                <div id="input-price" className="flex flex-row mt-[5px]">
                    <Typography className='font-bold text-opacity-40 text-black ml-[2px]'>Price</Typography>
                    <div className="font-bold text-black ml-[13px]">Rp0</div>
                </div>
                <div id="input-stock" className="flex flex-row mt-[5px]">
                    <Typography className='font-bold text-opacity-40 text-black'>Stock</Typography>
                    <div className="font-bold text-black ml-[10px]">0</div>
                </div>
                <div id="input-name" className="flex flex-col mt-[10px] item">
                    <Typography className='font-bold text-opacity-40 text-black'>Product Name</Typography>
                    <Typography className='font-bold text-black'>Enter Name Here</Typography>
                </div>
                <div id="input-name" className="flex flex-col mt-[8px] item">
                    <Typography className='font-bold text-opacity-40 text-black'>External Link</Typography>
                    <Typography className='font-bold text-black'>Enter Link Here</Typography>
                </div>
                <Button className="flex w-40 h-[35px] mt-5 font-bold items-center rounded-full ml-[12%]" color="green">
                    {/* <ArrowLeftOnRectangleIcon width={20} className="mr-2 fill-green-700"/> */}
                    <div className="font-bold text-xs text-white ml-3">Add Product</div>
                </Button>
            </div>
        </>
    )
}