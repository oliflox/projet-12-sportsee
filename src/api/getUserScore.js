import { getMainUrl } from "./getUser";

export const fetchUserScore = async (userId) => {
  const mainUrl = getMainUrl(userId);
  const response = await fetch(mainUrl);
  const { data: { todayScore, score } } = await response.json();
  const formattedScore = todayScore || score;
  return { formattedScore };
};

export default fetchUserScore;