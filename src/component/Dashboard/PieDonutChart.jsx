import React, { Fragment } from "react";
import Chart from "react-apexcharts";

const PieDonutChart = ({
  datasBranch,
  nameBranch,
  colorValue,
  chartType,
  grpKey,
}) => {

  const chartOption = datasBranch.map((n) => n.root_value);
  const chartOptiondata = datasBranch.map((n) => n.months);
  const chartLabel = chartOptiondata.map((mn) => {
    let modata = 0;
    mn.forEach((element) => {
      let val = parseInt(element.hours_spent);
      modata = modata + val;
    });
    return modata;
  });

  const chartData = {
    series: chartLabel,
    options: {
      chart: {
        width: 380,
        type: chartType,
      },
      legend: {
        position: grpKey == "tool" ? "bottom" : "right",
      },
      fill: {
        type: chartType == "donut" ? "gradient" : "",
      },
      labels: chartOption,
      responsive: [
        {
          breakpoint: 1300,
          options: {
            chart: {
              width: 350,
            },
            legend: {
              position: "bottom",
            },
          },
        },
        {
          breakpoint: 1050,
          options: {
            chart: {
              width: 400,
            },
            legend: {
              position: "right",
            },
          },
        },
        {
          breakpoint: 850,
          options: {
            chart: {
              width: 500,
            },
            legend: {
              position: "right",
            },
          },
        },
        {
          breakpoint: 700,
          options: {
            chart: {
              width: 500,
            },
            legend: {
              position: "right",
            },
          },
        },
        {
          breakpoint: 600,
          options: {
            chart: {
              width: 400,
            },
            legend: {
              position: "bottom",
            },
          },
        },
        {
          breakpoint: 550,
          options: {
            chart: {
              width: 320,
            },
            legend: {
              position: "bottom",
            },
          },
        },
        {
          breakpoint: 400,
          options: {
            chart: {
              width: 300,
            },
            legend: {
              position: "bottom",
            },
          },
        },
        {
          breakpoint: 380,
          options: {
            chart: {
              width: 260,
            },
            legend: {
              position: "bottom",
            },
          },
        },
        {
          breakpoint: 300,
          options: {
            chart: {
              width: 220,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
      theme: {
        mode: "light",
        palette: colorValue,
        // monochrome: {
        //   enabled: true,
        //   color: chartColor.palette2.color3,
        //   shadeTo: 'light',
        //   shadeIntensity: 0.85
        // }
      },
    },

    animations: {
      enabled: true,
      easing: "easeinout",
      speed: 800,
      animateGradually: {
        enabled: true,
        delay: 150,
      },
      dynamicAnimation: {
        enabled: true,
        speed: 350,
      },
    },
  };

  return (
    <Fragment>
      <p className={`${"graphSheet__donutChart--title"}`}>
        {nameBranch}{" "}
        <span
          className={
            chartType === "pie" && grpKey == "tool"
              ? "icon-product-c icon-right"
              : "icon-branch-c icon-right"
          }
        ></span>
      </p>
      <div className={`${"graphSheet__donutChart"}`}>
        <Chart
          options={chartData.options}
          series={chartData.series}
          type={chartType}
          width={"380"}
        />
      </div>
    </Fragment>
  );
};

export default PieDonutChart;
