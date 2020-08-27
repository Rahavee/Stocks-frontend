import React from "react";
import Chart from "react-apexcharts";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  graph: {
    width: "`100%-20`",
    height: 400,
    backgroundColor: "white",
    margin: "10px 10px 0px 10px",
    borderRadius: 10,
    padding: "5px 0px 0px 10px",
  },
});

export default function Graph(props) {
  const classes = useStyles();
  let dates = props.data["closing price"].content;
  const state = {
    options: {
      chart: {
        type: "area",
        stacked: false,
        height: 350,
        zoom: {
          type: "x",
          enabled: true,
          autoScaleYaxis: true,
        },
        toolbar: {
          autoSelected: "zoom",
        },
      },
      dataLabels: {
        enabled: false,
      },
      markers: {
        size: 0,
      },

      yaxis: {
        labels: {
          formatter: function (val) {
            return val.toFixed(0);
          },
        },
        title: {
          text: "Price",
        },
      },
      xaxis: {
        type: "datetime",
      },
      theme: {
        monochrome: {
          enabled: true,
          color: "#30C2BC",
          shadeTo: "light",
          shadeIntensity: 1,
        },
      },
    },

    series: [
      {
        name: props.data["closing price"].stock,
        data: dates,
      },
    ],
  };
  return (
    <div className={classes.graph}>
      <Chart
        options={state.options}
        series={state.series}
        type="area"
        height={350}
      />
    </div>
  );
}
