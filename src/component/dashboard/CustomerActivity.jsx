import { 
    Tooltip, 
    ReferenceLine, 
    Area, 
    AreaChart, 
    CartesianGrid, 
    ResponsiveContainer,
    XAxis,
    YAxis,
    BarChart,
    Bar, 
} from "recharts";
import CustomChart from "../../models/CustomChart";

export default function CustomerActivity() {
    const data = [
        {day:"mon", activityCount: 2345},
        {day:"tue", activityCount: 2012},
        {day:"wed", activityCount: 1120},
        {day:"thu", activityCount: 2111},
        {day:"fri", activityCount: 2012},
        {day:"sat", activityCount: 1012},
        {day:"sun", activityCount: 1012},

    ]
    return(
        <>
            <div className="flex flex-col text-white p-4 w-64">
                <div className="font-bold font-sans">Customer Activity</div>
                <div>Item 1</div>
            </div>
        </>
    )
}