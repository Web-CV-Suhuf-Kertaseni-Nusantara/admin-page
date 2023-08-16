import { Button } from "@material-tailwind/react";
import { Typography } from "@material-tailwind/react";
import ProductTable from "./ProductTable";
import { useState } from "react";
import AddProduct from "../dashboard/AddProducts";

export default function ProductsContent() {
    const [ setOpen, setOpenState ] = useState(false);

    return(
        <>
            <div className="flex flex-col pt-4 pl-7 pr-7">
                <div className="flex flex-row mb-3">
                    <Typography className="flex text-opacity-70 font-bold text-2xl text-black font-lato self-center">Product List</Typography>
                    <div className="grow"/>
                    <Button className="pl-4 pr-4 pt-1 pb-1 bg-green-600 rounded-full shadow-md hover:shadow-gray-400">All Type</Button>
                    <Button onClick={() => (setOpenState(!setOpen))}className="pl-5 pr-5 pt-1 pb-1 bg-green-600 rounded-full shadow-md hover:shadow-gray-400 ml-2 mr-4">Add</Button>
                </div>
                <hr className="h-px mb-3 bg-gray-700 border-0 dark:bg-gray-700"></hr>
                {setOpen == true ? <div className="absolute flex h-auto w-auto z-10"><AddProduct/></div>: null}

                <div><ProductTable/></div>
            </div>
        </>
    )
}