import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer } from "recharts";
import { usePerformanceData } from "../../hooks/hooks";

const Intensity = ({ userId }) => {
  const performanceData = usePerformanceData(userId).data;

  if (!performanceData) {
    return <div>Loading...</div>;
  }

  const formatData = (data, kindMapping) => {
    return data.map((item) => ({
      subject: kindMapping[item.kind],
      value: item.value,
    }));
  };

  const formattedData = formatData(performanceData.data, performanceData.kindMapping);

  return (
    <div className="intensity-container charts">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart outerRadius="60%" data={formattedData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <Radar
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
