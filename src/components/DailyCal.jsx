import useMainData from "../hooks/useMainData";

export default function DailyCal() {

  useMainData(12);

  return (
    <div className="dashboard-card dashboard-dayliCal">
      <img className="dashboard-card__logo" src="./src/assets/img/energy.svg" alt="Dayli Calories logo" />
      <div>
        <p className="dashboard-card__value">2470kCal</p>
        <p className="dashboard-card__title">Calories</p>
      </div>
    </div>
  );
}
