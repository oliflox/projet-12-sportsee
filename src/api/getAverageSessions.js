import { getMainUrl } from './getUser';

export const getAverageSessionsUrl = (userId) => {
  return `${getMainUrl(userId)}/average-sessions`;
};
