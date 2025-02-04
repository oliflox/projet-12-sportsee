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
import useUserId from "../hooks/useUserId";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="DailyTooltip">
        <p>{`${payload[0].value} Kg`}</p>
        <p>{`${payload[1].value} Kcal`}</p>
      </div>
    );
  }
  return null;
};

export default function DailyAnalytics() {
  const userId = useUserId();
  const sessions = useActivity(userId);

  const formattedData = sessions.map((session) => ({
    day: session.day,
    kilogram: session.kilogram,
    calories: session.calories,
  }));

  return (
    <div className="dashboard-daily__analytic dashboard-card">
      <h3>Activité quotidienne</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={formattedData} barCategoryGap="20%" barGap={10}>
          <CartesianGrid strokeDasharray="3" vertical={false} />
          <XAxis axisLine={false} tickLine={false} />
          <YAxis yAxisId="right" orientation="right" dataKey="calories" hide />
          <YAxis
            yAxisId="left"
            orientation="right"
            dataKey="kilogram"
            tickCount={3}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend wrapperStyle={{ paddingBottom: 30 }} verticalAlign="top" align="right"  iconType="circle" />
          <Bar
            yAxisId="left"
            dataKey="kilogram"
            name="Poids (kg)"
            fill="#020203"
            radius={[10, 10, 0, 0]}
            barSize={10}
          />
          <Bar
            yAxisId="right"
            dataKey="calories"
            name="Calories brûlées (kCal)"
            fill="#E60000"
            radius={[10, 10, 0, 0]}
            barSize={10}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
