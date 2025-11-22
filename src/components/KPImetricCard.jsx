import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowTrendDown } from "react-icons/fa6";
const KPIMetricCard = ({ label, value, trend }) => {

  const isPositive = trend.includes("+");

  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
      <p className="text-gray-400 text-sm font-medium">{label}</p>
      <h2 className="text-2xl font-bold mt-1 text-gray-800">{value}</h2>
      <div className="flex items-center gap-2 mt-3">
        <span className={`flex items-center gap-1 font-semibold bg-opacity-20 px-2 py-1 rounded-full ${isPositive ? "text-green-600 bg-green-100" : "text-red-600 bg-red-100"}`}>
          {isPositive ? <FaArrowTrendUp /> : <FaArrowTrendDown />} {trend}
        </span>
      </div>
    </div>
  );
};

export default KPIMetricCard;
