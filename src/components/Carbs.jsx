export default function Carbs() {
  return (
    <div className="dashboard-card dashboard-carbs">
      <img className="dashboard-card__logo" src="./src/assets/img/apple.svg" alt="Carbs logo" />
      <div>
        <p className="dashboard-card__value">300g</p>
        <p className="dashboard-card__title">Glucides</p>
      </div>
    </div>
  );
}
