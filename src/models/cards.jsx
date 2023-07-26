import { Card } from "@material-tailwind/react";

export default function CardItem({title1, title2, icon1, icon2}) {
    return(
        <Card className={`h-[100px] w-[200px] mr-12 bg-[#A88AD4] p-4 text-white font-lato`}>
            <div className="flex flex-col">
                <div className="flex flex-row">
                    <div className="p-1 bg-white rounded-lg"><icon2.icon2 className="h-4 w-4 fill-black"/></div>
                    <div className="text-white font-bold font-lato ml-5">{title1}</div>
                </div>
                <div className="flex flex-row items-center mt-4">
                    <div className="font-lato text-white font-bold mr-20">{title2}</div>
                    <icon1.icon1/>
                </div>
            </div>
        </Card>
    )
}