import { useEffect, useState, useRef } from "react";
import { PieChart, Pie, Cell, Sector } from "recharts";

const data = [
  { name: "A", value: 20 },
  { name: "B", value: 45 },
  { name: "C", value: 35 },
];

const COLORS = ["#0088FE", "#f7f7f7", "#FFBB28"];

const renderActiveShape = (props) => {
  const {
    cx,
    cy,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
  } = props;

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.value}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
    </g>
  );
};

function CustomActiveShapePieChart({ height, width }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  const [chartConfig, setChartConfig] = useState(null);
  const chartContainerRef = useRef(null);

  useEffect(() => {
    if (chartContainerRef) {
      const width = chartContainerRef.current.clientWidth;
      const height = width;

      if (width < 500) {
        setChartConfig({
          width,
          height: height / 1.5,
          cx: width / 2,
          cy: height / 2,
        });
      }
      if (width < 850 && width > 500) {
        setChartConfig({
          width,
          height: height / 2,
          cx: width / 2,
          cy: height / 2,
        });
      } else {
        setChartConfig({
          width,
          height: height,
          cx: width / 2,
          cy: height / 2,
        });
      }
    }
  }, []);

  return (
    <div ref={chartContainerRef}>
      <PieChart
        className="pai-container"
        width={chartConfig?.width}
        height={chartConfig?.height}
      >
        <Pie
          data={data}
          dataKey="value"
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          onMouseEnter={onPieEnter}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
}

export default CustomActiveShapePieChart;
