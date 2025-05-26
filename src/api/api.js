import { ERROR_TYPES, getDataErrorMessage } from '../utils/errorHandler'
import { useMockData } from '../hooks/useMockData'

const API_URL = import.meta.env.VITE_API_URL

const getResourceUrl = (userId, resource) => {
  return `${API_URL}/user/${userId}${resource === 'user' ? '' : `/${resource}`}`;
};

const fetchData = async (userId, resource) => {
  const { isMockEnabled, getMockData } = useMockData();

  try {
    if (isMockEnabled()) {
      const mockData = getMockData(resource);
      if (!mockData) {
        throw new Error(getDataErrorMessage(resource));
      }
      return mockData;
    }

    const response = await fetch(getResourceUrl(userId, resource));
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

export const getUserData = (userId) =>
  fetchData(userId, 'user');

export const getActivityData = (userId) =>
  fetchData(userId, 'activity');

export const getAverageSessionsData = (userId) =>
  fetchData(userId, 'average-sessions');

export const getPerformanceData = (userId) =>
  fetchData(userId, 'performance');

export { getResourceUrl, fetchData }; 