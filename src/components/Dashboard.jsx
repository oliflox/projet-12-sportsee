import { useEffect } from "react";
import { useUser } from "../hooks/useUser";
import useUserId from "../hooks/useUserId";
import Graphics from "./Graphic";
import KeyData from "./KeyData";
import { handleError, handleNoData } from "../utils/errorHandler";

export default function Dashboard() {
  const userId = useUserId();
  const userData = useUser(userId);

  useEffect(() => {
    if (!userData) {
      handleNoData();
    } else if (userData.error) {
      handleError(userData.error);
    }
  }, [userData]);

  return (
    <section className="dashboard">
      <div className="errorDiv hide" id="errorDiv"></div>
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
