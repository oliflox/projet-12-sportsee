import { useState, useEffect } from "react";
import { fetchUserData } from "../api/getUser";

const useKeyData = (userId) => {
  const [keyData, setKeyData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchUserData(userId);
        setKeyData(result.data.keyData);
      } catch (error) {
        console.error("Error fetching keyData:", error);
      }
    };

    fetchData();
  }, [userId]);

  return keyData;
};

export { useKeyData };
