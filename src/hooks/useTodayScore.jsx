import { useState, useEffect } from "react";
import { getUserUrls } from "../constants/BaseUrl";

const useTodayScore = (userId) => {
  const [todayScore, setTodayScore] = useState(null);
  const { mainUrl } = getUserUrls(userId);

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
