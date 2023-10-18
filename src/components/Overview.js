import { useEffect, useRef, useState } from "react";
import CustomizedBarChart from "./BarChart";
import DonutChart from "./DonutChart";

function Overview() {
  const containerWidth = useRef(null);
  const overviewBarRef = useRef(null);
  const [barChartConfig, setBarChartConfig] = useState(null);

  useEffect(() => {
    if (overviewBarRef) {
      const width = overviewBarRef.current.clientWidth;
      setBarChartConfig({
        width,
        height: width / 2,
      });
    }
  }, []);

  return (
    <div ref={containerWidth} className="overview-container">
      <div className="overview-bar-section">
        <div ref={overviewBarRef}>
          <div className="bar-text">
            <div>
              <p>Overview</p>
              <span>Monthly Earning</span>
            </div>
            <select>
              <option>Quarterly</option>
            </select>
          </div>
          <div className="bar-chart">
            <CustomizedBarChart
              height={barChartConfig?.height}
              width={barChartConfig?.width}
            />
          </div>
        </div>
      </div>
      <div className="overview-pai-section">
        <div>
          <div className="pai-text">
            <p>Customer</p>
            <span>Customer that buy products</span>
          </div>
          <div className="pai-div">
            <DonutChart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
