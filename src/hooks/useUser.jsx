import { useState, useEffect } from "react";
import { fetchUserData } from "../api/getUser";
import { handleError, handleNoData } from "../utils/errorHandler";

const useUser = (userId) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (!userId) return;

    const fetchData = async () => {
      try {
        const result = await fetchUserData(userId);
        if (!result.data) {
          handleNoData();
        } else {
          setUserData(result.data);
        }
      } catch (error) {
        handleError(error);
      }
    };

    fetchData();
  }, [userId]);

  return userData;
};

export { useUser };
