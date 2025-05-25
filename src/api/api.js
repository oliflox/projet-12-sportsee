import { userData } from '../mock/userData'
import { activityData } from '../mock/activityData'
import { averageSessionsData } from '../mock/averageSessionsData'
import { performanceData } from '../mock/performanceData'
import { ERROR_TYPES, getDataErrorMessage } from '../utils/errorHandler'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'
const USE_MOCK_DATA = import.meta.env.VITE_USE_MOCK_DATA === 'true'

const getResourceUrl = (userId, resource) => {
  return `${API_URL}/user/${userId}${resource === 'user' ? '' : `/${resource}`}`;
};

const fetchData = async (userId, resource, mockData) => {
  if (USE_MOCK_DATA) {
    return mockData;
  }

  const url = getResourceUrl(userId, resource);
  try {
    const response = await fetch(url);
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error(ERROR_TYPES.USER_NOT_FOUND);
      }
      throw new Error(`API_ERROR: ${response.status} - ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(getDataErrorMessage(resource), error);
    throw error;
  }
};

const getUserData = (userId) => 
  fetchData(userId, 'user', userData);

export const getActivityData = (userId) => 
  fetchData(userId, 'activity', activityData);

export const getAverageSessionsData = (userId) => 
  fetchData(userId, 'average-sessions', averageSessionsData);

export const getPerformanceData = (userId) => 
  fetchData(userId, 'performance', performanceData);

export { getResourceUrl, fetchData, getUserData }; 