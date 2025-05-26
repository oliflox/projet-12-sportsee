import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { useAverageSessionsData } from "../../hooks/hooks";
import { formatAverageSessions } from "../../utils/uniformData";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return <div className="average-tooltip">{`${payload[0].value} min`}</div>;
  }
  return null;
};

const StyledAreaChart = () => {
  const sessions = useAverageSessionsData().data;
  const data = formatAverageSessions(sessions);

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
