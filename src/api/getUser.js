export const getMainUrl = (userId) => {
  return `http://localhost:3000/user/${userId}`;
};

export const fetchUserData = async (userId) => {
  const mainUrl = getMainUrl(userId);
  const response = await fetch(mainUrl);
  return response.json();
};
