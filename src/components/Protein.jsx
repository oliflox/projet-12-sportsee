export default function Protein({ keyData }) {
  return (
    <div className="dashboard-card dashboard-protein">
      <img className="dashboard-card__logo" src="./src/assets/img/chicken.svg" alt="Protein logo" />
      <div>
        <p className="dashboard-card__value">{keyData ? keyData : 0} g</p>
        <p className="dashboard-card__title">Proteins</p>
      </div>
    </div>
  );
}
