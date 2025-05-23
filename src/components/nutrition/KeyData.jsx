import { useKeyDataData } from "../../hooks/hooks";
import useUserId from "../../hooks/useUserId";
import NutritionCard from "./NutritionCard";
import { getNutritionCardsData } from "../../data/nutritionCardsData";

export default function KeyData() {
  const userId = useUserId();
  const keyData = useKeyDataData(userId).data;
  const nutritionCards = getNutritionCardsData(keyData);

  return (
    <article className="dashboard-analytics__nutrition">
      {nutritionCards.map((card, index) => (
        <NutritionCard
          key={index}
          value={card.value}
          title={card.title}
          icon={card.icon}
          iconAlt={card.iconAlt}
          className={card.className}
          unit={card.unit}
        />
      ))}
    </article>
  );
}
