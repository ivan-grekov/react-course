import React from "react";
import "./ChartBar.scss";
import { IPoint } from ".";

interface IChartBarProps extends IPoint {
  maxValue: number | null;
}

const ChartBar: React.FC<IChartBarProps> = ({ value, maxValue, label }) => {
  let barFillHight = "0%";
  if (maxValue && maxValue > 0) {
    barFillHight = Math.round((value / maxValue) * 100) + "%";
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: barFillHight }}></div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
};

export default ChartBar;
