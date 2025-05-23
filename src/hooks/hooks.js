import { useState, useEffect, useCallback } from "react";
import { fetchData } from "../api/api";
import { handleError, handleNoData } from "../utils/errorHandler";

// Hook de base pour gérer les appels API
const useBaseHook = (userId, resource, errorMessage, dataTransformer = (data) => data) => {
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

// Hooks spécifiques pour chaque ressource
export const useUserData = (userId) => 
  useBaseHook(userId, 'user', 'Erreur lors de la récupération des données utilisateur :', (result) => result.data);

export const useActivityData = (userId) => 
  useBaseHook(userId, 'activity', 'Erreur lors de la récupération des données d\'activité :', (result) => result.data.sessions);

export const useAverageSessionsData = (userId) => 
  useBaseHook(userId, 'average-sessions', 'Erreur lors de la récupération des données de sessions moyennes :', (result) => result.data.sessions);

export const usePerformanceData = (userId) => 
  useBaseHook(userId, 'performance', 'Erreur lors de la récupération des données de performance :', (result) => {
    if (result.data) {
      return {
        data: result.data.data || [],
        kindMapping: result.data.kind || {}
      };
    }
    return { data: [], kindMapping: {} };
  });

export const useTodayScoreData = (userId) =>
  useBaseHook(userId, 'user', 'Erreur lors de la récupération du score du jour :', (result) => result.data.todayScore || result.data.score);

export const useKeyDataData = (userId) =>
  useBaseHook(userId, 'user', 'Erreur lors de la récupération des données clés :', (result) => result.data.keyData);

export const useUser = (userId) => {
  const { data, error } = useUserData(userId);

  if (error) {
    handleError(error);
  } else if (!data) {
    handleNoData();
  }

  return { data, error };
}; 