import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts";
import usePerformance from "../hooks/usePerformance";
import useUserId from "../hooks/useUserId";

const StyledRadarChart = () => {
  const userId = useUserId();
  const performance = usePerformance(userId);
  const data = performance.map((item) => ({
    subject: item.kind,
    value: item.value,
  }));

  return (
    <div className="radar-chart-container">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
          <PolarGrid className="radar-grid" />
          <PolarAngleAxis
            dataKey="subject"
            tick={{ fill: "white" }}
            className="radar-axis"
          />
          <Radar
            name="Performance"
            dataKey="value"
            stroke="#E60000"
            fill="#E60000"
            fillOpacity={0.6}
            className="radar-shape"
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StyledRadarChart;
