import DayliAnalytics from "../dashboard/DailyAnalytics";
import AverageLength from "./AverageLength";
import Intensity from "./Intensity";
import Score from "../dashboard/Score";

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
