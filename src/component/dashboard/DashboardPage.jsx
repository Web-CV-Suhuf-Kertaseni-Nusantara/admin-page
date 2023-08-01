import { Card } from "@material-tailwind/react";
import { Typography } from "@material-tailwind/react";
import DashboardCard from "./CardList";
import WebsiteAnalytics from "./WebsiteAnalytics";
import MostViewedProduct from "./MostViewed";
import AddProduct from "../../models/AddProduct";
import CustomerActivity from "./CustomerActivity";
import { useState } from "react";
import { useEffect } from "react";
import EditProduct from "../../models/EditProduct";

export default function DashboardPage() {
 
    return(
        <>
            <div className="flex flex-col sm:ml-10 sm:mr-10">
                <div>
                    <Typography className="mt-[12px] mb-[6px] font-sans font-bold text-2xl text-black">Dashboard</Typography>
                    <hr className="h-px mb-3 bg-gray-700 border-0 dark:bg-gray-700 xl:mr-5"></hr>
                </div>
                <div id="main" className="flex flex-col">
                    <div className="container md:hidden text-center font-bold text-xl outline-8 bg-green-600 text-white p-2 rounded-2xl">Open with Full Screen Web View to See Full Analytics</div>
                    <div id="col1" className="md:flex hidden flex-row gap-10">
                        <div>
                            <Card color="transparent" id="rcolumn1" className="flex shadow-none md:flex-row mb-[20px] sm:gap-11">
                                <DashboardCard/>
                            </Card>
                            <Card id="rcolumn2" color="white" className="p-4 sm:h-auto sm:w-auto h-[200px] drop-shadow-DashboardShadow">
                                <WebsiteAnalytics/>
                            </Card>
                        </div>
                        <Card className="md:block hidden"><AddProduct/></Card>
                    </div>
                    <div id="col2" className="md:flex hidden flex-row mt-[20px] gap-10 mb-10">
                        <Card><MostViewedProduct/></Card>
                        <Card className="bg-gradient-to-tr from-green-600 to-100% to-green-400"><CustomerActivity/></Card>
                    </div>
                </div>
            </div>
        </>
    )
}