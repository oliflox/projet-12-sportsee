const NutritionCard = ({ 
  value, 
  title, 
  icon, 
  iconAlt, 
  className,
  unit = 'g' // Valeur par défaut en grammes
}) => {
  return (
    <div className={`dashboard-card ${className}`}>
      <img 
        className="dashboard-card__logo" 
        src={icon} 
        alt={iconAlt} 
      />
      <div>
        <p className="dashboard-card__value">{value ? value : 0} {unit}</p>
        <p className="dashboard-card__title">{title}</p>
      </div>
    </div>
  );
};

export default NutritionCard; 