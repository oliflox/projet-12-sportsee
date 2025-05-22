import { useState, useEffect } from "react";
import { fetchUserData } from "../api/api";
import { uniformData } from "../utils/uniformData";

const useTodayScore = (userId) => {
  const [formattedData, setFormattedData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchUserData(userId);
        const uniformedData = uniformData(data);
        setFormattedData(uniformedData);
      } catch (error) {
        console.error("Error fetching formattedData:", error);
      }
    };

    fetchData();
  }, [userId]);

  return formattedData;
};

export default useTodayScore;
