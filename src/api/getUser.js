export const getMainUrl = (userId) => {
  return `http://localhost:3000/user/${userId}`;
};

export const fetchUserData = async (userId) => {
  const mainUrl = getMainUrl(userId);
  try {
    const response = await fetch(mainUrl);
    if (!response.ok) {
      throw new Error(`Erreur ${response.status} : ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erreur lors de la récupération des données utilisateur :', error);
    throw error;
  }
};
