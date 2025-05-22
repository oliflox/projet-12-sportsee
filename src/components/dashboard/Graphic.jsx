import DayliAnalytics from "./DailyAnalytics";
import AverageLength from "../charts/AverageLength";
import Intensity from "../charts/Intensity";
import Score from "../charts/Score";

export default function Graphics() {
  return (
    <article className="dashboard-analytics__card">
      <DayliAnalytics />
      <div className="charts-container">
        <AverageLength />
        <Intensity />
        <Score />
      </div>
    </article>
  );
}
