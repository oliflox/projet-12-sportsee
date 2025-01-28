import { getMainUrl } from "./getUser";

export const fetchUserScore = async (userId) => {
  const mainUrl = getMainUrl(userId);
  const response = await fetch(mainUrl);
  const data = await response.json();
  return data;
};

export default fetchUserScore;