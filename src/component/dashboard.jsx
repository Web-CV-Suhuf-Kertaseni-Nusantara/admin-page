import { Card } from "@material-tailwind/react";
import { Typography } from "@material-tailwind/react";
import { BsArrowDownRightSquareFill, BsArrowUpRightSquareFill, BsFillPersonFill } from 'react-icons/bs'

export default function DashboardContent() {
    const dashboard_data = {
        total_visitor: 243521,
        stock_available: 24500,
        total_link_visited: 342560,
    }
    return(
        <>
            <div className="flex flex-col ml-16 mr-16">
                <div>
                    <Typography className="mt-5 font-lato font-bold text-2xl text-black">Dashboard</Typography>
                    <hr className="h-px my-3 bg-gray-700 border-0 dark:bg-gray-700 mr-5"></hr>
                </div>
                <div id="main" className="flex md:flex-row flex-col">
                    <div id="row1" className="flex flex-col">
                        <div id="rcolumn1" className="flex md:flex-row flex-col">
                            <Card id="card1" className="h-[100px] w-[200px] md:mr-12 bg-[#A88AD4] p-4 mb-5 self-center md:self-start mr-5">
                                <div className="flex flex-col">
                                    <div className="flex flex-row">
                                        <div className="p-1 h-[26px] bg-white rounded-lg md:mr-6"><BsFillPersonFill className="h-4 w-4 fill-black"/></div>
                                        <Typography className="font-lato font-bold text-black md:text-md text-sm">Total Visitor</Typography>
                                    </div>
                                    <div className="flex flex-row items-center mt-3">
                                        <Typography color="black" className="font-lato font-bold mr-auto">{dashboard_data.total_visitor}</Typography>
                                        <BsArrowDownRightSquareFill color="#EB1F39" className="bg-white rounded-md w-5 h-5 outline-double"/>
                                    </div>
                                </div>
                            </Card>
                            <Card id="card1" className="h-[100px] w-[200px] md:mr-12 bg-[#B9E303] p-4 mb-5 self-center md:self-start mr-5">
                                <div className="flex flex-col">
                                    <div className="flex flex-row">
                                        <div className="p-1 h-[26px] bg-white rounded-lg mr-4"><BsFillPersonFill className="h-4 w-4 fill-black"/></div>
                                        <Typography className="font-lato font-bold text-black">Stock Available</Typography>
                                    </div>
                                    <div className="flex flex-row items-center mt-4">
                                        <div className="font-lato text-black font-bold mr-auto">{dashboard_data.stock_available}</div>
                                        <BsArrowUpRightSquareFill color="#1FEB4C" className="bg-white rounded-md w-5 h-5 outline-double"/>
                                    </div>
                                </div>
                            </Card>
                            <Card id="card1" className="h-[100px] w-[200px] bg-[#B5D5E1] p-4 mb-5 self-center md:self-start mr-5">
                                <div className="flex flex-col">
                                    <div className="flex flex-row">
                                        <div className="p-1 bg-white rounded-lg mr-3"><BsFillPersonFill className="h-4 w-4 fill-black"/></div>
                                        <Typography className="text-black font-lato font-bold">Total Link Visited</Typography>
                                    </div>
                                    <div className="flex flex-row items-center mt-4">
                                        <div className="text-black font-lato font-bold mr-auto">{dashboard_data.total_link_visited}</div>
                                        <BsArrowDownRightSquareFill color="#EB1F39" className="bg-white rounded-md w-5 h-5 outline-double"/>
                                    </div>
                                </div>
                            </Card>
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