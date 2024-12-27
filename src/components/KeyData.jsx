import { useKeyData } from "../hooks/useKeyData";
import DailyCal from "./DailyCal";
import Protein from "./Protein";
import Carbs from "./Carbs";
import Fat from "./Fat";

export default function KeyData() {
  const keyData = useKeyData(12);

  return (
    <article className="dashboard-analytics__nutrition">
      <DailyCal keyData={keyData?.calorieCount} />
      <Protein keyData={keyData?.proteinCount} />
      <Carbs keyData={keyData?.carbohydrateCount} />
      <Fat keyData={keyData?.lipidCount} />
    </article>
  );
}
