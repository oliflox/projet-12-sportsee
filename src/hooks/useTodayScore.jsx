import { useState, useEffect } from "react";
import fetchUserScore from "../api/getUserScore";

const useTodayScore = (userId) => {
  const [formattedScore, setFormattedScore] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { formattedScore } = await fetchUserScore(userId);
        setFormattedScore(typeof formattedScore === 'number' && !isNaN(formattedScore) ? formattedScore : 0);
      } catch (error) {
        console.error("Error fetching formattedScore:", error);
        setFormattedScore(0); // Set to 0 in case of error
      }
    };

    fetchData();
  }, [userId]);

  return formattedScore;
};

export default useTodayScore;
