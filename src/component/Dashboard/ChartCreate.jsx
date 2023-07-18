import Chart from "react-apexcharts";
import appConstants from "@core/constants";

const ChartCreate = ({
  chartTYpe,
  xaxisData,
  xaxisTitleColor,
  yaxisTitleColor,
  themeColor,
  chartWidth,
  chartOption,
  chartLabel,
  headerName,
}) => {
  const monthWise = appConstants.MONTHS_TEMPLATE;
  const monthName = monthWise.map((m) => m.name);
  const seriesData = monthName.map((m) => {
    let mo = m.toLowerCase();
    let obj = xaxisData.find((o) => {
      let find = o.name ? o.name.toLowerCase() : "";
      return find === mo;
    });
    if (typeof obj === "undefined") {
      return 0;
    } else {
      return parseInt(obj.hours_spent);
    }
  });
// console.log('xaxisData',xaxisData);
  const chartData = {
    options: {
      xaxis: {
        categories: monthName,
        title: {
          text: "Monthly Data",
          style: {
            color: xaxisTitleColor,
            fontWeight: 500,
            fontSize: "13px",
            fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
                  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
                  sans-serif`,
          },
        },
      },
      theme: {
        mode: "light",
        palette: "palette1",
        monochrome: {
          enabled: true,
          color: themeColor,
          shadeTo: "light",
          shadeIntensity: 0.85,
        },
      },
      yaxis: {
        // labels: {
        //   formatter: function (value) {
        //     return value + " H";
        //   }
        // },
        title: {
          text: "Hours",
          style: {
            color: yaxisTitleColor,
            fontWeight: 500,
            fontSize: "13px",
            fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
                  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
                  sans-serif`,
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
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      chart: {
        toolbar: {
          show: false,
        },
      },
    },
    series: [
      {
        name: "Total Hours",
        data: chartLabel ? chartLabel : seriesData,
      },
    ],
    chartOptions: {
      labels: chartOption,
    },
    legend: {
      horizontalAlign: "left",
      offsetX: 40,
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
  let chartAreaData;
  let productLabelName;
  if (chartTYpe === "area") {
    const labelName = xaxisData.map((n, i) => {
      return "P-" + (i + 1);
    });
    productLabelName = xaxisData.map((n, i) => {
      return n.root_value;
    });
    chartAreaData = {
      options: {
        type: "area",
        height: 390,
        stacked: true,
        xaxis: {
          categories: labelName,
        },
        // yaxis: [
        //   {
        //     axisTicks: {
        //       show: true
        //     },
        //     axisBorder: {
        //       show: true,
        //       color: "#008ffb",
        //     },
        //     labels: {
        //       style: {
        //         colors: "#008ffb",
        //         fontWeight:600
        //       }
        //     },
        //     title: {
        //       text: "Actual Hours",
        //       style: {
        //         color: "#008ffb",
        //         fontWeight:600
        //       }
        //     }
        //   },
        //   {
        //     opposite: true,
        //     axisTicks: {
        //       show: true
        //     },
        //     axisBorder: {
        //       show: true,
        //       color: "#00e396"
        //     },
        //     labels: {
        //       style: {
        //         colors: "#00e396",
        //         fontWeight:600
        //       }
        //     },
        //     title: {
        //       text: "Estimated Hours",
        //       style: {
        //         color: "#00e396",
        //         fontWeight:600
        //       }
        //     }
        //   }
        // ],
        tooltip: {
          shared: true,
          intersect: false,
          x: {
            show: false,
          },
        },
        legend: {
          horizontalAlign: "left",
          offsetX: 40,
        },
      },
      dataLabels: {
        enabled: true,
      },
      colors: ["#FF1654", "#247BA0"],
      series: [
        {
          name: "Actual Hours",
          data: [20, 29, 37, 36, 18, 45, 55],
        },
        {
          name: "Estimated Hours",
          data: [14, 20, 25, 28, 15, 40, 40],
        },
      ],
      stroke: {
        width: [4, 4],
      },
    };
  }

  return (
    <div className={`${"graphSheet__" + chartTYpe + "Chart"}`}>
      {chartTYpe === "area" && chartAreaData && productLabelName && (
        <>
          <Chart
            options={chartAreaData.options}
            series={chartAreaData.series}
            type={chartTYpe}
            width={chartWidth}
          />
          <ul className="productLabelName">
            {productLabelName.map((name, i) => {
              return (
                <li key={i}>
                  <span className="short-name">{"P-" + (i + 1) + ": "}</span>
                  {name}
                </li>
              );
            })}
          </ul>
        </>
      )}
      {chartTYpe !== "area" && (
        <Chart
          options={chartData.options}
          series={chartData.series}
          type={chartTYpe}
          width={chartWidth}
        />
      )}
      {/* <p className={`${'graphSheet__'+chartTYpe+'Chart--title'}`}>{headerName}</p> */}
    </div>
  );
};

export default ChartCreate;
