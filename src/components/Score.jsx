import { PieChart, Pie, ResponsiveContainer } from "recharts";
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
            startAngle={0}
            endAngle={360}
            fill="#E60000"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
