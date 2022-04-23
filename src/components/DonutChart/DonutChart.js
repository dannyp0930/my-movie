import { PieChart } from "react-minimal-pie-chart";

export default function DonutChart({ percentage }) {
  function color(percentage) {
    if (percentage <= 25) {
      return "#CF4421"
    } else if (percentage <= 50) {
      return "#CF7521"
    } else if (percentage <= 75) {
      return "#C0CF21"
    } else {
      return "#21CF32"
    }
  }

  const data = [{
    value: `${percentage}`,
    color: color(percentage),
    name: "name1",
  }]
  return (
    <PieChart
      style={{
        width: "10%",
        margin: "1rem"
      }}
      data={data}
      reveal={percentage}
      lineWidth={30}
      background="white"
      lengthAngle={360}
      rounded
      animate
      label={({ dataEntry }) => dataEntry.value}
      labelStyle={{
        fontSize: "2rem",
        fontWeight: "bold",
        fill: "white",
      }}
      labelPosition={0}
    />
  )
}
