import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import useAverageSession from "../../hooks/useAverageSession";
import useUserId from "../../hooks/useUserId";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return <div className="average-tooltip">{`${payload[0].value} min`}</div>;
  }
  return null;
};

const StyledAreaChart = () => {
  const userId = useUserId();
  const sessions = useAverageSession(userId);
  const days = ["L", "M", "M", "J", "V", "S", "D"];
  const data =
    sessions.averageSessions?.map((session) => ({
      name: days[session.day - 1],
      value: session.sessionLength,
    })) || [];

  return (
    <div className="average-container charts">
      <h3 className="average-title">Durée moyenne des sessions</h3>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>

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
