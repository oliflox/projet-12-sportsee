import { useEffect, useState } from "react";
import { fetchActivityData } from "../api/getActivity";

const useActivity = (userId) => {
  const [sessions, setSessions] = useState([]);

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
