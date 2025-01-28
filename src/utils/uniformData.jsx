const uniformData = (data) => {
  return {
    userId: data.data.id || data.data.userId,
    score: data.data.todayScore || data.data.score,
    calorieCount: data.data.keyData.calorieCount,
    proteinCount: data.data.keyData.proteinCount,
    carbohydrateCount: data.data.keyData.carbohydrateCount,
    lipidCount: data.data.keyData.lipidCount,
  };
};

export { uniformData };
