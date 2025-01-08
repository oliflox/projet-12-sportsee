import { getMainUrl } from './getUser';

export const getPerformanceUrl = (userId) => {
  return `${getMainUrl(userId)}/performance`;
};

export const fetchPerformanceData = async (userId) => {
  const performanceUrl = getPerformanceUrl(userId);
  const response = await fetch(performanceUrl);
  return response.json();
};
