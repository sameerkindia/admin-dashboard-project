import React, { useState } from "react";
import { BarChart, Bar, XAxis, Tooltip, Legend, Cell } from "recharts";

const data = [
  { month: "January", value: 10 },
  { month: "February", value: 20 },
  { month: "March", value: 30 },
  { month: "April", value: 25 },
  { month: "May", value: 45 },
  { month: "June", value: 15 },
  { month: "July", value: 66 },
  { month: "August", value: 90 },
  { month: "September", value: 51 },
  { month: "October", value: 53 },
  { month: "November", value: 20 },
  { month: "December", value: 30 },
];

const CustomizedBarChart = ({ height, width }) => {
  const [barIndex, setBarIndex] = useState(7);

  return (
    <BarChart width={width} height={height} data={data}>
      <XAxis dataKey="month" />
      <Bar dataKey="value" radius={[10, 10, 0, 0]} fill="#ccc">
        {data.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            onClick={() => setBarIndex(index)}
            fill={index === barIndex ? "blue" : "#ccc"}
          />
        ))}
      </Bar>
      <Tooltip />
      <Legend />
    </BarChart>
  );
};

export default CustomizedBarChart;
