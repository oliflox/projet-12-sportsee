export const getUserUrls = (userId) => {
  const baseUrl = `http://localhost:3000/user/${userId}`;

  return {
    mainUrl: baseUrl,
    activityUrl: `${baseUrl}/activity`,
    averageSessionsUrl: `${baseUrl}/average-sessions`,
    performanceUrl: `${baseUrl}/performance`,
  };
};