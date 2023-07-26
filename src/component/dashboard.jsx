import { Card } from "@material-tailwind/react";
import { Typography } from "@material-tailwind/react";
import { BsFillPersonFill } from 'react-icons/bs'

export default function DashboardContent() {
    return(
        <>
            <div className="flex flex-col ml-5">
                <div>
                    <Typography className="mt-5 font-lato font-bold text-2xl text-black">Dashboard</Typography>
                    <hr className="h-px my-3 bg-gray-700 border-0 dark:bg-gray-700 mr-5"></hr>
                </div>
                <div id="main" className="flex font-lato">
                    <div id="row1" className="flex flex-col">
                        <div id="rcolumn1" className="flex">
                            <Card id="card1" className="h-[125px] w-[200px] mr-12 bg-[#A88AD4] p-4 text-white">
                                <div className="flex flex-col">
                                    <div className="flex flex-row">
                                        <div className="p-1 bg-white rounded-lg"><BsFillPersonFill className="h-4 w-4 fill-black"/></div>
                                        <div className="text-white font-bold font-lato">Total Visitior</div>
                                    </div>
                                </div>
                                <div className="flex flex-col">2</div>
                            </Card>
                            <Card id="card2" className="h-[125px] w-[200px] mr-12">2</Card>
                            <Card id="card3" className="h-[125px] w-[200px]">3</Card>
                        </div>
                        <Card id="rcolumn2" color="cyan" className="mb-[26px] mt-[26px]">Column2</Card>
                        <Card id="rcolumn3" color="cyan">Column3</Card>
                    </div>

                    {/** ROW 2 */}
                    <div id="row2" className="ml-10">
                        <Card>1</Card>
                        <Card>2</Card>
                    </div>
                </div>

            </div>
        </>
    )
}

/** PADA ID : MAIN
 *  ITEM AKAN DIBAGI ID DAN ITEM :
 *  ROW1 : TOTAL_VISITOR, STOCK_AVAILABLE, TOTAL_LINK_VISITED,
 *         WEB_ANALYTICS, MOST_VIEWED_PRODUCTS
 *  ROW2 : ADD_PRODUCT, CUSTOMER_ACTIVITY
 *  RCOLUMN1 : TOTAL_VISITOR, STOCK_AVAILABLE, TOTAL_LINK_VISITED
 *  RCOLUMN2 : WEB_ANALYTICS
 *  RCOLUMN3 : MOST_VIEWED_PRODUCTS
 */