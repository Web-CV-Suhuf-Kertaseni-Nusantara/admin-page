import { useState, PureComponent } from 'react';
import {} from 'react-chartjs-2'
import { BarChart, ResponsiveContainer, Bar, Tooltip, Cell, XAxis } from 'recharts'

const BarTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
        <div className="custom-tooltip bg-[#f2f2f2] rounded-md w-auto h-auto p-2 text-black font-lato">
            <p className="label font-bold font-lato text-[#232323] text-opacity-40">{ChangeDay(label)}</p>
            <p className="label font-bold font-lato text-[#232323] text-xs">{`Shopee : ${payload[0].value}`}</p>
            <p className="label font-bold font-lato text-[#232323] text-xs">{`Tokpedia : ${payload[1].value}`}</p>
        </div>
        );
    }
    return null;
};

const ChangeDay = (label) => {
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
    if (label == 'Sun') {
        return 'Sunday';
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
            <text x={0} y={0} dy={7} textAnchor="end" fill="#fff" transform="rotate(-50)">
            {payload.value}
            </text>
        </g>
        );
    }
}

export default function CustomChart() {
    const [focusBar, setFocusBar] = useState(null);
    const [mouseLeave, setMouseLeave] = useState(true);

    const activity = [
        {day : "Mon", shopee: 3000, tokopedia: 2500},
        {day : "Tue", shopee: 1755, tokopedia: 1500},
        {day : "Wed", shopee: 1700, tokopedia: 4800},
        {day : "Thu", shopee: 3420, tokopedia: 1100},
        {day : "Fri", shopee: 4803, tokopedia: 1400},
        {day : "Sat", shopee: 1732, tokopedia: 1500},
        {day : "Sun", shopee: 1023, tokopedia: 3026},
    ]

    return(
        <>
            <ResponsiveContainer height="70%" width="100%" className={`absolute font-lato font-bold text-xs`}>
                <BarChart data={activity} barCategoryGap="100%" barGap="100%" barSize={15} margin={{left: 25, right: 25, top: 20}}
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
                    {/* <CartesianGrid strokeDasharray='3 3'/> */}
                    <XAxis dataKey="day" interval={0}  axisType='category' tick={<CustomizedAxisTick/>} padding={{left:2}}/>
                    <Tooltip content={BarTooltip} cursor={false} label="day"/>
                    <Bar dataKey="shopee" stackId="a"  radius={[10, 10, 0, 0]} background={{ fill: '#fff', fillOpacity: "30%", radius: [10, 10, 0, 0]}}>
                        {activity.map((entry, index) => (
                            <Cell stack fill={focusBar === index || mouseLeave ? "rgba(146, 207, 229, 1)" : "rgba(255, 255, 255, 0.5)"}/>
                        ))}
                    </Bar>
                    <Bar dataKey="tokopedia" stackId="a" radius={10}>
                        {activity.map((entry, index) => (
                            <Cell stack fill={focusBar === index || mouseLeave ? "rgba(240, 240, 250, 1)" : "rgba(255, 255, 255, 0.5)"}/>
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </>
    )
}