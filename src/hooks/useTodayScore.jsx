import useApi from "./useApi";
import { uniformData } from "../utils/uniformData";

const useTodayScore = (userId) => {
  const { data } = useApi(
    userId,
    'user',
    'Erreur lors de la récupération des données utilisateur :',
    (result) => uniformData(result)
  );

  return data;
};

export default useTodayScore;
