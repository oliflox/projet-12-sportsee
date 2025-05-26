import { useState, useEffect } from "react";
import { fetchData as fetchApiData } from "../api/api";
import { handleError } from "../utils/errorHandler";
import { userData } from "../mock/userData";
import { useUserId, useBaseHook } from "./useBaseHooks";

const USE_MOCK_DATA = import.meta.env.VITE_USE_MOCK_DATA === 'true';

export const useUserData = () => {
  const userId = useUserId();
  return useBaseHook(userId, 'user', 'Erreur lors de la récupération des données utilisateur :', userData);
};

export const useUser = () => {
  const userId = useUserId();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (isNaN(userId) || !Number.isInteger(Number(userId))) {
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
          const apiResult = await fetchApiData(userId, 'user', 'Erreur lors de la récupération des données utilisateur :');
          result = apiResult.data;
        }

        setData(result);
        setError(null);
      } catch (error) {
        console.error('Erreur lors de la récupération des données utilisateur :', error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  return { 
    data, 
    error: error ? handleError(error) : null, 
    isLoading 
  };
};
