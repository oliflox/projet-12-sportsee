import { getMainUrl } from './getUser';

export const getActivityUrl = (userId) => {
  return `${getMainUrl(userId)}/activity`;
};
