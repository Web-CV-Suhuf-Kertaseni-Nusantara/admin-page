import { useState } from "react";
import { useEffect } from "react";
import { Bar, BarChart, ResponsiveContainer } from "recharts";
import CustomChart from "../../models/CustomChart";

export default function CustomerActivity() {

    return(
        <>
            <div className="flex flex-col text-white w-64">
                <div className="font-bold font-lato text-xl mt-5 ml-4">Customer Activity</div>
                <div>
                    <CustomChart/>
                </div>
            </div>
        </>
    )
}