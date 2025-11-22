import { useEffect, useState } from "react";
import {LineChart,Line,XAxis,YAxis,Tooltip,CartesianGrid,ResponsiveContainer, Legend} from "recharts";

const LineChartComponent = ({ sessions, leads }) => {

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

  const data = sessions.map((val, i) => ({
    name: `Day ${i + 1}`,
    sessions: val,
    leads: leads[i],
  }));

  return (
    <div className="bg-white p-5 rounded-xl border w-full min-w-0 flex flex-col shadow-sm hover:shadow-lg border-gray-200 transition-shadow duration-500">
      <h2 className="text-lg font-semibold mb-3">Sessions vs Leads</h2>
      <div className="w-full min-w-0 h-60 md:h-80 overflow-hidden">
        <ResponsiveContainer width="100%" height={chartHeight} >
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="sessions" stroke="blue" />
            <Line type="monotone" dataKey="leads" stroke="green" />
            <Legend />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
export default LineChartComponent;
