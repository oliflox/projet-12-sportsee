import useApi from "./useApi";
import { handleError, handleNoData } from "../utils/errorHandler";

const useUser = (userId) => {
  const { data, error } = useApi(
    userId,
    'user',
    'Erreur lors de la récupération des données utilisateur :',
    (result) => result.data
  );

  if (error) {
    handleError(error);
  } else if (!data) {
    handleNoData();
  }

  return { data, error };
};

export default useUser;
