import { PieChart, Pie, ResponsiveContainer, Cell } from "recharts";

const data = [
  { name: "A1", value: 12 },
  { name: "A2", value: 88},
];

const Scorecharts = () => {
  return (
    <ResponsiveContainer className="Scorecharts-container" width="100%" height="100%">
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={80}
          startAngle={90}
          endAngle={450}
          cornerRadius={10}
        >
          <Cell key="cell-0" fill="#E60000" />
          <Cell key="cell-1" fill="transparent" />
        </Pie>
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="24px"
          fontWeight="bold"
        >
          {data[0].value}%
        </text>
        <text
          x="50%"
          y="60%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="14px"
          fill="gray"
        >
          de votre objectif
        </text>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default Scorecharts;
