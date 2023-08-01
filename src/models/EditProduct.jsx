import { Tooltip } from "@material-tailwind/react";
import { Typography } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { IconButton } from "@material-tailwind/react";
import { AiFillCaretDown, AiOutlineClear } from "react-icons/ai";
import { MdClear } from "react-icons/md";
import { useState } from "react";



export default function EditProduct() {
    const [ open, setOpen ] = useState(false);
    const [ dropdownitem, setItem ] = useState('Menu1');

    return(
        <>
            <div className="flex flex-col w-[475px] h-[275px] bg-[#f6f6f6] rounded-lg p-5">
                <head className="flex flex-row items-center">
                    <div className="grow"><Typography variant='h5' className="font-bold font-lato text-[#232323]">Edit</Typography></div>
                    <Tooltip content="Clear Form" className="bg-red-600 h-7 text-xs">
                        <IconButton className="w-5 h-5 bg-transparent hover:shadow-none shadow-none"><AiOutlineClear className="w-5 h-5 fill-black"/></IconButton>
                    </Tooltip>
                    <Tooltip content="Exit Form" className="bg-red-600 h-7 text-xs">
                        <IconButton className="w-5 h-5 bg-transparent hover:shadow-none shadow-none"><MdClear className="w-5 h-5 fill-black"/></IconButton>
                    </Tooltip>
                </head>
                <div>
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
                        </div></button>
                        
                    {open && <div className="absolute bg-[#f6f6f6] rounded-md divide-y-2 ml-4 drop-shadow-DashboardShadow">
                        <div className="flex flex-col h-16 w-20 items-start overflow-y-auto scrollbar-thumb-green-600 scrollbar-thin ">
                        <button onClick={() => {setItem('Menu1'); setOpen(false)}}>Type 1</button>
                        <button onClick={() => {setItem('Menu2'); setOpen(false)}}>Type 2</button>
                        <button onClick={() => {setItem('Other'); setOpen(false)}}>Other</button></div>
                    </div>}</div>
                    </div>
                    <div id="input-price" className="flex flex-row mt-[5px]">
                        <Typography className='font-bold text-opacity-40 text-black ml-[2px]'>Price</Typography>
                        <div className="font-bold text-black ml-[13px]">Rp0</div>
                    </div>
                    <div id="input-stock" className="flex flex-row mt-[5px]">
                        <Typography className='font-bold text-opacity-40 text-black'>Stock</Typography>
                        <div className="font-bold text-black ml-[10px]">0</div>
                    </div>
                </div>
            </div>
        </>
    )
}