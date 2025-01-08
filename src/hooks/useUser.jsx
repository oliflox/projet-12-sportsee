import { useState, useEffect } from "react";
import { fetchUserData } from "../api/getUser";

const useUser = (userId) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (!userId) return;

    const fetchData = async () => {
      try {
        const result = await fetchUserData(userId);
        setUserData(result.data);
      } catch (error) {
        console.error("Error fetching userData:", error);
      }
    };

    fetchData();
  }, [userId]);

  return userData;
};

export { useUser };
