import { activityData } from "../mock/activityData";
import { averageSessionsData } from "../mock/averageSessionsData";
import { performanceData } from "../mock/performanceData";
import { userData } from "../mock/userData";
import { useUserId, useBaseHook } from "./useBaseHooks";
import { formatNutritionData } from "../utils/uniformData";
import { getDataErrorMessage } from "../utils/errorHandler";

export const useActivityData = () => {
    const userId = useUserId();
    return useBaseHook(userId, 'activity', getDataErrorMessage('activity'), activityData,
        (result) => result.sessions);
};

export const useAverageSessionsData = () => {
    const userId = useUserId();
    return useBaseHook(userId, 'average-sessions', getDataErrorMessage('averageSessions'), averageSessionsData,
        (result) => result.sessions);
};

export const usePerformanceData = () => {
    const userId = useUserId();
    return useBaseHook(userId, 'performance', getDataErrorMessage('performance'), performanceData,
        (result) => ({
            data: result.data || [],
            kindMapping: result.kind || {}
        }));
};

export const useTodayScoreData = () => {
    const userId = useUserId();
    return useBaseHook(userId, 'user', getDataErrorMessage('user'), userData,
        (result) => result.todayScore || result.score);
};

export const useKeyDataData = () => {
    const userId = useUserId();
    return useBaseHook(userId, 'user', getDataErrorMessage('user'), userData,
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

