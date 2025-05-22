import { useEffect, useState } from "react";
import { fetchActivityData } from "../api/api";
import useUserId from "../hooks/useUserId";

const useActivity = () => {
  const [sessions, setSessions] = useState([]);
  const userId = useUserId();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const activityData = await fetchActivityData(userId);
        setSessions(activityData.data.sessions);
      } catch (error) {
        console.error("Error fetching sessions:", error);
      }
    };

    fetchData();
  }, [userId]);

  return sessions;
};

export default useActivity;
