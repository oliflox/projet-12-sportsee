export default function Carbs() {
  return (
    <div className="dashboard-carbs dashboard-card">
      <div className="dashboard-carbs__img">
        <img src="./src/assets/img/apple.svg" alt="Carbs logo" />
      </div>
      <div>
        <p className="dashboard-carbs__value">300g</p>
        <p className="dashboard-carbs__title">Glucides</p>
      </div>
    </div>
  );
}
