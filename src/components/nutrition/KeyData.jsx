import { useKeyData } from "../../hooks/useKeyData";
import useUserId from "../../hooks/useUserId";
import DailyCal from "./DailyCal";
import Protein from "./Protein";
import Carbs from "./Carbs";
import Fat from "./Fat";

export default function KeyData() {
  const userId = useUserId();
  const keyData = useKeyData(userId);

  return (
    <article className="dashboard-analytics__nutrition">
      <DailyCal keyData={keyData?.calorieCount} />
      <Protein keyData={keyData?.proteinCount} />
      <Carbs keyData={keyData?.carbohydrateCount} />
      <Fat keyData={keyData?.lipidCount} />
    </article>
  );
}
