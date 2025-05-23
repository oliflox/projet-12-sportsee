import useApi from "./useApi";

const usePerformance = (userId) => {
  const { data } = useApi(
    userId,
    'performance',
    'Erreur lors de la récupération des données de performance :',
    (result) => {
      if (result.data && Array.isArray(result.data.data)) {
        const kindMapping = result.data.kind;
        return result.data.data.map(item => ({
          ...item,
          kind: kindMapping[item.kind],
        }));
      }
      return [];
    }
  );

  return data || [];
};

export default usePerformance;
