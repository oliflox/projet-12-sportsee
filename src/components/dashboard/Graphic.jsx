import DayliAnalytics from "./DailyAnalytics";
import AverageLength from "../charts/AverageLength";
import Intensity from "../charts/Intensity";
import Score from "../charts/Score";

export default function Graphics({ userId }) {
  return (
    <article className="dashboard-analytics__card">
      <DayliAnalytics userId={userId} />
      <div className="charts-container">
        <AverageLength userId={userId} />
        <Intensity userId={userId} />
        <Score userId={userId} />
      </div>
    </article>
  );
}
