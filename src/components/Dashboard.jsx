import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks/hooks";
import useUserId from "../hooks/useUserId";
import Graphics from "./dashboard/Graphic";
import KeyData from "./nutrition/KeyData";

const Dashboard = () => {
  const userId = useUserId();
  const navigate = useNavigate();
  const { data: userData, error, isLoading } = useUser(userId);

  if (isLoading) {
    return <div className="loading">Chargement...</div>;
  }

  if (error) {
    navigate(`/error/${error}`);
    return null;
  }

  if (!userData) {
    navigate('/error/USER_NOT_FOUND');
    return null;
  }

  return (
    <section className="dashboard">
      <h2 className="dashboard-title">
        Bonjour <span className="username">{userData.userInfos.firstName}</span>
      </h2>
      <h3>Félicitation ! Vous avez explosé vos objectifs hier &#128079;</h3>
      <section className="dashboard-analytics">
        <Graphics userId={userId} />
        <KeyData userId={userId} />
      </section>
    </section>
  );
};

export default Dashboard;
