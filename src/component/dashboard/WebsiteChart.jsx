import { useEffect } from "react";
import { useState } from "react";
import { CartesianGrid, LineChart, ResponsiveContainer, XAxis, YAxis, Line, Tooltip } from "recharts";

export default function WebsiteChart() {
    const database = [
        {
            name:'Jan',
            Visitor:1222,
            LinkVisited:2123
        },
        {
            name:'Feb',
            Visitor:1222,
            LinkVisited:2123
        },
        {
            name:'Mar',
            Visitor:2337,
            LinkVisited:2123
        },
        {
            name:'Apr',
            Visitor:1222,
            LinkVisited:2123
        },
        {
            name:'May',
            Visitor:1645,
            LinkVisited:2123
        },
        {
            name:'Jun',
            Visitor:2323,
            LinkVisited:1212
        },
        {
            name:'Jul',
            Visitor:777,
            LinkVisited:2123
        },
        {
            name:'Aug',
            Visitor:998,
            LinkVisited:3322
        },
        {
            name:'Sep',
            Visitor:1444,
            LinkVisited:1023
        },
        {
            name:'Oct',
            Visitor:1222,
            LinkVisited:1666
        },
        {
            name:'Nov',
            Visitor:1009,
            LinkVisited:1977
        },
        {
            name:'Des',
            Visitor:2012,
            LinkVisited:2322
        },
    ]

    const [ showChart, setShowChart ] = useState(true)
    useEffect(() => {
        const handleResize = () => window.innerWidth < 720 ? setShowChart(false) : setShowChart(true)
        window.addEventListener('resize', handleResize)

        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    return (
        <ResponsiveContainer height={235} className={`${showChart ? 'block' : 'hidden'}`}>
            <LineChart data={database} margin={{ right: 30, top: 20, bottom: 10}}>
                <CartesianGrid strokeDasharray='3 3'/>
                <XAxis dataKey={"name"} interval={'preserveStartEnd'} className="font-semibold font-sans"/>
                <YAxis className="font-sans font-semibold"/>
                <Tooltip/>
                <Line type='monotone' dataKey="Visitor" stroke="#B5D5E1" strokeWidth={2} activeDot={{ r: 3 }}/>
                <Line type='monotone' dataKey="LinkVisited" strokeWidth={2} stroke="#A88AD4" activeDot={{ r: 3 }}/>
            </LineChart>
        </ResponsiveContainer>
    )
}