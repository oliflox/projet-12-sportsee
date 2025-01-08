import { getMainUrl } from './getUser';

export const getPerformanceUrl = (userId) => {
  return `${getMainUrl(userId)}/performance`;
};
