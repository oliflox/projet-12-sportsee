import useApi from "./useApi";

const useAverageSession = (userId) => {
  const { data: averageSessionsData } = useApi(
    userId,
    'average-sessions',
    'Erreur lors de la récupération des données de sessions moyennes :',
    (result) => result.data.sessions
  );

  const { data: activityData } = useApi(
    userId,
    'activity',
    'Erreur lors de la récupération des données d\'activité :',
    (result) => result.data.sessions
  );

  return {
    averageSessions: averageSessionsData || [],
    activitySessions: activityData || []
  };
};

export default useAverageSession;