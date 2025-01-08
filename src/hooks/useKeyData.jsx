import { useState, useEffect } from "react";
import { getMainUrl } from "../api/getUser";

const useKeyData = (userId) => {
  const [keyData, setKeyData] = useState(null);
  const mainUrl = getMainUrl(userId);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(mainUrl);
        const result = await response.json();
        setKeyData(result.data.keyData);
      } catch (error) {
        console.error("Error fetching keyData:", error);
      }
    };

    fetchData();
  }, [mainUrl]);

  return keyData;
};

export { useKeyData };
