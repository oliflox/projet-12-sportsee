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

const NUTRITION_CONFIG = [
  {
    id: 'calories',
    title: "Calories",
    icon: "energy.svg",
    className: "dashboard-dayliCal",
    unit: "kCal",
    key: "calorieCount"
  },
  {
    id: 'proteins',
    title: "Proteins",
    icon: "chicken.svg",
    className: "dashboard-protein",
    unit: "g",
    key: "proteinCount"
  },
  {
    id: 'carbs',
    title: "Carbs",
    icon: "apple.svg",
    className: "dashboard-carbs",
    unit: "g",
    key: "carbohydrateCount"
  },
  {
    id: 'fats',
    title: "Fats",
    icon: "cheeseburger.svg",
    className: "dashboard-fat",
    unit: "g",
    key: "lipidCount"
  }
];

export const formatNutritionData = (keyData) => {
  return NUTRITION_CONFIG.map(({ id, title, icon, className, unit, key }) => ({
    id,
    value: keyData[key],
    title,
    icon: `${IMG_PATH}${icon}`,
    iconAlt: `${title} logo`,
    className,
    unit
  }));
};
