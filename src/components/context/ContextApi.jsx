import { createContext, useEffect, useState } from "react";

import LineChartBox from "../charts/LineChart";
import BarChartBox from "../charts/BarChart";
import AreaChartBox from "../charts/AreaChart";
import PieChartComponent from "../charts/PieChart";
import BoxImg from "../boxes/BoxImg";

const chartComponents = [
  // {
  //   id: "line",
  //   component: <LineChartBox />,
  //   width: 370,
  //   height: 300,
  //   name: "LineChart",
  // },
];

export const ContextProvider = createContext();

export default function ContextApi({ children }) {
  const [isHaveBox, setIsHaveBox] = useState([]);
  const [boxValue, setboxValue] = useState("");
  const [clickCounts, setClickCounts] = useState({});
  const [charts, setCharts] = useState(chartComponents);

  const imgComponent = {
    id: charts.length,
    component: <BoxImg />,
    width: 370,
    height: 300,
    name: `${clickCounts?.img} - Rasm`,
  };
  const barChartComp = {
    id: `${clickCounts?.bar}bar`,
    component: <BarChartBox />,
    width: 370,
    height: 300,
    name: `${clickCounts?.bar} - BarChart`,
  };
  const lineChartComp = {
    id: `${clickCounts?.line}line`,
    component: <LineChartBox />,
    width: 370,
    height: 300,
    name: `${clickCounts?.line} - Linechart`,
  };
  const areaChartComp = {
    id: `${clickCounts?.area}area`,
    component: <AreaChartBox />,
    width: 370,
    height: 300,
    name: `${clickCounts?.area} - Areachart`,
  };
  const pieChartComp = {
    id: `${clickCounts?.pie}pie`,
    component: <PieChartComponent />,
    width: 370,
    height: 300,
    name: `${clickCounts?.pie} - Piechart`,
  };
  console.log(charts);
  console.log(clickCounts);

  useEffect(() => {
    if (boxValue === "img" && !charts.some((chart) => chart.id === "img")) {
      setCharts((prevCharts) => [...prevCharts, imgComponent]);
    } else if (
      boxValue === "line" &&
      !charts.some((chart) => chart.id === "line")
    ) {
      setCharts((prevCharts) => [...prevCharts, lineChartComp]);
    } else if (
      boxValue === "bar" &&
      !charts.some((chart) => chart.id === "bar")
    ) {
      setCharts((prevCharts) => [...prevCharts, barChartComp]);
    } else if (
      boxValue === "pie" &&
      !charts.some((chart) => chart.id === "pie")
    ) {
      setCharts((prevCharts) => [...prevCharts, pieChartComp]);
    } else if (
      boxValue === "area" &&
      !charts.some((chart) => chart.id === "area")
    ) {
      setCharts((prevCharts) => [...prevCharts, areaChartComp]);
    }
  }, [boxValue, clickCounts]);

  return (
    <ContextProvider.Provider
      value={{
        isHaveBox,
        setIsHaveBox,
        boxValue,
        setboxValue,
        charts,
        setCharts,
        clickCounts,
        setClickCounts,
      }}
    >
      {children}
    </ContextProvider.Provider>
  );
}
