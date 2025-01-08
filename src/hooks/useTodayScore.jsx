import { useState, useEffect } from "react";
import { fetchUserData } from "../api/getUser";

const useTodayScore = (userId) => {
  const [todayScore, setTodayScore] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: { todayScore } } = await fetchUserData(userId);
        setTodayScore(todayScore);
      } catch (error) {
        console.error("Error fetching todayScore:", error);
      }
    };

    fetchData();
  }, [userId]);

  return todayScore;
};

export default useTodayScore;
