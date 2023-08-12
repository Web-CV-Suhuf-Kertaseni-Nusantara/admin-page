import { Typography } from "@material-tailwind/react";
import MostViewedTable from "./MostViewedTable";
import { Card } from "@material-tailwind/react";

export default function MostViewedProduct() {
    return(
        <>
            <Card className="p-5 bg-white rounded-xl drop-shadow-DashboardShadow 3xl:w-[1020px]">
                <Typography className="font-normal mb-2" variant='h6'>Most Viewed Products</Typography>
                <MostViewedTable/>
            </Card>
        </>
    )
}