import { useState, useEffect } from "react";
import { getUserUrls } from "../constants/BaseUrl";

const useUser = (userId) => {
  const [userData, setUserData] = useState(null);
  const { mainUrl } = getUserUrls(userId);

  useEffect(() => {
    if (!userId) return;

    const fetchData = async () => {
      try {
        const response = await fetch(mainUrl);
        const result = await response.json();
        setUserData(result.data);
      } catch (error) {
        console.error("Error fetching userData:", error);
      }
    };

    fetchData();
  }, [mainUrl, userId]);

  return userData;
};

export { useUser };
