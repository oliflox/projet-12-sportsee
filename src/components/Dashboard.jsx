import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks/useUserHooks";
import Graphics from "./dashboard/Graphic";
import KeyData from "./nutrition/KeyData";

const Dashboard = () => {
  const navigate = useNavigate();
  const { data: userData, error, isLoading } = useUser();

  useEffect(() => {
    if (error) {
      navigate(`/error/${error}`);
    } else if (!isLoading && !userData) {
      navigate('/error/USER_NOT_FOUND');
    }
  }, [error, isLoading, userData, navigate]);

  if (isLoading) {
    return <div className="loading">Chargement...</div>;
  }

  if (error || (!isLoading && !userData)) {
    return null;
  }

  return (
    <section className="dashboard">
      <h2 className="dashboard-title">
        Bonjour <span className="username">{userData.userInfos.firstName}</span>
      </h2>
      <h3>Félicitation ! Vous avez explosé vos objectifs hier &#128079;</h3>
      <section className="dashboard-analytics">
        <Graphics />
        <KeyData />
      </section>
    </section>
  );
};

export default Dashboard;
