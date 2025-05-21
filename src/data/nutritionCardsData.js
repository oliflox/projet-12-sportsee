export const getNutritionCardsData = (keyData) => [
  {
    value: keyData?.calorieCount,
    title: "Calories",
    icon: "./src/assets/img/energy.svg",
    iconAlt: "Calories logo",
    className: "dashboard-dayliCal",
    unit: "kCal"
  },
  {
    value: keyData?.proteinCount,
    title: "Proteins",
    icon: "./src/assets/img/chicken.svg",
    iconAlt: "Protein logo",
    className: "dashboard-protein"
  },
  {
    value: keyData?.carbohydrateCount,
    title: "Carbs",
    icon: "./src/assets/img/apple.svg",
    iconAlt: "Carbs logo",
    className: "dashboard-carbs"
  },
  {
    value: keyData?.lipidCount,
    title: "Fats",
    icon: "./src/assets/img/cheeseburger.svg",
    iconAlt: "Fat logo",
    className: "dashboard-fat"
  }
]; 