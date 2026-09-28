import { useEffect } from "react";
import processor from "../../processor/ProcessorService";
import inventoryService from "../../services/InventoryService";

export default function Inventory() {
  useEffect(() => {
    const module = {
      init() {
        processor.setState("inventory", inventoryService.getTotals());

        console.log("[Inventory] Engine initialized");
      },
    };

    processor.register("Inventory", module);

    module.init();
  }, []);

  return null;
}
