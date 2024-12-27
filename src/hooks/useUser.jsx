import { useState, useEffect } from "react";
import { getUserUrls } from "../constants/BaseUrl";

const useUser = (userId) => {
  const [userData, setUserData] = useState(null);
  const { userUrl } = getUserUrls(userId);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(userUrl);
        const result = await response.json();
        setUserData(result.data);
      } catch (error) {
        console.error("Error fetching userData:", error);
      }
    };

    fetchData();
  }, [userUrl]);

  return userData;
};

export { useUser };
