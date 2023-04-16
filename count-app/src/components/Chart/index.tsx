import React from "react";
import "./Chart.scss";
import ChartBar from "./ChartBar";

export interface IPoint {
  id?: string;
  value: number;
  label: string;
}

const Chart: React.FC<{ dataPoints: IPoint[] }> = ({ dataPoints }) => {
  const dataPointValue = dataPoints.map((dataPoint) => dataPoint.value);

  const totalMaximum = Math.max(...dataPointValue);

  return (
    <div className="chart">
      {dataPoints.map((dataPoint: IPoint) => (
        <ChartBar
          key={dataPoint.id}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
