import { useState, useEffect } from "react";
import { fetchData as fetchApiData } from "../api/api";
import { handleError, getDataErrorMessage } from "../utils/errorHandler";
import { userData } from "../mock/userData";
import { useUserId, useBaseHook } from "./useBaseHooks";
import { useParams } from 'react-router-dom';

const USE_MOCK_DATA = import.meta.env.VITE_USE_MOCK_DATA === 'true';

export const useUserData = () => {
  const userId = useUserId();
  return useBaseHook(userId, 'user', getDataErrorMessage('user'), userData);
};

export const useUser = () => {
  const { userId: rawUserId } = useParams();
  const userId = useUserId();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (isNaN(userId) || !Number.isInteger(Number(userId)) || rawUserId !== userId.toString()) {
        setError(new Error('USER_NOT_FOUND'));
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);
        let result;

        if (USE_MOCK_DATA) {
          result = userData;
        } else {
          const apiResult = await fetchApiData(userId, 'user', getDataErrorMessage('user'));
          result = apiResult.data;
        }

        setData(result);
        setError(null);
      } catch (error) {
        console.error(getDataErrorMessage('user'), error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [userId, rawUserId]);

  return { 
    data, 
    error: error ? handleError(error) : null, 
    isLoading 
  };
};
