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
    console.log(percentage / 100 * 360)
    return percentage / 100 * 360
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
        <path
          d = "M 92.5 50 A 42.5 42.5 0 1 1 92.5 49.9999"
          fill="none"
          stroke="white"
          strokeWidth="15"
          strokeLinecap="round"
        />
        <path
          d = "M 92.5 50 A 42.5 42.5 0 1 1 92.5 49.9999"
          fill="none"
          stroke={getColor(percentage)}
          strokeWidth="15"
          strokeLinecap="round"
          strokeDasharray={getDrawColor(percentage) - 10}
          strokeDashoffset={370 - getDrawColor(percentage)}
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
