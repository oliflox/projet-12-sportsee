import useApi from "./useApi";
import useUserId from "./useUserId";

const useActivity = () => {
  const userId = useUserId();
  const { data } = useApi(
    userId,
    'activity',
    'Erreur lors de la récupération des données d\'activité :',
    (result) => result.data.sessions
  );

  return data || [];
};

export default useActivity;
