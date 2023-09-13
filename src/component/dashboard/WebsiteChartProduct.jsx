import { useState, useEffect } from 'react';
import { CartesianGrid, LineChart, ResponsiveContainer, XAxis, YAxis, Line, Tooltip } from "recharts";
import axios from 'axios';

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
      return 'May';
    }
    if (label === 'Jun') {
      return 'June';
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
    const [monthlyData, setMonthlyData] = useState([]);
    const [ showChart, setShowChart ] = useState(true)

    const fetchMonthlyData = async () => {
      try {
        const currentYear = new Date().getFullYear(); // Get the current year
        const response = await axios.get('http://localhost:5000/api/analytics/product-monthly');
        
        // Find the data for the current year
        const currentYearData = response.data.find((item) => item.year === currentYear);
        
        if (!currentYearData) {
          return [];
        }
        
        // Create an array of months with 0 values for missing months
        const formattedData = Array.from({ length: 12 }, (_, index) => {
          const monthInfo = currentYearData.data.find((item) => item.month === index + 1);
          return {
            month: index + 1,
            monthLabel: new Date(currentYear, index, 1).toLocaleString('default', { month: 'short' }),
            totalShopeeClicks: monthInfo?.totalShopeeClicks || 0,
            totalTokopediaClicks: monthInfo?.totalTokopediaClicks || 0,
          };
        });
    
        return formattedData;
      } catch (error) {
        console.error('Error fetching data:', error);
        return [];
      }
    };
  
    useEffect(() => {
        fetchMonthlyData().then((data) => setMonthlyData(data));

        const handleResize = () => window.innerWidth < 720 ? setShowChart(false) : setShowChart(true)
        window.addEventListener('resize', handleResize)

        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    return (
        <>
            <ResponsiveContainer height={245} className={`${showChart ? 'flex' : 'hidden'} z-`}>
                <LineChart data={monthlyData} margin={{ right: 30, top: 20, bottom: 10}}>
                    <CartesianGrid strokeDasharray='3 3'/>
                    <XAxis dataKey={"monthLabel"} interval={'preserveStartEnd'} className="font-semibold font-sans"/>
                    <YAxis className="font-sans font-semibold" type="number" domain={[0, 24]}/>
                    <Tooltip content={CustomTooltipProduct}/>
                    <Line type='monotone' dataKey="totalTokopediaClicks" stroke="#B5D5E1" strokeWidth={2} activeDot={{ r: 5 }} dot={{r : 0}}/>
                    <Line type='monotone' dataKey="totalShopeeClicks" strokeWidth={2} stroke="#A88AD4" activeDot={{ r: 5 }} dot={{r : 0}}/>
                </LineChart>
            </ResponsiveContainer>
        </>
    )
}