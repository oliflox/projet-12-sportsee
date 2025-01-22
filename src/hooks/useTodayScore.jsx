import { useState, useEffect } from "react";
import fetchUserScore from "../api/getUserScore";

const useTodayScore = (userId) => {
  const [formattedScore, setFormattedScore] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { formattedScore } = await fetchUserScore(userId);
        setFormattedScore(formattedScore);
      } catch (error) {
        console.error("Error fetching formattedScore:", error);
      }
    };

    fetchData();
  }, [userId]);

  return formattedScore;
};

export default useTodayScore;
