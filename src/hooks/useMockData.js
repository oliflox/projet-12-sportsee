import { userData } from '../mock/userData';
import { activityData } from '../mock/activityData';
import { averageSessionsData } from '../mock/averageSessionsData';
import { performanceData } from '../mock/performanceData';

const MOCK_DATA = {
  user: userData,
  activity: activityData,
  'average-sessions': averageSessionsData,
  performance: performanceData
};

export const useMockData = () => {
  const isMockEnabled = () => {
    return import.meta.env.VITE_USE_MOCK_DATA === 'true';
  };

  const getMockData = (resource) => {
    return MOCK_DATA[resource] || null;
  };

  return {
    isMockEnabled,
    getMockData
  };
}; 