import { useState, useEffect } from "react";
import { fetchData as fetchApiData } from "../api/api";
import { useParams } from 'react-router-dom';

const USE_MOCK_DATA = import.meta.env.VITE_USE_MOCK_DATA === 'true';

export const useUserId = () => {
  const { userId } = useParams();
  return parseInt(userId, 10);
}; 

// Hook de base pour gérer les appels API ou les données mock
export const useBaseHook = (userId, resource, errorMessage, mockData, dataTransformer = (data) => data) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!userId) return;

      try {
        setIsLoading(true);
        let result;

        if (USE_MOCK_DATA) {
          result = mockData;
        } else {
          const apiResult = await fetchApiData(userId, resource, errorMessage);
          result = apiResult.data;
        }

        const transformedData = dataTransformer(result);
        setData(transformedData);
        setError(null);
      } catch (error) {
        console.error(errorMessage, error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [userId]); 

  return { data, isLoading, error };
}; 