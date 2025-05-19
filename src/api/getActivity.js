import { getMainUrl } from './getUser';

export const getActivityUrl = (userId) => {
  return `${getMainUrl(userId)}/activity`;
};

export const fetchActivityData = async (userId) => {
  const activityUrl = getActivityUrl(userId);
  try {
    const response = await fetch(activityUrl);
    if (!response.ok) {
      throw new Error(`Erreur ${response.status} : ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erreur lors de la récupération des données d\'activité :', error);
    throw error;
  }
};

export default fetchActivityData;
