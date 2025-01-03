import { useEffect, useState } from "react";
import { getUserUrls } from "../constants/BaseUrl";

const useAverageSession = (userId) => {
  const [sessions, setSessions] = useState([]);
  const { averageSessionsUrl, activityUrl } = getUserUrls(userId);

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