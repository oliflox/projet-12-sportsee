import {
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
    {
        name: "L",
        uv: 60,
    },
    {
        name: "M",
        uv: 45,
    },
    {
        name: "M",
        uv: 30,
    },
    {
        name: "J",
        uv: 50,
    },
    {
        name: "V",
        uv: 40,
    },
    {
        name: "S",
        uv: 35,
    },
    {
        name: "D",
        uv: 55,
    },
];

export default function AverageLength() {
  return (
    <div className="dashboard-average__length">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart width={500} height={400} data={data}>
          <XAxis dataKey="name" />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#0000000" fill="#E60000" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
