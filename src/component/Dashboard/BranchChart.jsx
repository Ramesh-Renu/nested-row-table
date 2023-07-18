import PieDonutChart from "./PieDonutChart";
import { Card, CardGroup } from "react-bootstrap";

const BranchChart = ({ showData, name, grpKey }) => {
  return (
    <div className="col-xl-4 col-md-12">
      <div className="card">
        <Card.Body>
          <PieDonutChart
            datasBranch={showData}
            nameBranch={name}
            colorValue={"palette8"}
            chartType={grpKey == "tool" ? "pie" : "donut"}
            grpKey={grpKey}
          />
        </Card.Body>
      </div>
    </div>
  );
};

export default BranchChart;
