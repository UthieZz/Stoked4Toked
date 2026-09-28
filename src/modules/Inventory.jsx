import { useEffect } from "react";
import processor from "../processor/ProcessorService";

export default function Inventory() {
  useEffect(() => {
    const module = {
      name: "Inventory",
      version: "1.0.0",
      status: "ONLINE",
    };

    processor.registerModule(module);

    processor.setState("inventory", {
      status: "LIVE",
      assets: 27,
      totalWeight: 1487,
      inventoryValue: 52600,
      lowStockAlerts: 2,
      lastUpdated: new Date().toISOString(),
    });

    return () => {
      if (processor.unregisterModule) {
        processor.unregisterModule("Inventory");
      }
    };
  }, []);

  const inventory = processor.getState("inventory") || {};

  return (
    <div className="module-card">
      <h3>📦 Inventory</h3>

      <p>Status: {inventory.status || "OFFLINE"}</p>
      <p>Assets: {inventory.assets ?? 0}</p>
      <p>Total Weight: {inventory.totalWeight ?? 0} g</p>
      <p>Inventory Value: R{inventory.inventoryValue ?? 0}</p>
      <p>Low Stock Alerts: {inventory.lowStockAlerts ?? 0}</p>
    </div>
  );
}
