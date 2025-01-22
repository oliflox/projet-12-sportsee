import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
} from "recharts";
import useTodayScore from "../hooks/useTodayScore";
import useUserId from "../hooks/useUserId";

const Scorecharts = () => {
  const userId = useUserId();
  const formattedScore = useTodayScore(userId);

  console.log("Formatted Score:", formattedScore);

  const data = [
    {
      uv: 1.0,
      fill: "#FBFBFB",
    },
    {
      uv: formattedScore, 
      fill: "red",
    },
  ];

  const renderCustomLabel = ({ cx, cy }) => {
    return (
      <text x={cx} y={cy} textAnchor="middle" dominantBaseline="middle">
        <tspan className="score-pourcentage" x={cx} dy="-1em">{`${data[1].uv * 100} %`}</tspan>
        <tspan x={cx} dy="1.5em" className="score-pourcentage-title">de votre objectif</tspan>
      </text>
    );
  };

  return (
    <div className="Scorecharts-container">
      <h2 className="score-title">Score</h2>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          width={900}
          height={300}
          cx="50%"
          cy="50%"
          innerRadius="60%"
          outerRadius="80%"
          startAngle={90}
          endAngle={450}
          barSize={15}
          data={data}
        >
          <RadialBar
            minAngle={15}
            label={renderCustomLabel}
            background
            clockWise
            dataKey="uv"
            cornerRadius={15}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Scorecharts;
