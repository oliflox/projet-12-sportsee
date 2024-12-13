import { PieChart, Pie, ResponsiveContainer, Tooltip } from "recharts";
const data = [{ name: "A1", value: 12 }];

export default function Score() {
  return (
    <div className="dashboard-score">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={260} height={260}>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={90}
            startAngle={90}
            endAngle={180}
            fill="#E60000"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
