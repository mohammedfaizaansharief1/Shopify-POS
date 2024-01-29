"use client";
import '@/app/globals.css'
import { Underline } from "lucide-react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";


const data = [
  {
    name: "Jan",
    Purchase: 53000,
    Sales: 50000,
    amt: 2400,
  },
  {
    name: "Feb",
    Purchase: 59000,
    Sales: 49000,
    amt: 2210,
  },
  {
    name: "Mar",
    Purchase: 45000,
    Sales: 52000,
    amt: 2290,
  },
  {
    name: "Apr",
    Purchase: 38000,
    Sales: 42000,
    amt: 2000,
  },
  {
    name: "May",
    Purchase: 42000,
    Sales: 46000,
    amt: 2181,
  },
  {
    name: "Jun",
    Purchase: 29000,
    Sales: 41000,
    amt: 2500,
  },
  {
    name: "Jul",
    Purchase: 53000,
    Sales: 50000,
    amt: 2100,
  },
  {
    name: "Aug",
    Purchase: 43000,
    Sales: 42000,
    amt: 2100,
  },
  {
    name: "May",
    Purchase: 45000,
    Sales: 44000,
    amt: 2100,
  },
  {
    name: "Jun",
    Purchase: 38000,
    Sales: 43000,
    amt: 2100,
  },
];

// const background2 = {
//   background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
// };


// const renderColorfulLegendText = (value: string, entry: any) => {
//   const { color } = entry;

//   return <span style={{ color }}>{value}</span>;
// };

const BarChartComponnet = () => {
  return (
    <ResponsiveContainer width="100%" aspect={1.5}>
      <BarChart barGap={5} barCategoryGap={-50} 
        width={100}
        height={100}
        data={data}
        margin={{
          top: 50,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid stroke="#D0D3D9" vertical={false} />
        <XAxis type="category"
          dataKey="name"
          tickLine={false}
          axisLine={{ stroke: "#f5f5f5" }}
          dy={5}
          padding={{left:50,right:30}}
          height={50}
        />
        <YAxis tickLine={false} type="number" dx={-10} axisLine={{ stroke: "#fff" }} width={10} />
        <Tooltip cursor={{fill:"#fff"}}/>
        <Legend 
          verticalAlign="bottom" 
          align="left" 
          height={10} 
          iconSize={15} 
          iconType="circle" 
          // formatter={renderColorfulLegendText}
          formatter={(value, entry, index) => <span className="text-grayish">{value}</span>}
          wrapperStyle={{left:126,fontSize: "12px"}}
          />

        <defs>
          <linearGradient
            id="colorUv"
            x1="0"
            x2="0"
            y1="0"
            y2="100%"
            spreadMethod="reflect"
          >
            <stop offset="0" stopColor="#79D0F1" />
            <stop offset="50%" stopColor="#74B0FA" />
            <stop offset="100%" stopColor="#817AF3" />
            {/* 817AF3,74B0FA,79D0F1 */}
          </linearGradient>

          <linearGradient id="colorSales" x1="0" x2="0" y1="0" y2="100%" spreadMethod="reflect" >
            <stop offset="0" stopColor="#57DA65" />
            <stop offset="50%" stopColor="#51CC5D" />
            <stop offset="100%" stopColor="#46A46C" />
            {/* 57DA65,51CC5D,46A46C */}
          </linearGradient>
        </defs>

        <Bar
          dataKey="Purchase"
          fill="url(#colorUv)"
          activeBar={<Rectangle fill="pink" stroke="blue" />}
          // background="#background2"
          radius={[50, 50, 0, 0]}
          barSize={10}
          legendType="circle"
          animationDuration={1300}
        />
        <Bar
          dataKey="Sales"
          fill="url(#colorSales)"
          activeBar={<Rectangle fill="gold" stroke="purple" />}
          radius={[50, 50, 0, 0]}
          barSize={10}
          legendType="circle"
          // label={{fill:"red",fontSize:20}}
          // name="hii"
          animationDuration={1300}
          // animationEasing="ease"
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponnet;
