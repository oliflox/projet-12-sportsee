export const IMG_PATH = "/src/assets/img/";

const uniformData = ({ data }) => ({
  userId: data.id || data.userId,
  score: data.todayScore || data.score,
  ...data.keyData
});

export { uniformData };

export const formatDays = (day) => {
  const days = ["L", "M", "M", "J", "V", "S", "D"];
  return days[day - 1];
};

export const formatAverageSessions = (sessions) => {
  return sessions?.map((session) => ({
    name: formatDays(session.day),
    value: session.sessionLength,
  })) || [];
};

export const formatActivityData = (sessions) => {
  return sessions?.map((session) => ({
    day: session.day,
    kilogram: session.kilogram,
    calories: session.calories,
  })) || [];
};

export const formatPerformanceData = (data, kindMapping) => {
  if (!data || !Array.isArray(data)) return [];
  return data.map(item => ({
    subject: kindMapping[item.kind],
    value: item.value,
  }));
};

export const formatScoreData = (score) => {
  return [
    {
      uv: 1.0,
      fill: "#FBFBFB",
    },
    {
      uv: score || 0,
      fill: "red",
    },
  ];
};

export const formatNutritionData = (keyData) => {
  if (!keyData) return [];
  
  return [
    {
      id: 'calories',
      value: keyData.calorieCount,
      title: "Calories",
      icon: `${IMG_PATH}energy.svg`,
      iconAlt: "Calories logo",
      className: "dashboard-dayliCal",
      unit: "kCal"
    },
    {
      id: 'proteins',
      value: keyData.proteinCount,
      title: "Proteins",
      icon: `${IMG_PATH}chicken.svg`,
      iconAlt: "Protein logo",
      className: "dashboard-protein",
      unit: "g"
    },
    {
      id: 'carbs',
      value: keyData.carbohydrateCount,
      title: "Carbs",
      icon: `${IMG_PATH}apple.svg`,
      iconAlt: "Carbs logo",
      className: "dashboard-carbs",
      unit: "g"
    },
    {
      id: 'fats',
      value: keyData.lipidCount,
      title: "Fats",
      icon: `${IMG_PATH}cheeseburger.svg`,
      iconAlt: "Fat logo",
      className: "dashboard-fat",
      unit: "g"
    }
  ];
};
