import { useState, useEffect } from "react";
import { fetchData as fetchApiData } from "../api/api";
import { handleError, handleNoData } from "../utils/errorHandler";
import { userData } from "../mock/userData";
import { activityData } from "../mock/activityData";
import { averageSessionsData } from "../mock/averageSessionsData";
import { performanceData } from "../mock/performanceData";

const USE_MOCK_DATA = import.meta.env.VITE_USE_MOCK_DATA === 'true';

// Hook de base pour gérer les appels API ou les données mock
const useBaseHook = (userId, resource, errorMessage, mockData, dataTransformer = (data) => data) => {
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

// Hooks spécifiques pour chaque ressource
export const useUserData = (userId) => 
  useBaseHook(userId, 'user', 'Erreur lors de la récupération des données utilisateur :', userData);

export const useActivityData = (userId) => 
  useBaseHook(userId, 'activity', 'Erreur lors de la récupération des données d\'activité :', activityData, 
    (result) => result.sessions);

export const useAverageSessionsData = (userId) => 
  useBaseHook(userId, 'average-sessions', 'Erreur lors de la récupération des données de sessions moyennes :', averageSessionsData, 
    (result) => result.sessions);

export const usePerformanceData = (userId) => 
  useBaseHook(userId, 'performance', 'Erreur lors de la récupération des données de performance :', performanceData, 
    (result) => ({
      data: result.data || [],
      kindMapping: result.kind || {}
    }));

export const useTodayScoreData = (userId) =>
  useBaseHook(userId, 'user', 'Erreur lors de la récupération du score du jour :', userData, 
    (result) => result.todayScore || result.score);

export const useKeyDataData = (userId) =>
  useBaseHook(userId, 'user', 'Erreur lors de la récupération des données clés :', userData, 
    (result) => result.keyData);

export const useUser = (userId) => {
  const { data, error, isLoading } = useUserData(userId);

  useEffect(() => {
    if (error) {
      handleError(error);
    }
  }, [error]);

  useEffect(() => {
    if (!isLoading && !data) {
      handleNoData();
    }
  }, [isLoading, data]);

  return { data, error, isLoading };
}; 