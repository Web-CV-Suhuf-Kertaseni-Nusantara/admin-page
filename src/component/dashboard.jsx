import { Typography } from "@material-tailwind/react";
import { Container } from "postcss";

export default function DashboardContent() {
    return(
        <>
            <div className="flex flex-col ml-5">
                <div>
                    <Typography variant="h4" color="Black" className="mt-5 font-lato">Dashboard</Typography>
                    <hr className="h-px my-3 bg-gray-700 border-0 dark:bg-gray-700 mr-5"></hr>
                </div>
                <div className="flex flex-row">
                    <div>item1</div>
                    <div className="ml-10">item2</div>
                </div>

            </div>
        </>
    )
}