import { useState, useEffect } from "react";
import { fetchAverageSessionsData } from "../api/getAverageSessions";
import { fetchActivityData } from "../api/getActivity";

const useAverageSession = (userId) => {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [averageSessionsData, activityData] = await Promise.all([
          fetchAverageSessionsData(userId),
          fetchActivityData(userId),
        ]);
        setSessions({
          averageSessions: averageSessionsData.data.sessions,
          activitySessions: activityData.data.sessions,
        });
      } catch (error) {
        console.error("Error fetching sessions:", error);
      }
    };

    fetchData();
  }, [userId]);

  return sessions;
};

export default useAverageSession;