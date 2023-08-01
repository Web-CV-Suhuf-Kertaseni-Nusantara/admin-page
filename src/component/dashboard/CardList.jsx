import { Typography } from "@material-tailwind/react"
import { Card } from "@material-tailwind/react"
import { BsArrowDownRightSquareFill, BsArrowUpRightSquareFill, BsFillPersonFill } from "react-icons/bs"

export default function DashboardCard() {
    const dashboard_data = {
        total_visitor: 243521,
        stock_available: 24500,
        total_link_visited: 342560,
    }
    return (
        <>
            <Card id="card1" className="md:h-[110px] md:w-[225px] w-[350px] bg-[#A88AD4] p-4 self-center md:self-start drop-shadow-DashboardShadow">
                <div className="flex flex-col">
                    <div className="flex flex-row pl-1 pt-2">
                        <div className="p-1 h-[26px] bg-white rounded-lg mr-2"><BsFillPersonFill className="h-4 w-4 fill-black"/></div>
                        <Typography className="font-sans font-bold text-black md:text-base text-md">Total Visitor</Typography>
                    </div>
                    <div className="flex flex-row items-center mt-3">
                        <Typography color="black" className="font-sans font-bold mr-auto">{dashboard_data.total_visitor}</Typography>
                        <BsArrowDownRightSquareFill color="#EB1F39" className="bg-white rounded-md w-5 h-5 outline-double"/>
                    </div>
                </div>
            </Card>
            <Card id="card2" className="md:h-[110px] md:w-[225px] w-[250px] bg-[#B9E303] p-4 self-center md:self-start drop-shadow-DashboardShadow">
                <div className="flex flex-col pl-1 pt-2">
                    <div className="flex flex-row">
                        <div className="p-1 h-[26px] bg-white rounded-lg mr-2"><BsFillPersonFill className="h-4 w-4 fill-black"/></div>
                        <Typography className="font-sans font-bold text-black md:text-base text-md">Stock Available</Typography>
                    </div>
                    <div className="flex flex-row items-center mt-3">
                        <Typography color="black" className="font-sans font-bold mr-auto">{dashboard_data.stock_available}</Typography>
                        <BsArrowUpRightSquareFill color="#1FEB4C" className="bg-white rounded-md w-5 h-5 outline-double"/>
                    </div>
                </div>
            </Card>
            <Card id="card3" className="md:h-[110px] md:w-[225px] w-[250px] bg-[#B5D5E1] p-4 self-center md:self-start drop-shadow-DashboardShadow">
                <div className="flex flex-col pl-1 pt-2">
                    <div className="flex flex-row">
                        <div className="p-1 h-[26px] bg-white rounded-lg mr-3"><BsFillPersonFill className="h-4 w-4 fill-black"/></div>
                        <Typography className="font-sans font-bold text-black md:text-base text-md">Total Link Visited</Typography>
                    </div>
                    <div className="flex flex-row items-center mt-2">
                        <Typography color="black" className="font-sans font-bold mr-auto">{dashboard_data.total_link_visited}</Typography>
                        <BsArrowUpRightSquareFill color="#1FEB4C" className="bg-white rounded-md w-5 h-5 mr-2 outline-double"/>
                    </div>
                </div>
            </Card>
        </>
    )
}