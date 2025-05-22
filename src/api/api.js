const BASE_URL = 'http://localhost:3000';

export const getResourceUrl = (userId, resource) => {
  return `${BASE_URL}/user/${userId}${resource === 'user' ? '' : `/${resource}`}`;
};

export const fetchData = async (userId, resource, errorMessage) => {
  const url = getResourceUrl(userId, resource);
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Erreur ${response.status} : ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(errorMessage, error);
    throw error;
  }
};

// Fonctions spécifiques pour chaque ressource
export const fetchUserData = (userId) => 
  fetchData(userId, 'user', 'Erreur lors de la récupération des données utilisateur :');

export const fetchActivityData = (userId) => 
  fetchData(userId, 'activity', 'Erreur lors de la récupération des données d\'activité :');

export const fetchAverageSessionsData = (userId) => 
  fetchData(userId, 'average-sessions', 'Erreur lors de la récupération des données de sessions moyennes :');

export const fetchPerformanceData = (userId) => 
  fetchData(userId, 'performance', 'Erreur lors de la récupération des données de performance :'); 