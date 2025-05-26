import { activityData } from "../mock/activityData";
import { averageSessionsData } from "../mock/averageSessionsData";
import { performanceData } from "../mock/performanceData";
import { userData } from "../mock/userData";
import { useUserId, useBaseHook } from "./useBaseHooks";
import { formatNutritionData } from "../utils/uniformData";

export const useActivityData = () => {
    const userId = useUserId();
    return useBaseHook(userId, 'activity', 'Erreur lors de la récupération des données d\'activité :', activityData,
        (result) => result.sessions);
};

export const useAverageSessionsData = () => {
    const userId = useUserId();
    return useBaseHook(userId, 'average-sessions', 'Erreur lors de la récupération des données de sessions moyennes :', averageSessionsData,
        (result) => result.sessions);
};

export const usePerformanceData = () => {
    const userId = useUserId();
    return useBaseHook(userId, 'performance', 'Erreur lors de la récupération des données de performance :', performanceData,
        (result) => ({
            data: result.data || [],
            kindMapping: result.kind || {}
        }));
};

export const useTodayScoreData = () => {
    const userId = useUserId();
    return useBaseHook(userId, 'user', 'Erreur lors de la récupération du score du jour :', userData,
        (result) => result.todayScore || result.score);
};

export const useKeyDataData = () => {
    const userId = useUserId();
    return useBaseHook(userId, 'user', 'Erreur lors de la récupération des données clés :', userData,
        (result) => result.keyData);
};

export const useNutritionData = () => {
    const { data: keyData } = useKeyDataData();
    const nutritionCards = formatNutritionData(keyData);

    return {
        nutritionCards,
        isLoading: !keyData,
        error: null
    };
};

