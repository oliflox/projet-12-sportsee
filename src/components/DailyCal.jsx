export default function DailyCal({ keyData }) {
  return (
    <div className="dashboard-card dashboard-dayliCal">
      <img className="dashboard-card__logo" src="./src/assets/img/energy.svg" alt="Dayli Calories logo" />
      <div>
        <p className="dashboard-card__value">{keyData ? keyData.calorieCount : 0} kCal</p>
        <p className="dashboard-card__title">Calories</p>
      </div>
    </div>
  );
}
