import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
} from "recharts";
import { usePerformanceData } from "../../hooks/hooks";
import { formatPerformanceData } from "../../utils/uniformData";

const Intensity = ({ userId }) => {
  const performanceData = usePerformanceData(userId).data;

  if (!performanceData) {
    return <div>Loading...</div>;
  }

  const formattedData = formatPerformanceData(
    performanceData.data,
    performanceData.kindMapping
  );

  return (
    <div className="intensity-container charts">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart outerRadius="60%" data={formattedData}>
          <PolarGrid
            stroke="var(--white)"
            radialLines={false}
          />
          <PolarAngleAxis dataKey="subject" tick={{ fill: "var(--white)" }} />
          <Radar
            color="white"
            name="Performance"
            dataKey="value"
            stroke="#FF0101"
            fill="#FF0101"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Intensity;
