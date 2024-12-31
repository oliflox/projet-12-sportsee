import { useUser } from "../hooks/useUser";
import Graphics from "./Graphic";
import KeyData from "./KeyData";

export default function Dashboard() {
  const userData = useUser(12);

  return (
    <section className="dashboard">
      <h2 className="dashboard-title">
        Bonjour <span className="username">{userData?.userInfos.firstName}</span>
      </h2>
      <h3>Félicitation ! Vous avez explosé vos objectifs hier &#128079;</h3>
      <section className="dashboard-analytics">
        <Graphics />
        <KeyData />
      </section>
    </section>
  );
}
