import AreaChartBox from "./charts/AreaChart";
import BarChartBox from "./charts/BarChart";
import LineChartBox from "./charts/LineChart";
import PieChartComponent from "./charts/PieChart";

export const chartComponents = [
  { id: "line", component: <LineChartBox />, width: 400, height: 300 },
  { id: "bar", component: <BarChartBox />, width: 400, height: 300 },
  { id: "area", component: <AreaChartBox />, width: 400, height: 300 },
  { id: "pie", component: <PieChartComponent />, width: 400, height: 300 },
];
