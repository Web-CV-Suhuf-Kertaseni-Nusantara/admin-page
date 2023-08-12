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
            <Card id="card1" className="md:h-[110px] md:w-[255px] 3xl:w-[310px] 3xl:h-[130px] bg-[#A88AD4] p-4 self-center md:self-start drop-shadow-DashboardShadow">
                <div className="flex flex-col">
                    <div className="flex flex-row pl-1 pt-1">
                        <div className="p-1 h-[26px] 3xl:h-[35px] 3xl:w-[35px] bg-white rounded-lg mr-2"><BsFillPersonFill className="h-4 w-4 3xl:h-[25px] 3xl:w-[25px] 3xl:ml-[1px] fill-black"/></div>
                        <Typography className="font-sans font-bold text-black text-md 3xl:text-xl self-center">Total Visitor</Typography>
                    </div>
                    <div className="flex flex-row items-center mt-3 3xl:mt-5">
                        <Typography color="black" className="font-sans font-bold mr-auto text-xl self-center 3xl:ml-1">{dashboard_data.total_visitor}</Typography>
                        <BsArrowDownRightSquareFill color="#EB1F39" className="bg-white rounded-md w-5 h-5 3xl:h-[25px] 3xl:w-[25px] outline-double 3xl:mr-3"/>
                    </div>
                </div>
            </Card>
            <Card id="card2" className="md:h-[110px] md:w-[255px] 3xl:w-[310px] 3xl:h-[130px] bg-[#B9E303] p-4 self-center md:self-start drop-shadow-DashboardShadow">
                <div className="flex flex-col">
                    <div className="flex flex-row pl-1 pt-1">
                        <div className="p-1 h-[26px] 3xl:h-[35px] 3xl:w-[35px] bg-white rounded-lg mr-2"><BsFillPersonFill className="h-4 w-4 3xl:h-[25px] 3xl:w-[25px] 3xl:ml-[1px] fill-black"/></div>
                        <Typography className="font-sans font-bold text-black text-md 3xl:text-xl self-center">Stock Available</Typography>
                    </div>
                    <div className="flex flex-row items-center mt-3 3xl:mt-5">
                        <Typography color="black" className="font-sans font-bold mr-auto text-xl self-center 3xl:ml-1">{dashboard_data.stock_available}</Typography>
                        <BsArrowUpRightSquareFill color="#EB1F39" className="bg-white rounded-md w-5 h-5 3xl:h-[25px] 3xl:w-[25px] outline-double 3xl:mr-3"/>
                    </div>
                </div>
            </Card>
            <Card id="card3" className="md:h-[110px] md:w-[255px] 3xl:w-[310px] 3xl:h-[130px] bg-[#B5D5E1] p-4 self-center md:self-start drop-shadow-DashboardShadow">
                <div className="flex flex-col">
                    <div className="flex flex-row pl-1 pt-1">
                        <div className="p-1 h-[26px] 3xl:h-[35px] 3xl:w-[35px] bg-white rounded-lg mr-2"><BsFillPersonFill className="h-4 w-4 3xl:h-[25px] 3xl:w-[25px] 3xl:ml-[1px] fill-black"/></div>
                        <Typography className="font-sans font-bold text-black text-md 3xl:text-xl self-center">Total Link Visited</Typography>
                    </div>
                    <div className="flex flex-row items-center mt-3 3xl:mt-5">
                        <Typography color="black" className="font-sans font-bold mr-auto text-xl self-center 3xl:ml-1">{dashboard_data.total_link_visited}</Typography>
                        <BsArrowUpRightSquareFill color="#EB1F39" className="bg-white rounded-md w-5 h-5 3xl:h-[25px] 3xl:w-[25px] outline-double 3xl:mr-3"/>
                    </div>
                </div>
            </Card>
        </>
    )
}