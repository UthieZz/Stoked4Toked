import { useEffect, useState } from "react";
import Processor from "../processor/ProcessorService";

function StrainBrain() {
  const [strains] = useState([
    "Resource bottlenecks in cash flow",
    "Active project delivery delays",
    "Opportunity capture overhead",
  ]);

  useEffect(() => {
    Processor.register("StrainBrain", {
      analyse() {
        return strains;
      },
    });

    Processor.setState("systemStatus", "ONLINE");
    Processor.setState("strainCount", strains.length);
    Processor.setState("lastAnalysis", new Date().toLocaleTimeString());
  }, [strains]);

  return (
    <div
      style={{
        marginTop: "10px",
        padding: "10px",
        border: "1px dashed #777",
      }}
    >
      <h4>Strain Brain Analytics</h4>

      <p><strong>Status:</strong> ONLINE</p>
      <p><strong>Active Strains:</strong> {strains.length}</p>

      <ul>
        {strains.map((strain, index) => (
          <li key={index}>{strain}</li>
        ))}
      </ul>
    </div>
  );
}

export default StrainBrain;
