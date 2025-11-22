import { FaExclamation } from "react-icons/fa6";
import { FaExclamationTriangle } from "react-icons/fa";
import { MdInfoOutline } from "react-icons/md";

const AlertsPanel = ({ alerts }) => {

  return (
    <div className="space-y-2">
      {alerts?.map((item, i) => (
        <div key={i} className={`flex items-center justify-between p-3 rounded-lg border shadow-sm transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md mt-4 ${item.type === "critical"? "bg-red-50 border-red-400 text-red-700": item.type === "warning"? "bg-yellow-50 border-yellow-400 text-yellow-700": "bg-blue-50 border-blue-400 text-blue-700"}`}>
          <div className="flex items-center gap-3">
            <span className="text-2xl">
              {item.type === "critical"?<FaExclamation className="text-red-500" />:item.type === "warning"?<FaExclamationTriangle className="text-yellow-600" />:<MdInfoOutline className="text-blue-700" />}
            </span>
            <p className="text-sm font-medium">{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AlertsPanel;


