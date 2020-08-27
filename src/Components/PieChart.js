import React from "react";
import Chart from "react-apexcharts";

export default function (props) {
  const shares = props.data.scarper.percentageShares;
  const filteredPercentages = shares.filter(share => share.percent !== "");
  const percentages = filteredPercentages.map((x) =>  parseInt(x.percent));
  const names = filteredPercentages.map((x, index) => x.name);
  console.log(props.data);
  const state = {
    series: percentages,
    options: {
      chart: {
        width: 380,
        type: "pie",
      },
      labels: names,
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };

  return (
    <div>
      <Chart
        options={state.options}
        series={state.series}
        type="pie"
        height={350}
      />
    </div>
  );
}
