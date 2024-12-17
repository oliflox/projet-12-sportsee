import DayliAnalytics from "./DailyAnalytics";
import AverageLength from "./AverageLength";
import Intensity from "./Intensity";
import Score from "./Score";

export default function Graphics() {

  return (
        <article className="dashboard-analytics__card">
          <DayliAnalytics />
          <AverageLength />
          <Intensity />
          <Score />
        </article>
  );
}