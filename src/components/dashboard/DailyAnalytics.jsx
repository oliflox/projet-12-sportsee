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
import { useActivityData } from "../../hooks/useChartHooks";
import { formatActivityData } from "../../utils/uniformData";

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
  const sessions = useActivityData().data;
  const formattedData = formatActivityData(sessions);

  return (
    <div className="dashboard-daily__analytic">
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
          <Legend wrapperStyle={{ paddingBottom: 30 }} verticalAlign="top" align="right" iconType="circle" />
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
