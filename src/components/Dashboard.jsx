import DayliAnalytics from "./DailyAnalytics";
import AverageLength from "./AverageLength";
import Intensity from "./Intensity";
import Score from "./Score";
import DailyCal from "./DailyCal";
import Protein from "./Protein";
import Carbs from "./Carbs";
import Fat from "./Fat";

export default function Dashboard() {
  return (
    <section className="dashboard">
      <h2 className="dashboard-title">
        Bonjour <span className="username">Jean</span>
      </h2>
      <h3>Félicitation ! Vous avez explosé vos objectifs hier &#128079;</h3>
      <section className="dashboard-analytics">
        <article className="dashboard-analytics__card">
          <DayliAnalytics />
          <AverageLength />
          <Intensity />
          <Score />
        </article>
        <article className="dashboard-analytics__nutrition">
          <DailyCal />
          <Protein />
          <Carbs />
          <Fat />
        </article>
      </section>
    </section>
  );
}
