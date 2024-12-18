import { useEffect, useState } from "react";
import { getUserUrls } from "../constants/BaseUrl";

const useActivity = (userId) => {
  const [sessions, setSessions] = useState([]);
  const { activityUrl } = getUserUrls(userId);

  useEffect(() => {
    fetch(activityUrl)
      .then((res) => res.json())
      .then((data) => {
        setSessions(data.data.sessions);
      })
      .catch((error) => {
        console.error("Error fetching keyData:", error);
      });
  }, [activityUrl]);

  return sessions;
};

export default useActivity;
