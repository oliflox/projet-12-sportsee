import { useState, useEffect } from "react";
import { getMainUrl } from "../api/getUser";

const useTodayScore = (userId) => {
  const [todayScore, setTodayScore] = useState(null);
  const mainUrl = getMainUrl(userId);

  useEffect(() => {
    fetch(mainUrl)
      .then((res) => res.json())
      .then(({ data: { todayScore } }) => {
        setTodayScore(todayScore);
      })
      .catch((error) => {
        console.error("Error fetching todayScore:", error);
      });
  }, [mainUrl]);

  return todayScore;
};

export default useTodayScore;
