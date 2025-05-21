const uniformData = ({ data }) => ({
  userId: data.id || data.userId,
  score: data.todayScore || data.score,
  ...data.keyData
});

export { uniformData };
