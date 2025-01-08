import { getMainUrl } from './getUser';

export const getActivityUrl = (userId) => {
  return `${getMainUrl(userId)}/activity`;
};

export const fetchActivityData = async (userId) => {
  const activityUrl = getActivityUrl(userId);
  const response = await fetch(activityUrl);
  return response.json();
};
