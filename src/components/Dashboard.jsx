import { useUserInfos } from "../hooks/useMainData";
import Graphics from "./Graphic";
import KeyData from "./KeyData";

export default function Dashboard() {
  const userInfos = useUserInfos(12);

  return (
    <section className="dashboard">
      <h2 className="dashboard-title">
        Bonjour <span className="username">{userInfos?.firstName}</span>
      </h2>
      <h3>Félicitation ! Vous avez explosé vos objectifs hier &#128079;</h3>
      <section className="dashboard-analytics">
        <Graphics />
        <KeyData />
      </section>
    </section>
  );
}
