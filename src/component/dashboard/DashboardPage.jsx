import { Card } from "@material-tailwind/react";
import { Typography } from "@material-tailwind/react";
import DashboardCard from "./CardList";
import WebsiteAnalytics from "./WebsiteAnalytics";
import MostViewedProduct from "./MostViewed";

export default function DashboardPage() {
    return(
        <>
            <div className="flex flex-col sm:ml-10 sm:mr-32">
                <div>
                    <Typography className="mt-4 mb-2 font-sans font-bold text-2xl text-black">Dashboard</Typography>
                    <hr className="h-px mb-3 bg-gray-700 border-0 dark:bg-gray-700 xl:mr-5"></hr>
                </div>
                <div id="main" className="flex xl:flex-row flex-col">
                    <div id="row1" className="flex flex-col">
                        <Card color="transparent" id="rcolumn1" className="flex shadow-none sm:flex-row flex-col mb-[15px] sm:gap-20">
                            <DashboardCard/></Card>
                        <Card id="rcolumn2" color="white" className="mb-[15px] p-4 sm:h-auto sm:w-auto h-[200px] drop-shadow-DashboardShadow">
                            <WebsiteAnalytics/></Card>
                        <Card id="rcolumn3" color="white">
                            <MostViewedProduct/></Card>
                    </div>

                    {/** ROW 2 */}
                    <div id="row2" className="xl:ml-10">
                        <Card>1</Card>
                        <Card>2</Card>
                    </div>
                </div>
            </div>
        </>
    )
}