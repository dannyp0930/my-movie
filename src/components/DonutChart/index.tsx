import React from "react";

export default function DonutChart({ percentage }: { percentage: number }) {
  function getColor(percentage: number) {
    if (percentage < 40) {
      return "#DB2360"
    } else if (percentage < 70) {
      return "#D2D531"
    } else {
      return "#21D07A"
    }
  };

  function getSubColor(percentage: number) {
    if (percentage < 40) {
      return "#571435"
    } else if (percentage < 70) {
      return "#423D0F"
    } else {
      return "#1C3E28"
    }
  };

  function getDraw(percentage: number) {
    const degree = Math.PI * percentage / 50;
    const x = 50 + 40 * Math.sin(degree);
    const y = 50 - 40 * Math.cos(degree);
    return `0 ${(degree > Math.PI ? 1 : 0)} 1 ${x} ${y}`
  };

  return (
    <div style={{ margin: "1rem" }}
    >
      <svg
        width="4rem" height="4rem"
        viewBox="0 0 100 100"
      >
        <circle
          cx="50" cy="50" r="50"
          fill="#081C22"
        />
        <circle
          cx="50" cy="50" r="40"
          fill="none"
          stroke={getSubColor(percentage)}
          strokeWidth="10"
        />
        <path 
          d={`M 50 10 A 40 40 ${getDraw(percentage)}`}
          fill="none"
          stroke={getColor(percentage)}
          strokeWidth="10"
          strokeLinecap="round"
          strokeDashoffset={100}
        />
        <text
          x="50" y="50"
          dx="0" dy="0"
          textAnchor="middle"
          fontWeight="bold"
          fill="white"
        >
          <tspan fontSize="2rem" dominantBaseline="central">{percentage}</tspan>
          <tspan>%</tspan>
        </text>
      </svg>
    </div>
  );
};
