
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Score",
    value: 32,
    fill: "#FF0000",
  },
];

const App = () => {
  return (
    <div className="score-chart-container">
      <h2 className="score-chart-title">Score</h2>
      <ResponsiveContainer width="100%" height="100%">
      <RadialBarChart
        className="radial-bar-chart"
        cx="50%"
        cy="50%"
        innerRadius="70%"
        outerRadius="100%"
        barSize={10}
        data={data}
        startAngle={90}
        endAngle={450}
      >
        <RadialBar minAngle={15} background clockWise dataKey="value" />
      </RadialBarChart>
      </ResponsiveContainer>
      <div>
        <p className="score-chart-value">12%</p>
        <p className="score-chart-max">de votre objectif</p>
      </div>
    </div>
  );
};

export default App;
