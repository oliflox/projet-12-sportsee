import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts";
import usePerformance from "../../hooks/usePerformance";
import useUserId from "../../hooks/useUserId";
import { formatPerformanceData } from "../../utils/uniformData";

const StyledRadarChart = () => {
  const userId = useUserId();
  const { data, kindMapping } = usePerformance(userId);
  const formattedData = formatPerformanceData(data, kindMapping);

  return (
    <div className="radar-chart-container charts">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart outerRadius="50%" data={formattedData}>
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
