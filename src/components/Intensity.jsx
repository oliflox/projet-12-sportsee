import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts";

const data = [
  { subject: "Intensité", value: 90 },
  { subject: "Vitesse", value: 80 },
  { subject: "Force", value: 70 },
  { subject: "Endurance", value: 60 },
  { subject: "Énergie", value: 50 },
  { subject: "Cardio", value: 85 },
];

const StyledRadarChart = () => {
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
