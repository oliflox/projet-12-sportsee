import { useState, useEffect, useCallback } from "react";
import { fetchData } from "../api/api";

const useApi = (userId, resource, errorMessage, dataTransformer = (data) => data) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const memoizedDataTransformer = useCallback(dataTransformer, [dataTransformer]);

  useEffect(() => {
    if (!userId) return;

    const fetchApiData = async () => {
      try {
        setIsLoading(true);
        const result = await fetchData(userId, resource, errorMessage);
        const transformedData = memoizedDataTransformer(result);
        setData(transformedData);
        setError(null);
      } catch (error) {
        console.error(errorMessage, error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchApiData();
  }, [userId, resource, errorMessage, memoizedDataTransformer]);

  return { data, isLoading, error };
};

export default useApi; 