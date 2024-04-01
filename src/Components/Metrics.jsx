import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import Layout from "./Layout";

const ChartComponent = () => {
  const data = [
    {
      name: "CPU Usage",
      graphLines: [
        {
          name: "Limits",
          values: [
            {
              timestamp: 1711571400000,
              value: 85.86,
            },
            {
              timestamp: 1711573200000,
              value: 94.18,
            },
            {
              timestamp: 1711575000000,
              value: 92.94,
            },
          ],
        },
        {
          name: "Requested",
          values: [
            {
              timestamp: 1711571400000,
              value: 65.28999999999999,
            },
            {
              timestamp: 1711573200000,
              value: 61,
            },
            {
              timestamp: 1711575000000,
              value: 68.09,
            },
          ],
        },
        {
          name: "Used",
          values: [
            {
              timestamp: 1711571400000,
              value: 35.620000000000005,
            },
            {
              timestamp: 1711573200000,
              value: 49.53,
            },
            {
              timestamp: 1711575000000,
              value: 23.14,
            },
          ],
        },
      ],
    },
    {
      name: "Memory Usage",
      graphLines: [
        {
          name: "Limits",
          values: [
            {
              timestamp: 1711571400000,
              value: 26914.010000000002,
            },
            {
              timestamp: 1711573200000,
              value: 28136.940000000002,
            },
            {
              timestamp: 1711575000000,
              value: 29381.63,
            },
          ],
        },
      ],
    },
  ];
  // Extracting CPU and Memory data
  const cpuData = data.find(
    (item) => item.name === "CPU Usage"
  );
  const memoryData = data.find(
    (item) => item.name === "Memory Usage"
  );

  // CPU usage chart data
  const cpuChartData = {
    labels: cpuData.graphLines[0].values.map((entry) =>
      new Date(entry.timestamp).toISOString()
    ),
    datasets: [
      {
        label: "Limits",
        data: cpuData.graphLines[0].values.map(
          (entry) => entry.value
        ),
        borderColor: "red",
        fill: false,
      },
      {
        label: "Requested",
        data: cpuData.graphLines[1].values.map(
          (entry) => entry.value
        ),
        borderColor: "blue",
        fill: false,
      },
      {
        label: "Used",
        data: cpuData.graphLines[2].values.map(
          (entry) => entry.value
        ),
        borderColor: "green",
        fill: false,
      },
    ],
  };

  // Memory usage chart data
  const memoryChartData = {
    labels: memoryData.graphLines[0].values.map((entry) =>
      new Date(entry.timestamp).toISOString()
    ),
    datasets: [
      {
        label: "Limits",
        data: memoryData.graphLines[0].values.map(
          (entry) => entry.value
        ),
        borderColor: "purple",
        fill: false,
      },
    ],
  };

  return (
    <Layout title={"Metrics"}>
      <div>
        <h2>CPU Usage</h2>
        <Line data={cpuChartData} />
        <h2>Memory Usage</h2>
        <Line data={memoryChartData} />
      </div>
    </Layout>
  );
};

export default ChartComponent;
