import { getMainUrl } from './getUser';

export const getAverageSessionsUrl = (userId) => {
  return `${getMainUrl(userId)}/average-sessions`;
};

export const fetchAverageSessionsData = async (userId) => {
  const averageSessionsUrl = getAverageSessionsUrl(userId);
  const response = await fetch(averageSessionsUrl);
  return response.json();
};
