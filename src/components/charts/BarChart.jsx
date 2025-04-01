import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "12 Oct", value: 25000 },
  { name: "19 Oct", value: 27000 },
  { name: "26 Oct", value: 24000 },
  { name: "03 Nov", value: 28170 },
  { name: "10 Nov", value: 26000 },
  { name: "17 Nov", value: 25500 },
  { name: "24 Nov", value: 24500 },
];

const CustomBarShape = (props) => {
  const { x, y, width, height, fill } = props;
  return (
    <g>
      {/* Shadow uchun birinchi bar */}
      <rect
        x={x + 0} // Soyani o'ngga va pastga biroz suramiz
        y={y + 4}
        width={width}
        height={height}
        fill="rgba(0, 0, 0, 0.4)" // Soyaning rangi va tarqatilishi
        rx={5} // Yumuq burchaklar
        ry={5}
        style={{ filter: "blur(4px)" }}
      />
      {/* Asl bar */}
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        stdDeviation="4"
        fill={fill}
        rx={5} // Yumuq burchaklar
        ry={5}
      />
    </g>
  );
};

const colors = ["#51459E", "#84E8F4"];
export default function BarChartBox() {
  return (
    <div className="">
      <ResponsiveContainer width="100%" minHeight={250}>
        <BarChart
          data={data}
          margin={{ top: 10, right: 10, left: 10, bottom: -0 }}
        >
          <XAxis
            dataKey="name"
            tick={{ fill: "#8884d8" }}
            axisLine={false}
            tickLine={false}
          />
          {/* <CartesianGrid /> */}
          <Tooltip cursor={{ fill: "#4ecfc231" }} />
          <Bar
            dataKey="value"
            barSize={25}
            radius={[5, 5, 5, 5]}
            fill={colors[0]}
            shape={<CustomBarShape />}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
