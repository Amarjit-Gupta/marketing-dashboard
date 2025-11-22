import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

const DeviceSplit = ({ data }) => {

  const [chartHeight, setChartHeight] = useState(300);
  
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth >= 768) {
          setChartHeight(320);
        } else if (window.innerWidth <= 320) {
          setChartHeight(200);
        } else {
          setChartHeight(250);
        }
      };
  
      handleResize();
      window.addEventListener("resize", handleResize);
  
      return () => window.removeEventListener("resize", handleResize);
    }, []);

  const total = data.reduce((sum, device) => sum + device.value, 0);

  const dataWithPercentage = data.map(device => ({
    ...device,
    percentage: ((device.value / total) * 100).toFixed(1)
  }));

  return (
    <div className="bg-white p-5 rounded-xl border w-full min-w-0 flex flex-col shadow-sm hover:shadow-lg border-gray-200 transition-shadow duration-500">
      <h2 className="text-lg font-semibold mb-3">Device Split</h2>
      <div className="w-full min-w-0 h-50 md:h-80 overflow-hidden">
        <ResponsiveContainer width="100%" height={chartHeight}>
          <PieChart>
            <Pie data={dataWithPercentage} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius="80%" innerRadius="40%" paddingAngle={3} label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}>
              {dataWithPercentage.map((v, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip formatter={(value, name, props) => `${value} (${props.payload.percentage}%)`} />
            <Legend verticalAlign="bottom" height={36} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DeviceSplit;
