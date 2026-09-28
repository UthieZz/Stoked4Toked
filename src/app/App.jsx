import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Dashboard from "../components/Dashboard";
import Processor from "../processor/Processor";
import processor from "../processor/ProcessorService";
import inventoryService from "../services/InventoryService";

function App() {
  const [inventory, setInventory] = useState(
    processor.getState("inventory") || {}
  );

  useEffect(() => {
    const refresh = () => {
      console.log("[App] Refreshing inventory...");
      setInventory(processor.getState("inventory") || {});
    };

    refresh();

    processor.on("stateChanged", ({ key }) => {
      if (key === "inventory") {
        refresh();
      }
    });
  }, []);

  const addTestAsset = () => {
    inventoryService.addAsset({
      name: "Gelato",
      weight: 250,
      value: 9500,
      lowStock: false,
    });

    const totals = inventoryService.getTotals();

    processor.setState("inventory", totals);
  };

  return (
    <Layout>
      <Dashboard />

      <button
        onClick={addTestAsset}
        style={{
          padding: "10px 16px",
          marginBottom: "20px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        ➕ Add Test Asset
      </button>

      <h2>📦 Inventory Assets</h2>

      {inventory.items?.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid #555",
            borderRadius: "8px",
            padding: "12px",
            marginBottom: "12px",
            background: "#1f1f1f",
            color: "#fff",
          }}
        >
          <h3>{item.name}</h3>
          <p>⚖️ Weight: {item.weight} g</p>
          <p>💰 Value: R{item.value}</p>
          <p>{item.lowStock ? "🟡 Low Stock" : "🟢 Healthy"}</p>
        </div>
      ))}

      <Processor />
    </Layout>
  );
}

export default App;
