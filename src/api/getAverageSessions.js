import { getMainUrl } from './getUser';

export const fetchAverageSessionsData = async (userId) => {
  const averageSessionsUrl = `${getMainUrl(userId)}/average-sessions`;
  try {
    const response = await fetch(averageSessionsUrl);
    if (!response.ok) {
      throw new Error(`Erreur ${response.status} : ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erreur lors de la récupération des sessions moyennes :', error);
    throw error;
  }
};

export default fetchAverageSessionsData;
