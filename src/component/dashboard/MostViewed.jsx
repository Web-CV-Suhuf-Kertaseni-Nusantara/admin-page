import { Typography } from "@material-tailwind/react";
import MostViewedTable from "./MostViewedTable";

export default function MostViewedProduct() {
    return(
        <>
            <div className="p-5 bg-white rounded-xl drop-shadow-DashboardShadow">
                <Typography className="font-normal mb-2" variant='h6'>Most Viewed Products</Typography>
                <MostViewedTable/>
            </div>
        </>
    )
}