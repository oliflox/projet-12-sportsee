import { useEffect, useState } from "react";
import { getAverageSessionsUrl } from "../api/getAverageSessions";
import { getActivityUrl } from "../api/getActivity";

const useAverageSession = (userId) => {
  const [sessions, setSessions] = useState([]);
  const averageSessionsUrl = getAverageSessionsUrl(userId);
  const activityUrl = getActivityUrl(userId);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [averageSessionsRes, activityRes] = await Promise.all([
          fetch(averageSessionsUrl),
          fetch(activityUrl),
        ]);
        const averageSessionsData = await averageSessionsRes.json();
        const activityData = await activityRes.json();
        setSessions({
          averageSessions: averageSessionsData.data.sessions,
          activitySessions: activityData.data.sessions,
        });
      } catch (error) {
        console.error("Error fetching sessions:", error);
      }
    };

    fetchData();
  }, [averageSessionsUrl, activityUrl]);

  return sessions;
};

export default useAverageSession;