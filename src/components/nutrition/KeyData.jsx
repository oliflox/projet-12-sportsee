import { useNutritionData } from '../../hooks/hooks';
import NutritionCard from './NutritionCard';

const KeyData = () => {
  const { nutritionCards, isLoading } = useNutritionData();

  if (isLoading) {
    return <div className="loading">Chargement...</div>;
  }

  return (
    <article className='dashboard-analytics__nutrition'>
      {nutritionCards.map((card) => (
        <NutritionCard
          key={card.id}
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
};

export default KeyData;
