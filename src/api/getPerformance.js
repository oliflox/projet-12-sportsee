import { getMainUrl } from './getUser';

export const getPerformanceUrl = (userId) => {
  return `${getMainUrl(userId)}/performance`;
};

export const fetchPerformanceData = async (userId) => {
  const performanceUrl = getPerformanceUrl(userId);
  try {
    const response = await fetch(performanceUrl);
    if (!response.ok) {
      throw new Error(`Erreur ${response.status} : ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erreur lors de la récupération des données de performance :', error);
    throw error;
  }
};

export default fetchPerformanceData;
