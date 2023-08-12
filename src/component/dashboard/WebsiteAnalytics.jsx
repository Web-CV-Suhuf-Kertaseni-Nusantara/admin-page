import { GoDotFill } from "react-icons/go"
import { useState } from "react";
import { Typography } from "@material-tailwind/react";
import { AiFillCaretDown } from "react-icons/ai";
import WebsiteChartAnalytics from "../../models/WebsiteChartAnalytics";
import ChartProducts from "../../models/WebsiteChartProduct";


export default function WebsiteAnalytics() {
    const [ open, setOpen ] = useState(false);
    const [ dropdownitem, setItem ] = useState('Menu1');

    return(
        <>
            <div className="md:flex sm:flex-row flex-col pr-5 pt-2 pl-4 mb-2 hidden">
                <div className="sm:grow font-bold font-sans">
                <button onClick={() => setOpen(!open)} className="self-center p-0 ml-1">
                    <div className="flex flex-row items-center">
                            {dropdownitem === 'Menu1' && <Typography variant="h6" className="text-black">Website Analytics</Typography>}
                            {dropdownitem === 'Menu2' && <Typography variant="h6" className="text-black">Product Analytics</Typography>}
                            <AiFillCaretDown className="ml-1"/>
                    </div>
                </button>
                {open && <div className="absolute bg-[#f6f6f6] rounded-md divide-y-2 ml-4 drop-shadow-DashboardShadow z-10">
                        <div className="flex flex-col h-auto w-auto pl-2 pr-2 items-start overflow-y-auto scrollbar-thumb-green-600 scrollbar-thin ">
                        <button onClick={() => {setItem('Menu1'); setOpen(false)}}>Website Analytics</button>
                        <button onClick={() => {setItem('Menu2'); setOpen(false)}}>Product Analytics</button></div>
                </div>}
                </div>
                <div className="sm:flex hidden mr-10 flex-row items-center font-sans">
                    <GoDotFill color="#A88AD4"/>
                    {dropdownitem === 'Menu1' && <Typography>Total Website Visitor</Typography>}
                    {dropdownitem === 'Menu2' && <Typography>Total Link Tokopedia Visit</Typography>}
                </div>
                
                <div className="flex-row flex items-center font-sans">
                    <GoDotFill color="#B5D5E1"/>
                    {dropdownitem === 'Menu1' && <Typography>Total Link Visited</Typography>}
                    {dropdownitem === 'Menu2' && <Typography>Total Link Shopee Visit</Typography>}
                </div>
            </div>
            <div className="md:hidden block self-center">
                Open with Full Screen Web View to See Chart Analytics
            </div>
            <div>
                {dropdownitem === 'Menu1' && <WebsiteChartAnalytics/>}
                {dropdownitem === 'Menu2' && <ChartProducts/>}
            </div>
        </>
    )
}