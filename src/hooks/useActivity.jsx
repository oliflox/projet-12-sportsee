import { useEffect, useState } from "react";
import { getUserUrls } from "../constants/BaseUrl";

const useActivity = (userId) => {
  const [sessions, setSessions] = useState([]);
  const { activityUrl } = getUserUrls(userId);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const activityRes = await fetch(activityUrl);
        const activityData = await activityRes.json();
        setSessions(activityData.data.sessions);
      } catch (error) {
        console.error("Error fetching sessions:", error);
      }
    };

    fetchData();
  }, [activityUrl]);

  return sessions;
};

export default useActivity;
