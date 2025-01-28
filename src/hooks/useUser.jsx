import { useState, useEffect } from "react";
import { fetchUserData } from "../api/getUser";
import { handleError, handleNoData } from "../utils/errorHandler";

const useUser = (userId, setError) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (!userId) return;

    const fetchData = async () => {
      try {
        const result = await fetchUserData(userId);
        if (!result.data) {
          handleNoData(setError)();
        } else {
          setUserData(result.data);
        }
      } catch (error) {
        handleError(setError)(error);
      }
    };

    fetchData();
  }, [userId, setError]);

  return userData;
};

export { useUser };
