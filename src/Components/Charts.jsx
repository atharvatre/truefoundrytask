import React, { useState } from "react";
// import Chart from "chart.js/auto"; // Importing the Chart.js library

// import { Line } from "react-chartjs-2";
import ReactApexChart from "react-apexcharts";
import Layout from "./Layout";
const Charts = ({ dataPoints, dataTs }) => {
  //console.log(graphData);
  // console.log(lineName);
  const startTs = Date.now() - 5 * 60 * 1000;
  const endTs = Date.now();
  const limit = 180;
  var startDT = startTs;
  var d = new Date(startDT);
  var ds = d.toLocaleString();
  //alert(ds);
  //console.log(ds);
  var endDT = endTs;
  var e = new Date(endDT);
  var es = e.toLocaleString();
  //console.log(es);

  const cpuData = {
    series: [
      {
        name: "Used",
        data: dataPoints["CPU Usage"][0],
        // data: [28, 29, 33, 36, 32, 32, 33],
      },
      {
        name: "requested",
        // data: [28, 29, 33, 36, 32, 32, 33],
        data: dataPoints["CPU Usage"][1],
      },
      {
        name: "limit",
        data: dataPoints["CPU Usage"][2],
        // data: [28, 29, 33, 36, 32, 32, 33],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        dropShadow: {
          enabled: true,
          color: "#000",
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2,
        },
        toolbar: {
          show: false,
        },
      },
      colors: ["#DC2626", "#2563EB", "#059669"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      title: {
        text: "CPU Usage",
        align: "left",
      },
      grid: {
        borderColor: "#e7e7e7",
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      markers: {
        size: 1,
      },
      xaxis: {
        categories: dataTs["CPU Usage"][0],
        // categories: ["a", "b", "c"],

        title: {
          text: "Timestamp",
        },
      },
      yaxis: {
        title: {
          text: "value",
        },
        // min: 0,
        // max: 100,
        min: Math.min(...dataPoints["CPU Usage"][2]),
        max: Math.max(...dataPoints["CPU Usage"][0]),
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        floating: true,
        offsetY: -25,
        offsetX: -5,
      },
    },
  };
  const memoryUsage = {
    series: [
      {
        name: "Used",
        data: dataPoints["Memory Usage"][0],
        // data: [10, 2, 4, 5, 6, 7, 8],
      },
      {
        name: "Requested",
        data: dataPoints["Memory Usage"][1],
        // data: [10, 2, 4, 5, 6, 7, 8],
      },
      {
        name: "Limits",
        data: dataPoints["Memory Usage"][2],
        // data: [10, 2, 4, 5, 6, 7, 8],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        dropShadow: {
          enabled: true,
          color: "#000",
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2,
        },
        toolbar: {
          show: false,
        },
      },
      colors: ["#DC2626", "#2563EB", "#059669"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      title: {
        text: "Memory Usage",
        align: "left",
      },
      grid: {
        borderColor: "#e7e7e7",
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      markers: {
        size: 1,
      },
      xaxis: {
        categories: dataTs["Memory Usage"][0],
        // categories: ["a", "b", "c"],
        title: {
          text: "Timestamp",
        },
      },
      yaxis: {
        title: {
          text: "value",
        },
        min: Math.min(...dataPoints["Memory Usage"][2]),
        max: Math.max(...dataPoints["Memory Usage"][0]),
        // min: 0,
        // max: 100,
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        floating: true,
        offsetY: -25,
        offsetX: -5,
      },
    },
  };
  const networkUsage = {
    series: [
      {
        name: "Used",
        // data: [28, 29, 33, 36, 32, 32, 33],
        data: dataPoints["Network Usage"][0],
      },
      {
        name: "Requested",
        // data: [12, 11, 14, 18, 17, 13, 13],
        data: dataPoints["Network Usage"][1],
      },
      {
        name: "Limits",
        // data: [10, 13, 17, 15, 9, 8, 20],
        data: dataPoints["Network Usage"][2],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        dropShadow: {
          enabled: true,
          color: "#000",
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2,
        },
        toolbar: {
          show: false,
        },
      },
      colors: ["#DC2626", "#2563EB", "#059669"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      title: {
        text: "Network Usage",
        align: "left",
      },
      grid: {
        borderColor: "#e7e7e7",
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      markers: {
        size: 1,
      },
      xaxis: {
        // catgories: ["A", "B"],

        categories: dataTs["Network Usage"][0],
        title: {
          text: "Timestamp",
        },
      },
      yaxis: {
        title: {
          text: "value",
        },
        min: Math.min(...dataPoints["Network Usage"][2]),
        max: Math.max(...dataPoints["Network Usage"][0]),
        // min: 0,
        // max: 100,
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        floating: true,
        offsetY: -25,
        offsetX: -5,
      },
    },
  };
  const DiskIOPS = {
    series: [
      {
        name: "Read",
        // data: [12, 11, 14, 18, 17, 13, 13],
        data: dataPoints["Disk IOPS"][0],
      },
      {
        name: "Write",
        // data: [10, 13, 17, 15, 9, 8, 20],
        data: dataPoints["Disk IOPS"][1],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        dropShadow: {
          enabled: true,
          color: "#000",
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2,
        },
        toolbar: {
          show: false,
        },
      },
      colors: ["#2563EB", "#DC2626"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      title: {
        text: "Disk IOPS",
        align: "left",
      },
      grid: {
        borderColor: "#e7e7e7",
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      markers: {
        size: 1,
      },
      xaxis: {
        // catgories: ["A", "B"],

        categories: dataTs["Disk IOPS"][0],
        title: {
          text: "Timestamp",
        },
      },
      yaxis: {
        title: {
          text: "value",
        },
        min: Math.min(...dataPoints["Disk IOPS"][1]),
        max: Math.max(...dataPoints["Disk IOPS"][0]),
        // min: 5,
        // max: 40,
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        floating: true,
        offsetY: -25,
        offsetX: -5,
      },
    },
  };
  return (
    <Layout title={"Metrics"}>
      <div className=" m-2 mt-3 rounded-md  border border-[#CEE0F8]  ">
        <div className="flex bg-white mt-2 m-4 ">
          <h1 className="text-xl font-bold mr-2 ">
            Metrics
          </h1>
          <h4 className="p-1">
            {ds} → {es}
          </h4>
        </div>
        <hr className="text-[#CEE0F8]" />
        <div className="grid grid-flow-row grid-row-4 gap-4  rounded-t-none rounded-md p-2 border-slate-400 bg-[#CEE0F8] ">
          <div className="flex justify-around">
            <div className="bg-white rounded-md border border-md border-[#CEE0F8] w-590 p-2">
              <ReactApexChart
                className=""
                options={cpuData.options}
                series={cpuData.series}
              />
            </div>
            <div className="bg-white rounded-md border border-md border-[#CEE0F8] w-590 p-2">
              <ReactApexChart
                className=""
                options={memoryUsage.options}
                series={memoryUsage.series}
              />
            </div>
          </div>

          <div className="flex justify-around">
            <div className="bg-white rounded-md border border-md border-[#CEE0F8] w-590 p-2">
              <ReactApexChart
                className=""
                options={networkUsage.options}
                series={networkUsage.series}
              />
            </div>
            <div className="bg-white rounded-md border border-md border-[#CEE0F8] w-590 p-2">
              <ReactApexChart
                className=""
                options={DiskIOPS.options}
                series={DiskIOPS.series}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Charts;
