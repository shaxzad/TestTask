import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart } from "react-google-charts";

export const ChartBox = ({ countryData }) => {
  const [chartValue, setChartValue] = useState([]);

  const countYear = countryData?.data?.populationCounts?.map(
    (item) => item.year
  );
  const countValue = countryData?.data?.populationCounts?.map(
    (item) => item.value
  );

  const data = {
    labels: countYear,
    datasets: [
      {
        fill: true,
        label: countryData?.data?.country,
        data: countValue,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "#1f7a25",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: countryData?.msg,
      },
    },
  };

  const googleOption = {
    title: countryData.msg,
    hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
    vAxis: { minValue: 0 },
    chartArea: { width: "50%", height: "70%" },
  };

  useEffect(() => {
    if (countryData?.data?.populationCounts) {
      const resdata = countryData?.data?.populationCounts.map((e) => [
        e.year,
        e.value,
      ]);
      const chartData = [["Year", "population"], ...resdata];
      setChartValue(chartData);
    }
  }, [countryData]);

  return (
    <div className="charts">
      <h2>React-chartjs-2 </h2>
      <Line data={data} options={options} />
      <div className="google-charts">
        <h2> Google Chart</h2>
        <Chart
          chartType="AreaChart"
          width="100%"
          height="400px"
          data={chartValue || []}
          options={googleOption}
        />
      </div>
    </div>
  );
};
