import { useEffect } from "react";
import { useState } from "react";
import { CartesianGrid, LineChart, ResponsiveContainer, XAxis, YAxis, Line, Tooltip } from "recharts";

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
        <div className="custom-tooltip bg-[#f2f2f2] rounded-lg w-auto h-auto p-4 text-black font-lato">
            <p className="label font-bold font-lato text-[#232323]">{ChangeMonth(label)}</p>
            <p className="label font-bold font-lato text-[#A88AD4]">{`Web Visitor : ${payload[0].value}`}</p>
            <p className="label font-bold font-lato text-[#B5D5E1]">{`Link Visited : ${payload[1].value}`}</p>
        </div>
        );
    }
    return null;
};

const ChangeMonth = (label) => {
    if (label === 'Jan') {
      return "January";
    }
    if (label === 'Feb') {
      return "February";
    }
    if (label === 'Mar') {
      return "March";
    }
    if (label === 'Apr') {
      return 'April';
    }
    if (label === 'May') {
      return 'March';
    }
    if (label === 'Jun') {
      return 'Juny';
    }
    if (label === 'Jul') {
      return 'July';
    }
    if (label === 'Aug') {
      return 'August';
    }
    if (label === 'Sep') {
      return 'September';
    }
    if (label === 'Oct') {
      return 'October';
    }
    if (label === 'Nov') {
      return 'November';
    }
    if (label === 'Dec') {
      return 'December';
    }
    return '';
  };


export default function WebsiteChartAnalytics() {
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
            name:'Dec',
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
        <>
            <ResponsiveContainer height={270} className={`${showChart ? 'flex' : 'hidden'}`}>
                <LineChart data={database} margin={{ right: 30, top: 20, bottom: 10}}>
                    <CartesianGrid strokeDasharray='3 3'/>
                    <XAxis dataKey={"name"} interval={'preserveStartEnd'} className="font-semibold font-sans"/>
                    <YAxis className="font-sans font-semibold"/>
                    <Tooltip content={CustomTooltip}/>
                    <Line type='monotone' dataKey="Visitor" stroke="#B5D5E1" strokeWidth={2} activeDot={{ r: 5 }} dot={{r : 0}}/>
                    <Line type='monotone' dataKey="LinkVisited" strokeWidth={2} stroke="#A88AD4" activeDot={{ r: 5 }} dot={{r : 0}}/>
                </LineChart>
            </ResponsiveContainer>
        </>
    )
}