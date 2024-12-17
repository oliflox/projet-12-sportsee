import useMainData from "../hooks/useMainData";
import DailyCal from "./DailyCal";
import Protein from "./Protein";
import Carbs from "./Carbs";
import Fat from "./Fat";

export default function Dashboard() {
  const keyData = useMainData(12);

  return (
    <article className="dashboard-analytics__nutrition">
      <DailyCal keyData={keyData} />
      <Protein keyData={keyData} />
      <Carbs keyData={keyData} />
      <Fat keyData={keyData} />
    </article>
  );
}
