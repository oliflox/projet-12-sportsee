export default function Fat({ keyData }) {
  return (
    <div className="dashboard-card dashboard-fat">
      <img className="dashboard-card__logo" src="./src/assets/img/cheeseburger.svg" alt="Fat logo" />
      <div>
        <p className="dashboard-card__value">{keyData ? keyData.lipidCount : 0} g</p>
        <p className="dashboard-card__title">Fats</p>
      </div>
    </div>
  );
}
