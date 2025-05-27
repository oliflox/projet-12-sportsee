import { useState, useEffect } from "react";
import { fetchData as fetchApiData } from "../api/api";
import { useParams } from 'react-router-dom';
import { useMockData } from './useMockData';

export const useUserId = () => {
  const { userId } = useParams();
  return parseInt(userId, 10);
};

export const useBaseHook = (userId, resource, errorMessage, mockData, dataTransformer = (data) => data) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { isMockEnabled, getMockData } = useMockData();

  useEffect(() => {
    const fetchData = async () => {
      if (!userId) return;

      try {
        setIsLoading(true);
        let result;

        if (isMockEnabled()) {
          result = getMockData(resource) || mockData;
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