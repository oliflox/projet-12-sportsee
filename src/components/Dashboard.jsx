import { useEffect } from "react";
import useUser from "../hooks/useUser";
import useUserId from "../hooks/useUserId";
import Graphics from "./dashboard/Graphic";
import KeyData from "./nutrition/KeyData";
import { useErrorStore, clearError } from "../utils/errorHandler";

export default function Dashboard() {
  const userId = useUserId();
  const { data: userData, isLoading } = useUser(userId);
  const errorMessage = useErrorStore();

  useEffect(() => {
    if (isLoading) return;
    if (userData) {
      clearError();
    }
  }, [isLoading, userData]);

  if (isLoading) {
    return <div className="loading">Chargement...</div>;
  }

  return (
    <section className="dashboard">
      <div id="errorDiv" className={`errorDiv ${errorMessage ? '' : 'hide'}`}>{errorMessage}</div>
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
