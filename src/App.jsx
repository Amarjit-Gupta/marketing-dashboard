import AlertsPanel from "./components/AlertsPanel";
import BarChartComponent from "./components/BarChartComponent";
import CampaignCTRChart from "./components/CampaignCTRChart";
import DeviceSplit from "./components/DeviceSplit";
import KPIMetricCard from "./components/KPImetricCard";
import LineChartComponent from "./components/LineChartComponent";
import Navbar from "./components/Navbar";
import SearchBar from "./components/Searchbar";
import SnapshotSection from "./components/SnapshotSection";
import data from './data.json';

const App = () => {

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="px-6 py-4">
        <SearchBar />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 my-6">
          {data.kpis.slice(0, 6).map((kpi, index) => (<KPIMetricCard key={index} label={kpi.label} value={kpi.value} trend={kpi.trend} />))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-6 overflow-hidden py-3">
          <LineChartComponent sessions={data.sessions} leads={data.leads} />
          <BarChartComponent data={data.channels} />
          <DeviceSplit data={data.devices} />
          <CampaignCTRChart data={data.campaigns} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <SnapshotSection title={"Top Campaigns list"}>
            <div className="space-y-3">
              {data.campaigns.map((c, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-500 hover:-translate-y-1">
                  <span className="text-gray-700 font-medium">{c.title}</span>
                  <span className="text-blue-600 font-semibold">{c.ctr}%</span>
                </div>
              ))}
            </div>
          </SnapshotSection>

          <SnapshotSection title={"Recent Activities"}>
            <div className="space-y-2">
              {data.activities.map((item, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-3">
                    <div className="w-1 h-8 bg-blue-500 rounded-bl-xl rounded-t-xl"></div>
                    <p className="text-sm font-medium text-gray-800">{item.text}</p>
                  </div>
                  <p className="font-semibold text-blue-500 text-[15px]">
                    {new Date(item.time).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              ))}
            </div>
          </SnapshotSection>

          <SnapshotSection title={"Alerts panel"}>
            <AlertsPanel alerts={data.alerts} />
          </SnapshotSection>

        </div>
      </div>
    </div>
  );
}

export default App;
