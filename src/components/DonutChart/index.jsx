import React from "react";

export default function DonutChart({ percentage }) {
  function getColor(percentage) {
    if (percentage <= 25) {
      return "#CF4421"
    } else if (percentage <= 50) {
      return "#CF7521"
    } else if (percentage <= 75) {
      return "#C0CF21"
    } else {
      return "#21CF32"
    }
  };

  function getDrawColor(percentage) {
    return 4 * Math.PI * percentage / 5
  };

  return (
    <div
      style={{
        margin: "1rem"
      }}
    >
      <svg
        width="4rem" height="4rem"
        viewBox="0 0 100 100"
      >
        <circle
          cx="50" cy="50" r="40"
          fill="none"
          stroke="white"
          strokeWidth="15"
        />
        <circle
          cx="50" cy="50" r="40"
          fill="none"
          stroke={getColor(percentage)}
          strokeWidth="15"
          strokeLinecap="round"
          strokeDasharray={getDrawColor(percentage)}
        />
        <text
          dominantBaseline="central"
          x="50" y="50"
          dx="0" dy="0"
          textAnchor="middle"
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            fill: "white"
          }}
        >
          {percentage}
        </text>
      </svg>
    </div>
  )
}
