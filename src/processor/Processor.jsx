import { useEffect, useState } from "react";
import ProcessorService from "./ProcessorService";
import StrainBrain from "../modules/StrainBrain";
import Inventory from "../modules/Inventory/Inventory";

function Processor() {
  const [modules, setModules] = useState([]);
  const [uptime, setUptime] = useState(0);
  const [stateCount, setStateCount] = useState(0);

  useEffect(() => {
    const refresh = () => {
      setModules(ProcessorService.getModules());
      setStateCount(ProcessorService.getStateCount());
    };

    refresh();

    ProcessorService.on("moduleRegistered", refresh);
    ProcessorService.on("stateChanged", refresh);

    const timer = setInterval(() => {
      setUptime(ProcessorService.getUptime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Processor</h2>
      <p>Central business intelligence engine</p>

      <div
        style={{
          marginTop: "20px",
          padding: "15px",
          border: "1px solid #444",
          borderRadius: "8px",
        }}
      >
        <h3>Kernel Status</h3>

        <p>🟢 ONLINE</p>
        <p>⏱ Uptime: {uptime}s</p>
        <p>🧩 Registered Modules: {modules.length}</p>
        <p>📊 Shared State Keys: {stateCount}</p>

        <h3>Registered Modules</h3>

        {modules.length === 0 ? (
          <p>No modules registered.</p>
        ) : (
          <ul>
            {modules.map((module) => (
              <li key={module}>✅ {module}</li>
            ))}
          </ul>
        )}
      </div>

      <StrainBrain />
      <Inventory />
    </div>
  );
}

export default Processor;
