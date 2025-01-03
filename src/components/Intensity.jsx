import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts";
import usePerformance from "../hooks/usePerformance";

const StyledRadarChart = () => {
  const performance = usePerformance(12);
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
            stroke="red"
            fill="red"
            fillOpacity={0.6}
            className="radar-shape"
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StyledRadarChart;
