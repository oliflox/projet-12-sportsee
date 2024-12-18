export default function Carbs({ keyData }) {
  return (
    <div className="dashboard-card dashboard-carbs">
      <img className="dashboard-card__logo" src="./src/assets/img/apple.svg" alt="Carbs logo" />
      <div>
        <p className="dashboard-card__value">{keyData ? keyData : 0} g</p>
        <p className="dashboard-card__title">Carbs</p>
      </div>
    </div>
  );
}
