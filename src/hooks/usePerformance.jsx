import useApi from "./useApi";

const usePerformance = (userId) => {
  const { data } = useApi(
    userId,
    'performance',
    'Erreur lors de la récupération des données de performance :',
    (result) => {
      if (result.data) {
        return {
          data: result.data.data || [],
          kindMapping: result.data.kind || {}
        };
      }
      return { data: [], kindMapping: {} };
    }
  );

  return data || { data: [], kindMapping: {} };
};

export default usePerformance;
