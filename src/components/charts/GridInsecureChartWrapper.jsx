import React, { useRef, useState, useEffect } from 'react';
import GridInsecureChart from './GridInsecureChart';

const ChartWrapper = ({ steps, direction }) => {
  const [chart, setChart] = useState(null);
  const tooltipRef = React.useRef(null);
  const svgRef = React.useRef(null);

  useEffect(() => {
    if (!chart) {
      setChart(new GridInsecureChart(svgRef.current, steps, direction));
    }
    // skip the loading state, when data is still a pending promise
    else if (chart.intention) {
      chart.update(steps, direction);
    }
  }, [chart, steps, direction]);

  return (
    <>
      <div className="chart-container">
        <p>Food Insecure Group</p>

        <div className="axis-container">
          <small>0</small>
          <small>100</small>
          <small>200</small>
          <small>300</small>
          <small>400</small>
        </div>

        <div
          id="tooltip-grid"
          className="tooltip hidden"
          ref={tooltipRef}
        ></div>

        <svg className="grid-chart chart-area" ref={svgRef}></svg>
      </div>
    </>
  );
};

export default ChartWrapper;
