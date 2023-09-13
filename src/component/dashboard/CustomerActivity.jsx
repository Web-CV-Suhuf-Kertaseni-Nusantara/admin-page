import { Typography } from '@material-tailwind/react';
import { useState, useEffect, PureComponent } from 'react';
import {} from 'react-chartjs-2'
import { GoDotFill } from 'react-icons/go';
import { BarChart, ResponsiveContainer, Bar, Tooltip, Cell, XAxis, Legend, CartesianGrid, YAxis } from 'recharts'
import axios from 'axios';

const BarTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
        <div className="custom-tooltip bg-[#fff] rounded-md w-auto h-auto p-2 text-black font-lato">
            <p className="label font-bold font-lato text-[#232323] text-opacity-40">{ChangeDay(label)}</p>
            <p className="label font-bold font-lato text-[#FF5757] text-xs">{`Shopee : ${payload[0].value}`}</p>
            <p className="label font-bold font-lato text-[#00AA5B] text-xs">{`Tokpedia : ${payload[1].value}`}</p>
        </div>
        );
    }
    return null;
};

const ChangeDay = (label) => {
    if (label == 'Sun') {
        return 'Sunday';
    }
    if (label == 'Mon') {
        return "Monday";
    }
    if (label == 'Tue') {
        return "Tuesday";
    }
    if (label == 'Wed') {
        return "Wednesday";
    }
    if (label == 'Thu') {
        return 'Thursday';
    }
    if (label == 'Fri') {
        return 'Friday';
    }
    if (label == 'Sat') {
        return 'Saturday';
    }
return '';
};

class CustomizedLabel extends PureComponent {
    render() {
        const { x, y, stroke, value } = this.props;

        return (
        <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
            {value}
        </text>
        );
    }   
}

class CustomizedAxisTick extends PureComponent {
    render() {
    const { x, y, stroke, payload } = this.props;
        return (
        <g transform={`translate(${x},${y})`}>
            <text x={0} y={0} dy={10} dx={0} textAnchor="middle" fill="#000">
            {payload.value}
            </text>
        </g>
        );
    }
}

export default function CustomerActivity() {
    const [focusBar, setFocusBar] = useState(null);
    const [mouseLeave, setMouseLeave] = useState(true);
    const [weeklyData, setWeeklyData] = useState([]);

    const fetchWeeklyData = async () => {
        try {
          const response = await axios.get('http://localhost:5000/api/analytics/product-weekly');
        
          // Create a dictionary to map dayNumber to data
          const dataMap = {};
          response.data.forEach((item) => {
            dataMap[item.dayNumber] = {
              dayNumber: item.dayNumber,
              totalShopeeClicks: item.totalShopeeClicks,
              totalTokopediaClicks: item.totalTokopediaClicks,
            };
          });
      
          // Create an array of data for all days (Sunday to Saturday), setting missing days to 0
          const formattedData = [
            { dayNumber: 1, dayLabel: 'Sun' },
            { dayNumber: 2, dayLabel: 'Mon' },
            { dayNumber: 3, dayLabel: 'Tue' },
            { dayNumber: 4, dayLabel: 'Wed' },
            { dayNumber: 5, dayLabel: 'Thu' },
            { dayNumber: 6, dayLabel: 'Fri' },
            { dayNumber: 7, dayLabel: 'Sat' },
          ].map((dayInfo) => ({
            ...dayInfo,
            totalShopeeClicks: dataMap[dayInfo.dayNumber]?.totalShopeeClicks || 0,
            totalTokopediaClicks: dataMap[dayInfo.dayNumber]?.totalTokopediaClicks || 0,
          }));
        
          return formattedData;
        } catch (error) {
          console.error('Error fetching data:', error);
          return [];
        }
    };
      
    useEffect(() => {
        fetchWeeklyData().then((data) => setWeeklyData(data));
      }, []);

    return(
        <>  
            <body className="flex flex-col text-black w-[435px]">
                <section className="flex flex-row ml-[30%] items-center align-middle mt-5">
                    <Typography className="font-bold font-lato text-xl ">Customer Activity</Typography>
                    
                </section>
                <main>
                    <ResponsiveContainer height="75%" width="100%" className={`absolute font-lato font-bold text-sm`}>
                        <BarChart data={weeklyData} barCategoryGap="10%" barGap="100%" barSize={20} margin={{right: 25, top: 20}}
                            onMouseMove={(state) => {
                                if (state.isTooltipActive) {
                                    setFocusBar(state.activeTooltipIndex);
                                    setMouseLeave(false);
                                } else {
                                    setFocusBar(null);
                                    setMouseLeave(true);
                                }
                            }}
                        >
                            <CartesianGrid strokeDasharray='5 5'/>
                            <XAxis dataKey="dayLabel" interval={0}  axisType='category' tick={<CustomizedAxisTick/>} />
                            <YAxis/>
                            <Tooltip content={BarTooltip} cursor={false} label="dayLabel"/>
                            <Bar dataKey="totalShopeeClicks" stackId="a" radius={0} background={{ fill: '#fff', fillOpacity: "30%", radius: [10, 10, 0, 0] }}>
                                {weeklyData.map((entry, index) => (
                                <Cell stack fill={focusBar === index || mouseLeave ? "#FF5757" : "rgba(255, 255, 255, 0.5)"} />
                                ))}
                            </Bar>
                            <Bar dataKey="totalTokopediaClicks" stackId="a" radius={[5, 5, 0, 0]}>
                                {weeklyData.map((entry, index) => (
                                <Cell stack fill={focusBar === index || mouseLeave ? "#00FF88" : "rgba(255, 255, 255, 0.5)"} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </main>
            </body>
        </>
    )
}