import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import useAverageSession from "../hooks/useAverageSession";
import useUserId from "../hooks/useUserId";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return <div className="tooltip">{`${payload[0].value} min`}</div>;
  }
  return null;
};

const StyledAreaChart = () => {
  const userId = useUserId();
  const sessions = useAverageSession(userId);
  const data =
    sessions.averageSessions?.map((session) => ({
      name: session.day,
      value: session.sessionLength,
    })) || [];

  return (
    <div className="chart-container">
      <h3 className="chart-title">Durée moyenne des sessions</h3>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="white" stopOpacity={1} />
              <stop offset="100%" stopColor="white" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="name"
            tick={{ fill: "white" }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="value"
            stroke="white"
            strokeWidth={2}
            fill="url(#colorGradient)"
            activeDot={{
              r: 5,
              fill: "white",
              stroke: "white",
              strokeWidth: 2,
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StyledAreaChart;
