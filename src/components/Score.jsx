import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
} from "recharts";
import useTodayScore from "../hooks/useTodayScore";
import useUserId from "../hooks/useUserId";

const Scorecharts = () => {
  const userId = useUserId();
  const formattedData = useTodayScore(userId);

  if (!formattedData) {
    return <div>Loading...</div>;
  }

  const data = [
    {
      uv: 1.0,
      fill: "#FBFBFB",
    },
    {
      uv: formattedData.score || 0, 
      fill: "red",
    },
  ];

  const renderCustomLabel = ({ cx, cy }) => {
    return (
      <foreignObject x={cx - 75} y={cy - 50} width="150" height="100">
        <div className="score-label">
          <p className="score-pourcentage">{`${data[1].uv * 100} %`}</p>
          <p className="score-pourcentage-title">de votre objectif</p>
        </div>
      </foreignObject>
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
          innerRadius="50%"
          outerRadius="70%"
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
