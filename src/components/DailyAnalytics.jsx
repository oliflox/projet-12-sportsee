import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import useActivity from "../hooks/useActivity";

export default function DayliAnalytics() {
  const sessions = useActivity(12);

  const formattedData = sessions.map((session) => ({
    day: session.day,
    kilogram: session.kilogram,
    calories: session.calories,
  }));

  return (
    <div className="dashboard-daily__analytic dashboard-card">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={formattedData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barCategoryGap="20%"
          barGap={10}
        >
          <CartesianGrid
            strokeDasharray="3"
            vertical={false}
          />
          <XAxis />
          <YAxis yAxisId="right" orientation="right" dataKey="calories" hide />
          <YAxis
            yAxisId="left"
            orientation="left"
            dataKey="kilogram"
            tickCount={3}
          />
          <Tooltip />
          <Legend verticalAlign="top" align="right" />
          <Bar
            yAxisId="left"
            dataKey="kilogram"
            fill="#020203"
            radius={[10, 10, 0, 0]}
            barSize={10}
          />
          <Bar
            yAxisId="right"
            dataKey="calories"
            fill="#E60000"
            radius={[10, 10, 0, 0]}
            barSize={10}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
