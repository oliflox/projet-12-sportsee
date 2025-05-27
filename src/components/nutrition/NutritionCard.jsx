import PropTypes from 'prop-types';

const NutritionCard = ({ 
  value, 
  title, 
  icon, 
  iconAlt, 
  className,
  unit = 'g'
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

NutritionCard.propTypes = {
  value: PropTypes.number,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  iconAlt: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  unit: PropTypes.string
};

export default NutritionCard; 