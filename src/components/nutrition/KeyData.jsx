import { useNutritionData } from '../../hooks/useChartHooks';
import NutritionCard from './NutritionCard';
import Loading from '../Loading';

const KeyData = () => {
  const { nutritionCards, isLoading } = useNutritionData();

  if (isLoading) {
    return <Loading />;
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
