
import DailyCal from "./DailyCal";
import Protein from "./Protein";
import Carbs from "./Carbs";
import Fat from "./Fat";

export default function Dashboard() {

  return (
        <article className="dashboard-analytics__nutrition">
          <DailyCal />
          <Protein />
          <Carbs />
          <Fat />
        </article>
  );
}
