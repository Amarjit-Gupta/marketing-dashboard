import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, LabelList, Legend } from "recharts";

const CampaignCTRChart = ({ data }) => {

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
  
  return (
    <div className="bg-white p-5 rounded-xl border w-full min-w-0 flex flex-col shadow-sm hover:shadow-lg border-gray-200 transition-shadow duration-500">
      <h2 className="text-lg font-semibold mb-3">Campaign CTR</h2>
      <div className="w-full min-w-0  h-50 md:h-80 overflow-hidden">
        <ResponsiveContainer width="100%" height={chartHeight}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="title" />
            <YAxis unit="%" />
            <Tooltip formatter={(value) => `${value}%`} />
              <Legend />
            <Bar dataKey="ctr" fill="#82ca9d">
              <LabelList dataKey="ctr" position="top" formatter={(value) => `${value}%`} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CampaignCTRChart;
