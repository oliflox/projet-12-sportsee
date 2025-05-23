import { IMG_PATH } from "../utils/uniformData";

export const getNutritionCardsData = (keyData) => [
  {
    value: keyData?.calorieCount,
    title: "Calories",
    icon: `${IMG_PATH}energy.svg`,
    iconAlt: "Calories logo",
    className: "dashboard-dayliCal",
    unit: "kCal"
  },
  {
    value: keyData?.proteinCount,
    title: "Proteins",
    icon: `${IMG_PATH}chicken.svg`,
    iconAlt: "Protein logo",
    className: "dashboard-protein"
  },
  {
    value: keyData?.carbohydrateCount,
    title: "Carbs",
    icon: `${IMG_PATH}apple.svg`,
    iconAlt: "Carbs logo",
    className: "dashboard-carbs"
  },
  {
    value: keyData?.lipidCount,
    title: "Fats",
    icon: `${IMG_PATH}cheeseburger.svg`,
    iconAlt: "Fat logo",
    className: "dashboard-fat"
  }
]; 