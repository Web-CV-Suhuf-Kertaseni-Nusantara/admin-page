import { useEffect } from "react";
import { useState } from "react";
import { CartesianGrid, LineChart, ResponsiveContainer, XAxis, YAxis, Line, Tooltip } from "recharts";

const CustomTooltipProduct = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
        <div className="custom-tooltip bg-[#f2f2f2] rounded-lg w-auto h-auto p-4 text-black font-lato">
            <p className="label font-bold font-lato text-[#232323]">{ChangeMonthProduct(label)}</p>
            <p className="label font-bold font-lato text-[#A88AD4]">{`Tokopedia : ${payload[0].value}`}</p>
            <p className="label font-bold font-lato text-[#B5D5E1]">{`Shopee : ${payload[1].value}`}</p>
        </div>
        );
    }
    return null;
};

const ChangeMonthProduct = (label) => {
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


export default function ChartProducts() {
    const database = [
        {
            name:'Jan',
            tokopedia:1121,
            shopee:3434
        },
        {
            name:'Feb',
            tokopedia:2382,
            shopee:1213
        },
        {
            name:'Mar',
            tokopedia:1313,
            shopee:3242
        },
        {
            name:'Apr',
            tokopedia:1441,
            shopee:656
        },
        {
            name:'May',
            tokopedia:1711,
            shopee:434
        },
        {
            name:'Jun',
            tokopedia:565,
            shopee:3123
        },
        {
            name:'Jul',
            tokopedia:434,
            shopee:3224
        },
        {
            name:'Aug',
            tokopedia:663,
            shopee:4322
        },
        {
            name:'Sep',
            tokopedia:1515,
            shopee:2421
        },
        {
            name:'Oct',
            tokopedia:1231,
            shopee:4353
        },
        {
            name:'Nov',
            tokopedia:2323,
            shopee:3234
        },
        {
            name:'Dec',
            tokopedia:1992,
            shopee:1234
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
            <ResponsiveContainer height={245} className={`${showChart ? 'flex' : 'hidden'} z-`}>
                <LineChart data={database} margin={{ right: 30, top: 20, bottom: 10}}>
                    <CartesianGrid strokeDasharray='3 3'/>
                    <XAxis dataKey={"name"} interval={'preserveStartEnd'} className="font-semibold font-sans"/>
                    <YAxis className="font-sans font-semibold"/>
                    <Tooltip content={CustomTooltipProduct}/>
                    <Line type='monotone' dataKey="tokopedia" stroke="#B5D5E1" strokeWidth={2} activeDot={{ r: 5 }} dot={{r : 0}}/>
                    <Line type='monotone' dataKey="shopee" strokeWidth={2} stroke="#A88AD4" activeDot={{ r: 5 }} dot={{r : 0}}/>
                </LineChart>
            </ResponsiveContainer>
        </>
    )
}